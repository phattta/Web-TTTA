import { FC } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Footer from "../Footer/Footer";

const Home: FC = () => {
  return (
    <section className="" id="home">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 /> 
      <Footer/>
    </section>
  );
};

export default Home;
