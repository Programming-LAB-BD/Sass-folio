export default function Form() {
  return (
    <section className="w-full h-[92.6vh] md:h-[91.3vh] bg-secondary dark:bg-dark_secondary">
      <div className="w-10/12 h-full mx-auto flex items-center justify-center">
        <div className="border-2 w-full border-primary dark:border-dark_primary rounded-lg bg-[#33333346] lg:w-6/12">
          <div className="flex items-center justify-center text-2xl md:text-3xl font-semibold font-sans my-4">
            <div className="border-b-2 inline-block px-3 py-2 border-primary dark:border-dark_primary">
              <h2 className="">Signup Form</h2>
            </div>
          </div>
          <form className="px-4">
            <div className="flex justify-center gap-3 mb-3 px-1">
              <div className="flex flex-col w-6/12">
                <label className="font-medium">Name :</label>
                <input
                  type="text"
                  name="name"
                  className="border-2 rounded-lg border-primary dark:border-dark_primary min-h-5 py-1 md:py-2 px-3 placeholder:text-[#504f4f] bg-[#33333346] focus:outline-none"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="flex flex-col w-6/12">
                <label className="font-medium">Username :</label>
                <input
                  type="text"
                  name="username"
                  className="border-2 rounded-lg border-primary dark:border-dark_primary min-h-5 py-1 md:py-2 px-3 placeholder:text-[#504f4f] bg-[#33333346] focus:outline-none"
                  placeholder="Enter Your Username"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mb-3">
              <label className="font-medium">Email Address :</label>
              <input
                type="email"
                name="email"
                className="border-2 rounded-lg border-primary dark:border-dark_primary min-h-5 py-1 md:py-2 px-3 placeholder:text-[#504f4f] bg-[#33333346] focus:outline-none"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="flex justify-center gap-3 mb-3 px-1">
              <div className="flex flex-col w-6/12">
                <label className="font-medium">Password :</label>
                <input
                  type="password"
                  name="password"
                  className="border-2 rounded-lg border-primary dark:border-dark_primary min-h-5 py-1 md:py-2 px-3 placeholder:text-[#504f4f] bg-[#33333346] focus:outline-none"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="flex flex-col w-6/12 mb-3">
                <label className="font-medium">Confirm Password :</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="border-2 rounded-lg border-primary dark:border-dark_primary min-h-5 py-1 md:py-2 px-3 placeholder:text-[#504f4f] bg-[#33333346] focus:outline-none"
                  placeholder="Enter ConfirmPassword"
                />
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center mb-6">
              <input
                type="submit"
                className="rounded-lg py-2 px-3 w-5/12 bg-primary dark:bg-dark_primary text-secondary dark:text-dark_secondary font-medium cursor-pointer md:text-xl"
                placeholder="Enter ConfirmPassword"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
