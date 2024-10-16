import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../Routes/Routers";
import Hangging_btn from "../components/General/Hangging_btn";




const Layout = () =>
{
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
      <Hangging_btn />
    </>
  );
};

export default Layout;