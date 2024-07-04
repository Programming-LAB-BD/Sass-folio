import ContactInfoItem from "../Contact/ContactInfoItem";
import FormGroup from "../Contact/FormGroup";
import Input from "../Contact/Input";
import Textarea from "../Contact/Textarea";

const contactInfoItems = [
  {
    name: "Address",
    icon: ["fas", "location-dot"],
    text: "198 West 21th Street, Suite 721 New York NY 10016",
  },
  {
    name: "Phone",
    icon: ["fas", "phone"],
    text: "+880 12345 67890",
  },
  {
    name: "Email",
    icon: ["fas", "paper-plane"],
    text: "contact@programminglab.com.bd",
  },
];

const formItems = [
  {
    labelName: "Name",
    placeholderText: "Enter Your Name",
  },
  {
    labelName: "Email Address",
    placeholderText: "Enter Your Email Address",
  },
  {
    labelName: "Subject",
    placeholderText: "Enter Your Subject of Message",
  },
  {
    labelName: "Message",
    placeholderText: "Enter Your Message",
  },
];

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="max-w-screen min-h-screen bg-gradient-to-r from-primary dark:from-dark_primary to-secondary dark:to-dark_secondary border-t-4 border-secondary dark:border-dark_secondary"
    >
      <div className="bg-primary_transparent h-full text-text_primary dark:text-dark_text_primary">
        <div className="w-5/6 mx-auto py-20 md:py-44">
          <div id="heading_are" className="text-center mb-12 md:mb-24">
            <h1 className="text-4xl font-semibold p-2 border-b-4 inline-block">
              Contact Me
            </h1>
          </div>
          <div className="w-full h-full bg-primary dark:bg-dark_primary bg-opacity-50 rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="info md:w-[50%] text-text_secondary dark:text-dark_text_secondary">
                {contactInfoItems.map((item, index) => (
                  <ContactInfoItem
                    name={item.name}
                    icon={item.icon}
                    text={item.text}
                    key={index}
                    index={index}
                  />
                ))}
              </div>
              <div className="form w-full bg-secondary dark:bg-dark_secondary rounded-lg p-8">
                <div className="heading text-2xl font-medium mb-6">
                  <h1>Get in touch</h1>
                </div>
                <form>
                  <div className="flex flex-col">
                    {formItems.map((item, index) => (
                      <FormGroup name={item.labelName} key={index}>
                        {item.labelName !== "Message" ? (
                          <Input
                            classes={
                              "p-2 w-full bg-input_primary dark:bg-dark_input_primary border-2 rounded-lg mt-1"
                            }
                            placeholderText={item.placeholderText}
                          />
                        ) : (
                          <Textarea
                            classes={
                              "p-2 w-full bg-input_primary dark:bg-dark_input_primary border-2 rounded-lg mt-1"
                            }
                            placeholderText={item.placeholderText}
                          />
                        )}
                      </FormGroup>
                    ))}
                    <div className="form-group mb-6 flex justify-center">
                      <input
                        type="submit"
                        className="border-2 px-6 py-2 rounded-lg cursor-pointer bg-input_primary dark:bg-dark_input_primary transition hover:bg-hover_secondary dark:hover:bg-dark_hover_secondary"
                        value="Submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
