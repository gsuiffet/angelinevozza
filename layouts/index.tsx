import "react-toastify/dist/ReactToastify.css";

import SEO, { SEOProps } from "components/Seo";
import Footer from "layouts/footer";
import Header from "layouts/header";
import { FC } from "react";
import { ToastContainer } from "react-toastify";

interface MainLayoutProps extends SEOProps {
  isFooter?: boolean;
  smallHeader?: boolean;
}

const MainLayout: FC<MainLayoutProps> = ({ children, isFooter, smallHeader, ...props }) => {
  return (
    <>
      <SEO {...props} />
      <Header smallHeader={smallHeader}/>
      <main>{children}</main>
      <ToastContainer position="bottom-right" />
      {!isFooter && <Footer />}
    </>
  );
};

export default MainLayout;
