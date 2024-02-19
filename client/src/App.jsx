import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
