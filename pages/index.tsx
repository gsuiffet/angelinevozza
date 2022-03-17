import React, {useEffect} from "react";
import MainLayout from "layouts";
import type { NextPage } from "next";
import Emphasis from "components/Emphasis";
import { scrollTo } from "../helpers/animateScroll";
import VerticalNavigation from "../components/VerticalNavigation";
import mailgo from "mailgo";
import Contact from "../components/Contact";
import RedirectCard from "../components/RedirectCard";

const subTitle = {
  text: "Je suis Graphiste, webdesigner, tatooeur, illustratrice... Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  emphasis: ["Graphiste", "webdesigner", "tatooeur", "illustratrice"],
}

const mailgoConfig = {
  dark: true,
  actions: {
    yahoo: false,
    skype: false,
    gmail: false,
    outlook: false,
    telegram: false,
    whatsapp: false,
    custom: false
  },
  showFooter: false,
};


const Homepage: NextPage = () => {
  const handleClick = (scrollId: string) => {
    scrollTo({ id: scrollId });
  };

  useEffect(() => {
    mailgo(mailgoConfig);
  }, []);

  return (
    <MainLayout>
      <div className="bg-wave bg-repeat relative">
        <section className="section flex justify-center items-center flex-col min-h-screen">
          <img src="home-illustration.svg" alt="illustration logo" className="mb-24 md:mb-0"/>
          <VerticalNavigation animate={true} onClickDown={() => handleClick("who-i-am")}/>
        </section>
      </div>
      <div id="who-i-am" className="min-h-screen relative flex">
        <div className="absolute md:relative min-h-screen w-full md:w-3/5 bg-angelineVozza bg-no-repeat bg-cover">
          <div className="bg-red/[0.45] min-h-screen w-full pt-20 md:pt-44 pb-16"/>
        </div>
        <section className="md:bg-wave md:bg-repeat absolute md:relative min-h-screen section flex w-full md:w-2/5 justify-end md:justify-center items-center flex-col pt-20 pb-16">
          <div className="absolute mx-12">
            <h1 className="text-white md:text-black">Qui suis je ?</h1>
            <p className="max-w-md text-white md:text-black my-4">
              <Emphasis title={subTitle} />
            </p>
            <Contact />
          </div>
        </section>
      </div>
      <section id="project-illustration" className="grid grid-cols-2 py-20 bg-wave bg-repeat">
        <div className="h-full w-full flex justify-center items-center">
          <RedirectCard href="/projets" title="Mes projets" bg="bg-no-repeat bg-projets bg-contain bg-center"/>
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <RedirectCard href="/artwork" title="Mes Artwork" bg="bg-no-repeat bg-illustration bg-contain bg-center"/>
        </div>
      </section>
    </MainLayout>
  );
};

export default Homepage;
