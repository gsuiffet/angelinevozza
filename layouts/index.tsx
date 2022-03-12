import SEO, { SEOProps } from "components/Seo";
import Footer from "layouts/footer";
import Header from "layouts/header";
import { FC } from "react";

interface MainLayoutProps extends SEOProps {
  isFooter?: boolean;
}

const MainLayout: FC<MainLayoutProps> = ({ children, isFooter, ...props }) => {
  return (
    <>
      <SEO {...props} />
      <Header />
      <main>{children}</main>
      {!isFooter && <Footer />}
    </>
  );
};

export default MainLayout;
