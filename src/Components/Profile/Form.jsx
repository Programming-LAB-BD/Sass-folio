const inputItems = [
  {
    labelName: "Full Name",
    input: "input",
    inputName: "name",
    inputType: "text",
    placeholderText: "Enter your Full Name.",
    infotext: "Please choose a password.",
  },
  {
    labelName: "Title",
    input: "input",
    inputName: "title",
    inputType: "text",
    placeholderText: "Enter your Title.",
    infotext: "Please choose a password.",
  },
  {
    labelName: "Description",
    input: "textarea",
    inputName: "description",
    inputType: "text",
    placeholderText: "Enter your Description.",
    infotext: "Please choose a password.",
  },
  {
    labelName: "Logo",
    input: "input",
    inputName: "logo",
    inputType: "file",
    placeholderText: "",
    infotext: "Please choose a password.",
  },
  {
    labelName: "Picture",
    input: "input",
    inputName: "picture",
    inputType: "file",
    placeholderText: "",
    infotext: "Please choose a password.",
  },
  {
    labelName: "Introduction",
    input: "textarea",
    inputName: "intro",
    inputType: "text",
    placeholderText: "Enter your Introduction in 200-1000 chars.",
    infotext: "Please choose a password.",
  },
  {
    labelName: "Social Links",
    input: "double",
    firstItem: {
      input: "input",
      inputName: "",
      inputType: "file",
      placeholderText: "",
      infotext: "Please choose a password.",
      widthLength: "small",
    },
    secondItem: {
      input: "input",
      inputName: "",
      inputType: "text",
      placeholderText: "Enter Your Link",
      infotext: "Please choose a password.",
      widthLength: "big",
    },
  },
  {
    labelName: "About yourself",
    input: "textarea",
    inputName: "about",
    inputType: "text",
    placeholderText: "Enter your About in minimum 700 chars.",
    infotext: "Please choose a password.",
  },
  {
    labelName: "Skills",
    input: "double",
    firstItem: {
      input: "input",
      inputName: "",
      inputType: "text",
      placeholderText: "Enter Your Skill Name.",
      infotext: "Please choose a password.",
      widthLength: "big",
    },
    secondItem: {
      input: "input",
      inputName: "",
      inputType: "number",
      placeholderText: "Skill Progress.",
      infotext: "Please choose a password.",
      widthLength: "small",
    },
  },
  {
    labelName: "Address",
    input: "input",
    inputName: "address",
    inputType: "text",
    placeholderText: "Enter your Address",
    infotext: "Please choose a password.",
  },
  {
    labelName: "Phone Number",
    input: "input",
    inputName: "phone",
    inputType: "text",
    placeholderText: "Enter your Phone Number.",
    infotext: "Please choose a password.",
  },
  {
    labelName: "Public Email Address",
    input: "input",
    inputName: "email",
    inputType: "email",
    placeholderText: "Enter your Public Email Address.",
    infotext: "Please choose a password.",
  },
];

export default function Form() {
  return (
    <section className="mt-24">
      <div className="w-10/12 lg:w-8/12 mx-auto">
        <form>
          {inputItems.map((item, index) => {
            if (item.input !== "double") {
              return (
                <div className="flex flex-col mb-6" key={index}>
                  <label className="mb-1 font-medium">{item.labelName} :</label>
                  {item.input === "input" ? (
                    <input
                      type={item.inputType}
                      name={item.inputName}
                      placeholder={item.placeholderText}
                      className={`border-2 p-2 max-w-[350px] rounded-md focus:outline-2 focus:outline-gray-400 ${
                        item.inputType === "file"
                          ? "file:text-sm file:bg-gray-200 file:py-1 file:px-2 file:rounded-2xl file:border-0"
                          : ""
                      } ${
                        item.inputType === "number"
                          ? "[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                          : ""
                      }`}
                    />
                  ) : (
                    <textarea
                      type={item.inputType}
                      name={item.inputName}
                      placeholder={item.placeholderText}
                      className="border-2 p-2 max-w-[350px] rounded-md focus:outline-2 focus:outline-gray-400"
                      rows="3"
                    ></textarea>
                  )}
                  <p className="text-zinc-600 text-xs italic pl-1">
                    {item.infotext}
                  </p>
                </div>
              );
            } else {
              return (
                <div className="flex flex-col mb-6" key={index}>
                  <label className="mb-1 font-medium">{item.labelName} :</label>
                  <div className="grid gap-2 grid-cols-3 md:max-w-[500px]">
                    <div
                      className={
                        item.firstItem.widthLength === "big"
                          ? "col-span-2"
                          : "col-span-1"
                      }
                    >
                      <input
                        type={item.firstItem.inputType}
                        name={item.firstItem.inputName}
                        placeholder={item.firstItem.placeholderText}
                        className={`border-2 px-2 py-[6.5px] rounded-md w-full focus:outline-2 focus:outline-gray-400 ${
                          item.firstItem.inputType === "file"
                            ? "file:text-sm file:bg-gray-200 file:py-1 file:px-2 file:rounded-2xl file:border-0"
                            : ""
                        } ${
                          item.firstItem.inputType === "number"
                            ? "[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                            : ""
                        }`}
                      />
                      <p className="text-zinc-600 text-xs italic pl-1">
                        {item.firstItem.infotext}
                      </p>
                    </div>
                    <div
                      className={
                        item.secondItem.widthLength === "big"
                          ? "col-span-2"
                          : "col-span-1"
                      }
                    >
                      <input
                        type={item.secondItem.inputType}
                        name={item.secondItem.inputName}
                        placeholder={item.secondItem.placeholderText}
                        className={`border-2 p-2 w-full rounded-md focus:outline-2 focus:outline-gray-400 ${
                          item.secondItem.inputType === "file"
                            ? "file:text-sm file:bg-gray-200 file:py-1 file:px-2 file:rounded-2xl file:border-0"
                            : ""
                        } ${
                          item.secondItem.inputType === "number"
                            ? "[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                            : ""
                        }`}
                      />
                      <p className="text-zinc-600 text-xs italic pl-1">
                        {item.secondItem.infotext}
                      </p>
                    </div>
                  </div>
                  <button className="bg-blue-600 py-3 text-white font-medium w-32 my-3 rounded-lg">
                    Add Social Link
                  </button>
                </div>
              );
            }
          })}
          <button
            type="submit"
            className="bg-blue-600 py-3 text-white font-medium w-32 my-3 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
