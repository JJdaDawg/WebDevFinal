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
        <main className="flex-1 w-full">
          <div>
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
