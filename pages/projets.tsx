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
    previewProject: "fd_project/contact-card-fd.svg",
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
];

const Project: NextPage = () => {
  const [initialState] = projects;
  const [selectedProject, setSelectedProject] = useState(initialState);
  return (
    <MainLayout isFooter={true}>
      <div className="flex flex-col justify-between min-h-screen">
        <div className="md:grid grid-cols-3 mt-[0.20rem] flex flex-col-reverse md:flex-col">
          <div className="col-span-2 md:min-h-screen -mt-16 relative md:overflow-y-hidden">
            <div className="section mt-20 md:mt-36 md:mb-36 p-4 md:pb-36 max-h-screen overflow-y-auto md:absolute">
              <h2 className="section mt-6">{selectedProject.title}</h2>
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
          {/*TODO make it fixed*/}
          <div className="relative md:border-l md:border-grey backdrop-brightness-200 h-60 md:min-h-screen mt-16 md:-mt-16 md:overflow-y-hidden md:overflow-y-auto">
            <div className="md:my-32 p-4 md:pb-36 flex md:flex-wrap max-h-screen overflow-y-auto md:overflow-x-auto md:absolute">
              {projects.map(({title, previewProject}, index) => {
                const projectStyle = { backgroundImage: `url(${previewProject}`};
                return <div
                  key={index}
                  className="parent cursor-pointer min-w-[128px] w-32 h-48 rounded-xl bg-no-repeat bg-center m-4 shadow-2xl"
                  style={projectStyle}
                  onClick={() => {
                    const projectToDisplay = projects.find(({title: projectTitle}) => projectTitle === title);
                    if (projectToDisplay) {
                      setSelectedProject(projectToDisplay)
                    }
                  }}
                >
                  <div className="animated-card invisible parent-hover:visible h-full rounded-xl flex items-center justify-center">
                    <h3 className="text-white">{title}</h3>
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
