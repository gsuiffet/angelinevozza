import React, {useState, useRef, useCallback} from "react";
import MainLayout from "layouts";
import { NextPage } from "next";
import Footer from "../layouts/footer";
import Gallery from "react-photo-gallery";
import Card from "../components/Card";
import ImgsViewer from "react-images-viewer";

interface Image {
  src: string,
  width: number,
  height: number
}

interface IProject {
  title: string,
  isLogoRounded: boolean,
  previewProject: string,
  logo: string,
  searchLogos: string[],
  contactCard: string[],
  description: string,
  flyer: string[],
  images: Image[]
}

const projects: IProject[] = [
  {
    title: "Shoko",
    isLogoRounded: true,
    previewProject: "shoko_project/logo-shoko.svg",
    logo: "shoko_project/logo-shoko.svg",
    searchLogos: ["shoko_project/logo-shoko2.svg", "shoko_project/logo-shoko1.svg"],
    contactCard: ["shoko_project/contact-card-shoko.svg", "shoko_project/contact-card-shoko1.svg"],
    description: "Shoko voulait représenter son pays et sa culture. Elle organise des voyages.. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    flyer: [],
    images: []
  },
  {
    title: "Enjol",
    isLogoRounded: false,
    previewProject: "enjol_project/logo-enjol.svg",
    logo: "enjol_project/logo-enjol.svg",
    searchLogos: [],
    contactCard: ["enjol_project/contact-card-enjol.svg"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    flyer: [],
    images: []
  },
  {
    title: "FD",
    isLogoRounded: false,
    previewProject: "fd_project/img2.jpg",
    logo: "",
    searchLogos: [],
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
    logo: "jules_verne_project/logo-jf.svg",
    searchLogos: [
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
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const topPage = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  function executeScroll() {
    ref.current?.scroll({top: 0})
    topPage?.current?.scrollIntoView();
  }
  return (
    <MainLayout isFooter={true} smallHeader={!!selectedProject}>
      <div ref={topPage} className="flex flex-col justify-between min-h-screen">
        <div className={`${selectedProject ? "md:grid md:grid-cols-3" : ""}`}>
          {
            selectedProject &&
            <div className="col-span-4 mt-20 md:-mt-24 md:col-span-2 relative overflow-y-hidden md:min-h-screen">
              <div ref={ref} className="section px-4 md:mt-36 md:pb-36 h-full md:overflow-y-auto md:absolute">
                <h2 className="section mt-10">{selectedProject.title}</h2>
                <p className="my-4">{selectedProject.description}</p>
                  {selectedProject.logo ?
                    <div className="my-6">
                      <h3>Logo</h3>
                      <div className="flex flex-wrap">
                        <img src={selectedProject.logo} alt={selectedProject.logo} className={`w-32 m-4 shadow-lg ${selectedProject.isLogoRounded ? "rounded-full" : ""}`}/>
                      </div>
                    </div>
                  : null}
                  {selectedProject.searchLogos.length ?
                    <div className="my-6">
                      <h3>Recherches</h3>
                      <div className="flex flex-wrap">
                        {selectedProject.searchLogos.map((logo, index) => {
                          return <img src={logo} alt={logo} key={index} className={`w-32 m-4 shadow-lg ${selectedProject.isLogoRounded ? "rounded-full" : ""}`}/>
                        })}
                      </div>
                    </div>
                  : null}
                {selectedProject.contactCard.length ?
                  <div className="my-6">
                    <h3>Carte de visite</h3>
                    <div className="flex flex-wrap">
                      {selectedProject.contactCard.map((logo, index) => {
                        return <img src={logo} alt={logo} key={index} className="w-64 m-4 shadow-lg"/>
                      })}
                    </div>
                  </div>
                : null}
                {selectedProject.images.length ?
                  <div className="my-6">
                    <h3>Autres design</h3>
                    <Gallery photos={selectedProject.images} onClick={openLightbox} direction="column" />
                  </div>
                : null}
                {viewerIsOpen && selectedProject.images.length && (
                  <ImgsViewer
                    imgs={selectedProject.images.map(x => ({src: x.src}))}
                    currImg={currentImage}
                    isOpen={viewerIsOpen}
                    showThumbnails={true}
                    spinnerDisabled={true}
                    onClickThumbnail={(index: number) => {
                      setCurrentImage(index);
                    }}
                    backdropCloseable={true}
                    onClickPrev={() => setCurrentImage(currentImage - 1)}
                    onClickNext={() => setCurrentImage(currentImage + 1)}
                    onClose={() => setViewerIsOpen(false)}
                  />
                )}
              </div>
            </div>
          }
          <div className="relative md:border-l md:border-grey md:min-h-screen -mt-16 md:overflow-y-auto">
            <h2 className={`${selectedProject ? "mt-20 md:hidden" : "mt-44 md:mt-40"}`}>Mes Projets</h2>
            <div className={`${selectedProject ? "md:mt-32" : ""} px-2 pb-2 md:overflow-y-auto md:absolute flex flex-wrap justify-center w-full`}>
              {projects.map(({title, previewProject}, index) => {
                const projectToDisplay = projects.find(({title: projectTitle}) => projectTitle === title);
                const projectStyle = { backgroundImage: `url(${previewProject}`};
                return <Card
                  key={index}
                  onClick={() => {
                    if (projectToDisplay) {
                      setSelectedProject(projectToDisplay);
                      executeScroll();
                    }
                  }}
                  additionalContainerStyle={`${selectedProject && selectedProject.title === title ? "opacity-10 drop-shadow-none" : ""} bg-center`}
                  additionalStyle={`${selectedProject && selectedProject.title === title ? "hidden" : "flex"}`}
                  bg={projectStyle}
                  title={title}
                >
                  {
                    selectedProject && selectedProject.title === title ?
                      <h3 className="absolute text-slate-600 leading-normal w-min text-center first-letter:capitalize">
                        {title.replace(/_/g, ' ')}
                      </h3>
                      : null
                  }
                </Card>
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
