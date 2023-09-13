import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Preview from "./components/Preview";
import Search from "./components/Search";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <div className="w-full px-[18px]">
      <Header />
      <Steps />
      <Form />
      <Search />
      <Preview />
      <Footer />
    </div>
  );
}
