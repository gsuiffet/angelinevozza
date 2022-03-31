import Instagram from "assets/instagram.svg";
import Linkedin from "assets/linkedin.svg";
import {
  INSTAGRAM,
  LINKEDIN,
} from "constants/config";

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="bg-pattern bg-repeat">
        <div className="section flex space-x-5 items-center justify-between">
          <div className="flex space-x-5 my-4">
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              <Linkedin height={32} />
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
              <Instagram height={32} />
            </a>
          </div>
          <div className="text-black text-tiny">@ AV Créations Graphiques 2022</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
