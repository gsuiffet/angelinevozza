import React, {useState} from "react";
import MainLayout from "layouts";
import { NextPage } from "next";
import Footer from "../layouts/footer";
import Gallery from "react-photo-gallery";

const projects = [
  {
    title: "Shoko",
    isLogoRounded: true,
    previewProject: "shoko_project/logo-shoko.svg",
    logos: ["shoko_project/logo-shoko.svg", "shoko_project/logo-shoko1.svg", "shoko_project/logo-shoko2.svg"],
    contactCard: ["shoko_project/contact-card-shoko.svg", "shoko_project/contact-card-shoko1.svg"],
    description: "Shoko voulait représenter son pays et sa culture. Elle organise des voyages.. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    flyer: [],
    images: []
  },
  {
    title: "Enjol",
    isLogoRounded: false,
    previewProject: "enjol_project/logo-enjol.svg",
    logos: ["enjol_project/logo-enjol.svg"],
    contactCard: ["enjol_project/contact-card-enjol.svg"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    flyer: [],
    images: []
  },
  {
    title: "FD",
    isLogoRounded: false,
    previewProject: "fd_project/img2.jpg",
    logos: [],
    contactCard: ["fd_project/contact-card-fd.svg", "fd_project/contact-card-fd1.svg"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    flyer: ["fd_project/flyer"],
    images: [
      {
        src: "/fd_project/flyer.svg",
        width: 2,
        height: 1
      },
      {
        src: "/fd_project/img1.svg",
        width: 2,
        height: 1
      },
      {
        src: "/fd_project/img2.jpg",
        width: 1,
        height: 1
      },
      {
        src: "/fd_project/img3.jpg",
        width: 1,
        height: 1
      },
      {
        src: "/fd_project/img4.jpg",
        width: 1,
        height: 1
      },
      {
        src: "/fd_project/img5.jpg",
        width: 1,
        height: 1
      },
    ]
  },
  {
    title: "Jules verne",
    isLogoRounded: true,
    previewProject: "jules_verne_project/logo-jf.svg",
    logos: [
      "jules_verne_project/logo-jf.svg",
      "jules_verne_project/logo recherche jules vernes.svg",
      "jules_verne_project/logo recherche jules vernes2.svg"
    ],
    contactCard: [],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    flyer: [],
    images: [
      {
        src: "/jules_verne_project/1646669143316.jpg",
        width: 1,
        height: 1
      },
      {
        src: "/jules_verne_project/1646673998751.jpg",
        width: 1,
        height: 1
      },
      {
        src: "/jules_verne_project/1646674030615.jpg",
        width: 1,
        height: 1
      },
      {
        src: "/jules_verne_project/1646674030630.jpg",
        width: 1,
        height: 1
      },
      {
        src: "/jules_verne_project/1646674030640.jpg",
        width: 1,
        height: 1
      },
    ]
  },
];

const Project: NextPage = () => {
  const [initialState] = projects;
  const [selectedProject, setSelectedProject] = useState(initialState);
  return (
    <MainLayout isFooter={true} smallHeader={true}>
      <div className="flex flex-col justify-between min-h-screen">
        <div className="grid grid-cols-5 md:grid-cols-3">
          <div className="col-span-4 mt-20 md:-mt-24 md:col-span-2 relative overflow-y-hidden min-h-screen">
            <div className="section px-4 md:mt-36 md:pb-36 h-full overflow-y-auto absolute">
              <h2 className="section mt-10">{selectedProject.title}</h2>
              <p className="my-4">{selectedProject.description}</p>
                {selectedProject.logos.length ?
                  <div className="my-6">
                    <h3>Logos</h3>
                    <div className="flex flex-wrap">
                      {selectedProject.logos.map((logo, index) => {
                        return <img src={logo} alt={logo} key={index} className={`w-32 m-4 shadow-lg ${selectedProject.isLogoRounded ? "rounded-full" : ""}`}/>
                      })}
                    </div>
                  </div>
                : null}
              {selectedProject.contactCard.length ?
              <>
                <div className="my-6">
                  <h3>Carte de visite</h3>
                  <div className="flex flex-wrap">
                    {selectedProject.contactCard.map((logo, index) => {
                      return <img src={logo} alt={logo} key={index} className="w-64 m-4 shadow-lg"/>
                    })}
                  </div>
                </div>
              </>
              : null}
              {selectedProject.images.length ?
                <div className="my-6">
                  <h3>Autres design</h3>
                  <Gallery photos={selectedProject.images} />
                </div>
              : null}
            </div>
          </div>
          <div className="relative border-l border-grey backdrop-brightness-200 min-h-screen -mt-20 md:mb-0 md:-mt-16 overflow-y-auto">
            <div className="mt-40 md:mt-32 md:px-2 overflow-y-auto relative md:absolute md:flex md:flex-wrap">
              {projects.map(({title, previewProject}, index) => {
                const projectToDisplay = projects.find(({title: projectTitle}) => projectTitle === title);
                const projectStyle = { backgroundImage: `url(${previewProject}`};
                return <div key={index} className="w-full md:min-w-[128px] md:w-32 h-32 md:h-48 my-2 flex items-center justify-center">
                  <div
                    className={`parent cursor-pointer w-full md:min-w-[128px] md:w-32 h-32 md:h-48 md:rounded-xl bg-no-repeat bg-center my-2 md:m-4 shadow-2xl ${selectedProject.title === title ? "opacity-10" : ""}`}
                    style={projectStyle}
                    onClick={() => {
                      if (projectToDisplay) {
                        setSelectedProject(projectToDisplay)
                      }
                    }}
                  >
                    <div className="hidden md:flex hover:text-white animated-card invisible parent-hover:visible h-full rounded-xl items-center justify-center">
                      <h3>{title}</h3>
                    </div>
                  </div>
                  <div className="absolute">
                    <h3 className={`${selectedProject.title !== title ? "invisible" : ""}`}>{title}</h3>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </MainLayout>
  );
};

export default Project;
