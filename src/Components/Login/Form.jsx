import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);

    if (email === "" && password === "") return;

    try {
      let obj = {
        email,
        password,
      };

      let data = await axios.post(
        `${import.meta.env.REACT_APP_BACKEND_URI}/user/login`,
        obj
      );

      if (data.data.message === "Login successfully.") {
        Cookies.set("saas-folio", data.data.jwtToken, {
          expires: 7,
        });

        setSubmit(false);

        navigate("/dashboard/");
        return;
      }

      if (data.data.message === "Wrong email or password.") {
        toast(data.data.message, {
          position: "top-center",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setSubmit(false);
    } catch (error) {
      console.error("Error:", error);
      setSubmit(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="w-full h-[92.6vh] md:h-[91.3vh]">
        <div className="w-10/12 h-full mx-auto flex items-center justify-center">
          <div className="border-2 w-full border-primary dark:border-dark_primary rounded-lg bg-[#33333346] lg:w-4/12">
            <div className="flex items-center justify-center text-2xl md:text-3xl font-semibold font-sans my-4">
              <div className="border-b-2 inline-block px-3 py-2 border-primary dark:border-dark_primary">
                <h2 className="">Login Form</h2>
              </div>
            </div>
            <form className="px-4" onSubmit={handleSubmit}>
              <div className="flex flex-col w-full mb-3">
                <label className="font-medium">Email Address :</label>
                <input
                  type="email"
                  className="border-2 rounded-lg border-primary dark:border-dark_primary min-h-5 py-1 md:py-2 px-3 placeholder:text-[#504f4f] bg-[#33333346] focus:outline-none"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col w-full mb-3">
                <label className="font-medium">Password :</label>
                <input
                  type="password"
                  name="password"
                  className="border-2 rounded-lg border-primary dark:border-dark_primary min-h-5 py-1 md:py-2 px-3 placeholder:text-[#504f4f] bg-[#33333346] focus:outline-none"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col w-full justify-center items-center mb-6">
                <button
                  type="submit"
                  className="rounded-lg flex items-center justify-center gap-2 py-2 px-3 w-5/12 bg-primary dark:bg-dark_primary text-secondary dark:text-dark_secondary font-medium cursor-pointer md:text-xl"
                  disabled={submit}
                >
                  {submit && (
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
    </>
  );
}
