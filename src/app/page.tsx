import Home from "./components/Home/Home";
import Page1 from "./components/Home/components/Page1";
import Page2 from "./components/Home/components/Page2";
import Page3 from "./components/Home/components/Page3";
import Page4 from "./components/Home/components/Page4";
import Page6 from "./components/Home/components/Page6";
import Footer from "./components/Footer/Footer";

export default function Main() {
  return (
    <>
      <Home/>
    </>
  );
}

export function HomePage() {
  return (
    <main>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page6 />
      <Footer />
    </main>
  );
}
