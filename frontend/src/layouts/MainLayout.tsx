import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header>
          <Header />
        </header>
        <main>
          <div className="flex-1">
            {/*  Your content*/}
            <Outlet />
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
