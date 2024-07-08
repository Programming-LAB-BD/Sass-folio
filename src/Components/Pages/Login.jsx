import Form from "../Login/Form";
import Header from "../Signup/Header";

export default function Login() {
  return (
    <>
      <Header hrefProps="/signup" name="Signup" />
      <Form />
    </>
  );
}
