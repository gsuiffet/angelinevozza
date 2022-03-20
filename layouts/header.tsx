import Link from "components/Link";
import Nav from "components/Nav";
import { useEffect, useState } from "react";

const Header = ({smallHeader = false}: {smallHeader?: boolean}) => {
  const [headerClassName, setHeaderClassName] = useState("py-5");

  useEffect(() => {
    const listener = () => {
      const pos = document.body.scrollTop || document.documentElement.scrollTop;
      setHeaderClassName(pos > 0 ? "py-2" : "py-5");
    };

    window.addEventListener("scroll", listener, { passive: true });
    listener();
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header className="fixed z-[150] inset-x-0 transition-all duration-200 bg-white">
      <div className={`bg-pattern bg-repeat h-full ${smallHeader ? "py-4 md:py-2" : headerClassName}`}>
        <div className="section flex justify-between snap-align-none items-center">
          <Link href="/">
            <img className="w-10" src="/logo.svg" alt="Logo" />
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
