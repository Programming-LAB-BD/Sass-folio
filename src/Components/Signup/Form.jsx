import { useState } from "react";
import Input from "./Input";

export default function Form() {
  const [name, setName] = useState({ value: "", info: "" });
  const [username, setUsername] = useState({ value: "", info: "" });
  const [email, setEmail] = useState({ value: "", info: "", isReady: false });
  const [password, setPassword] = useState({ value: "", info: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    info: "",
  });
  const [submitProcess, setSubmitProcess] = useState(false);

  const nameInput = (e) => {
    let newValue = e.target.value;
    setName((prev) => {
      return {
        ...prev,
        value: newValue,
        info: newValue.length < 6 && "Name Must be Greater than 6 characters.",
      };
    });
  };

  const usernameInput = (e) => {
    let newValue = e.target.value;
    setUsername((prev) => {
      return {
        ...prev,
        value: newValue,
        info:
          newValue.length < 6 && "Username Must be Greater than 6 characters.",
      };
    });
  };

  const emailInput = async (e) => {
    // eslint-disable-next-line no-useless-escape
    let isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let newValue = e.target.value;

    setEmail((prev) => {
      return {
        ...prev,
        value: newValue,
      };
    });

    if (e.target?.value && e.target.value.match(isValidEmail)) {
      try {
        setEmail((prev) => {
          return {
            ...prev,
            info: "Availability checking",
            isReady: false,
          };
        });

        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        let req = new Request("http://localhost:3000/api/find/email", {
          method: "POST",
          body: JSON.stringify({
            email: newValue,
          }),
          headers,
        });

        let response = await fetch(req);
        let data = await response.json();

        setEmail((prev) => {
          return {
            ...prev,
            info: data.message,
            isReady: data.availability,
          };
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      setEmail((prev) => {
        return {
          ...prev,
          info: "Email is not valid.",
          isReady: false,
        };
      });
    }
  };

  const passwordInput = (e) => {
    let newValue = e.target.value;
    setPassword((prev) => {
      return {
        ...prev,
        value: newValue,
        info:
          newValue.length < 8 && "Password Must be Greater than 8 characters.",
      };
    });
  };

  const confirmPasswordInput = (e) => {
    let newValue = e.target.value;
    setConfirmPassword((prev) => {
      return {
        ...prev,
        value: newValue,
        info: newValue !== password.value && "Confirm Password dosn't matched.",
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitProcess(true);

    if (
      name.info.length !== undefined ||
      username.info.length !== undefined ||
      !email.isReady ||
      password.info.length !== undefined ||
      confirmPassword.info.length !== undefined ||
      confirmPassword.value !== password.value
    ) {
      console.log(email.isReady);
      setSubmitProcess(false);
      return;
    }

    try {
      let obj = {
        name: name.value,
        username: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      };

      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      let req = new Request("http://localhost:3000/user/create", {
        method: "POST",
        body: JSON.stringify(obj),
        headers,
      });

      let response = await fetch(req);
      let data = await response.json();

      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }

    setSubmitProcess(false);
  };

  return (
    <section className="w-full h-[92.6vh] md:h-[91.3vh]">
      <div className="w-10/12 h-full mx-auto flex items-center justify-center">
        <div className="border-2 w-full border-primary dark:border-dark_primary rounded-lg bg-[#33333346] lg:w-6/12">
          <div className="flex items-center justify-center text-2xl md:text-3xl font-semibold font-sans my-4">
            <div className="border-b-2 inline-block px-3 py-2 border-primary dark:border-dark_primary">
              <h2 className="">Signup Form</h2>
            </div>
          </div>
          <form className="px-4" onSubmit={handleSubmit}>
            <div className="flex justify-center gap-3 mb-3 px-1">
              <div className="flex flex-col w-6/12">
                {/* Name input code here */}

                <label className="font-medium">Name :</label>
                <Input
                  required
                  type="text"
                  name="name"
                  className="border-2 rounded-lg border-primary dark:border-dark_primary min-h-5 py-1 md:py-2 px-3 placeholder:text-[#504f4f] bg-[#33333346] focus:outline-none"
                  placeholder="Enter Your Name"
                  value={name.value}
                  onChange={nameInput}
                />
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  {name.info}
                </span>
              </div>
              <div className="flex flex-col w-6/12">
                {/* Username input code here */}

                <label className="font-medium">Username :</label>
                <Input
                  required
                  type="text"
                  name="username"
                  className="border-2 rounded-lg border-primary dark:border-dark_primary min-h-5 py-1 md:py-2 px-3 placeholder:text-[#504f4f] bg-[#33333346] focus:outline-none"
                  placeholder="Enter Your Username"
                  value={username.value}
                  onChange={usernameInput}
                />
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  {username.info}
                </span>
              </div>
            </div>
            <div className="flex flex-col w-full mb-3">
              {/* Email input code here */}

              <label className="font-medium">Email Address :</label>
              <Input
                required
                type="email"
                name="email"
                className="border-2 rounded-lg border-primary dark:border-dark_primary min-h-5 py-1 md:py-2 px-3 placeholder:text-[#504f4f] bg-[#33333346] focus:outline-none"
                placeholder="Enter Your Email Address"
                value={email.value}
                onChange={emailInput}
              />
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {email.info === "Availability checking" ? (
                  <>
                    <svg
                      aria-hidden="true"
                      className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>{" "}
                    <span className="text-green-500 ml-1">
                      Availability checking
                    </span>{" "}
                  </>
                ) : email.info === "Email is available." ? (
                  <span className="text-green-500">{email.info}</span>
                ) : (
                  email.info
                )}
              </span>
            </div>
            <div className="flex justify-center gap-3 mb-3 px-1">
              <div className="flex flex-col w-6/12">
                {/* Password input code here */}

                <label className="font-medium">Password :</label>
                <Input
                  required
                  type="password"
                  name="password"
                  className="border-2 rounded-lg border-primary dark:border-dark_primary min-h-5 py-1 md:py-2 px-3 placeholder:text-[#504f4f] bg-[#33333346] focus:outline-none"
                  placeholder="Enter Your Password"
                  value={password.value}
                  onChange={passwordInput}
                />
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  {password.info}
                </span>
              </div>
              <div className="flex flex-col w-6/12 mb-3">
                {/* Confirm Password input code here */}

                <label className="font-medium">Confirm Password :</label>
                <Input
                  required
                  type="password"
                  name="confirmPassword"
                  className="border-2 rounded-lg border-primary dark:border-dark_primary min-h-5 py-1 md:py-2 px-3 placeholder:text-[#504f4f] bg-[#33333346] focus:outline-none"
                  placeholder="Enter ConfirmPassword"
                  value={confirmPassword.value}
                  onChange={confirmPasswordInput}
                />
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  {confirmPassword.info}
                </span>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center mb-6">
              <button
                type="submit"
                className="rounded-lg flex items-center justify-center gap-2 py-2 px-3 w-5/12 bg-primary dark:bg-dark_primary text-secondary dark:text-dark_secondary font-medium cursor-pointer md:text-xl"
                disabled={submitProcess}
              >
                {submitProcess && (
                  <svg
                    aria-hidden="true"
                    className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                )}
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
