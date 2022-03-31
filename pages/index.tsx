import React from "react";
import MainLayout from "layouts";
import type { NextPage } from "next";
import { scrollTo } from "../helpers/animateScroll";
import VerticalNavigation from "../components/VerticalNavigation";
import Contact from "../components/Contact";
import RedirectCard from "../components/RedirectCard";

const Homepage: NextPage = () => {
  const style = { backgroundImage: `url("https://images.prismic.io/angelinevozza/d89d797a-f297-43f8-ac3f-ccb9ea0c6e67_photomoi.jpg?auto=compress,format")` };

  const handleClick = (scrollId: string) => {
    scrollTo({ id: scrollId });
  };

  return (
    <MainLayout>
      <div className="bg-pattern bg-repeat relative">
        <section className="section flex justify-center items-center flex-col min-h-screen">
          <img src="home-illustration.svg" alt="illustration logo" className="mb-24 md:mb-0"/>
          <VerticalNavigation animate={true} onClickDown={() => handleClick("who-i-am")}/>
        </section>
      </div>
      <div id="who-i-am" className="min-h-screen relative flex">
        <div className="absolute md:relative min-h-screen w-full md:w-3/5 bg-no-repeat bg-cover" style={style}>
          <div className="bg-red/[0.45] min-h-screen w-full pt-20 md:pt-44 pb-16"/>
        </div>
        <section className="md:bg-pattern md:bg-repeat absolute md:relative min-h-screen section flex w-full md:w-2/5 justify-end md:justify-center items-center flex-col pt-20 pb-16">
          <div className="absolute mx-6 lg:mx-12">
            <h1 className="text-white md:text-black">Qui suis-je ?</h1>
            <p className="max-w-md text-white md:text-black my-4">
              Passionnée de dessin depuis l’enfance, je m’oriente naturellement vers les arts graphiques durant mes études. Je me tourne ensuite vers l’artisanat. Riche de dix années d’expérience, je décide de vivre à plein temps ma passion.
            </p>
            <p className="max-w-md text-white md:text-black my-4">
              Je réalise logo, carte de visite, flyer, et tout support de communication pour votre entreprise.            </p>
            <p className="max-w-md text-white md:text-black my-4">
              Attirée par les arts sous toutes ses formes, mes inspirations sont diversifiées.
            </p>
            <p className="mb-4 flex w-full justify-center">
              <em className="whitespace-normal text-center">Je personnalise vos projets à votre image.</em>
            </p>
            <Contact />
          </div>
        </section>
      </div>
      <section id="project-illustration" className="grid grid-cols-2 py-20 bg-pattern bg-repeat">
        <div className="h-full w-full flex justify-center items-center">
          <RedirectCard href="/projets" title="Voir les projets" bg="bg-no-repeat bg-projets bg-contain bg-center"/>
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <RedirectCard href="/artwork" title="Voir les artwork" bg="bg-no-repeat bg-illustration bg-contain bg-center"/>
        </div>
      </section>
    </MainLayout>
  );
};

export default Homepage;
