import MainContainer from "../Container/MainContainer";
import Header from "../Header/Header";

// Imported Fontawesome Globally
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Setup Fontawesome Globally
config.autoAddCss = false;
library.add(fas, fab);

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  );
}
