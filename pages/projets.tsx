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
  previewProject: string,
  logo: string,
  searchLogos: string[],
  contactCard: string[],
  searchContactCard: string[],
  description: string,
  images: Image[]
}

const projects: IProject[] = [
  {
    title: "NomadeSens",
    previewProject: "nomade_project/vignette_nomadesens.svg",
    logo: "",
    searchLogos: [],
    searchContactCard: [
      "nomade_project/cdv_recherche1_recto_nomadesens.svg",
      "nomade_project/cdv_recherche1_verso_nomadesens.svg",
      "nomade_project/cdv_recherche2_recto_nomadesens.svg",
      "nomade_project/cdv_recherche2_verso_nomadesens.svg",
      "nomade_project/cdv_recherche1_2_nomadesens.svg",
      "nomade_project/cdv_recherche2_2_nomadesens.svg",
    ],
    contactCard: ["nomade_project/cdv_finale_recto_nomadesens.svg", "nomade_project/cdv_finale_verso_nomadesens.svg"],
    description: "Laëtitia propose des soins de naturopathie et de magnétisme, elle accompagne ses clients pour améliorer leur bien-être. Elle me demande de réaliser ses cartes de visite. Son logo est déjà existant, elle souhaite des cartes dynamiques, à son image. Je choisis un lotus dessiné à la main, symbole zen et féminité. J’ajoute un paysage crépusculaire assorti de couleurs apaisantes.",
    images: []
  },
  {
    title: "Visiter le Japon avec Shoko",
    previewProject: "shoko_project/logo-shoko.svg",
    logo: "shoko_project/logo-shoko.svg",
    searchLogos: ["shoko_project/logo-shoko2.svg", "shoko_project/logo-shoko1.svg"],
    searchContactCard: [],
    contactCard: [
      "shoko_project/contact-card-shoko1.svg",
      "shoko_project/contact-card-shoko.svg",
      "shoko_project/shoko_grande_carte_recto_compressed.jpg",
      "shoko_project/shoko_grande_carte_verso_compressed.jpg",
      "shoko_project/mise_en_situ_carte_shoko.jpg",
    ],
    description: "Shoko organise des voyages au Japon. Elle personnalise l’itinéraire et accompagne les voyageurs dans leurs visites. Elle m’a demandé de représenter un daruma, objet traditionnel du Japon, en rouge et blanc pour rappeler le drapeau japonais.",
    images: []
  },
  {
    title: "Label Ecriture",
    previewProject: "label_ecriture_project/vignette_label_ecriture.svg",
    logo: "label_ecriture_project/logo_final.svg",
    searchLogos: [
      "label_ecriture_project/recherche_logo_1.svg",
      "label_ecriture_project/recherche_logo_2.svg",
      "label_ecriture_project/recherche_logo_3.svg",
      "label_ecriture_project/recherche_logo_4.svg",
    ],
    searchContactCard: [],
    contactCard: ["label_ecriture_project/carte_label_ecriture_recto.svg", "label_ecriture_project/carte_label_ecriture_verso.svg"],
    description: "Blandine crée sa société afin de proposer des cours d'orthographe puis des cours d'écriture. Elle s'adresse aux entreprises et professionnels voulant perfectionner leur français.  Son logo doit être dynamique et ludique. C'est une puriste de la langue française c'est pourquoi j'ai choisi la calligraphie mélangée à une typographie classique pour le côté instructif. Les couleurs de lever de soleil rappellent l'évolution des connaissances.",
    images: []
  },
  {
    title: "Enjol’Clim",
    previewProject: "enjol_project/vignette_enjolclim.svg",
    logo: "enjol_project/logo-enjol.svg",
    searchLogos: [],
    contactCard: ["enjol_project/contact-card-enjol.svg"],
    searchContactCard: [],
    description: "Entreprise d’installation et de réparation de climatisations. Sa volonté est de mettre en avant le foyer, la maison ainsi que le chaud et le froid.",
    images: []
  },
  {
    title: "FD Coiffure",
    previewProject: "fd_project/vignette_fd_coiffure.svg",
    logo: "",
    searchLogos: [],
    contactCard: ["fd_project/contact-card-fd.svg", "fd_project/contact-card-fd1.svg"],
    searchContactCard: [],
    description: "Salon de coiffure à Palavas-les-flots. Le logo est déjà existant. Le salon a souhaité attirer une nouvelle clientèle, fidéliser et rendre le salon plus attractif et dynamique. J’ai réalisé des flyers, la carte de visite, ainsi que des supports de communication au sein du salon. L’image est sobre dans un style industriel et cocooning.",
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
    title: "Cabinet dentaire Jules Verne",
    previewProject: "jules_verne_project/logo-jf.svg",
    logo: "jules_verne_project/logo-jf.svg",
    searchLogos: [
      "jules_verne_project/logo recherche jules vernes.svg",
      "jules_verne_project/logo recherche jules vernes2.svg"
    ],
    contactCard: [],
    searchContactCard: [],
    description: "Passionnés par Jules Verne, les dentistes de ce cabinet ont choisi le nautile comme symbole. Le logo doit être adaptable sur tout support.",
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
  {
    title: "Les Jardins de Saint-Sernin",
    previewProject: "st_sernin_garden/vignette_jardin_st_sernin.svg",
    logo: "st_sernin_garden/logo_final_saint_sernin.svg",
    searchLogos: [
      "st_sernin_garden/logo_recherche_saint_sernin_1.svg",
      "st_sernin_garden/logo_recherche_saint_sernin_2.svg"
    ],
    contactCard: [
      "st_sernin_garden/carte_final_saint_sernin_recto.svg",
      "st_sernin_garden/carte_final_saint_sernin_verso.svg"
    ],
    searchContactCard: [
      "st_sernin_garden/carte_recherches_saint_sernin_1_recto.svg",
      "st_sernin_garden/carte_recherches_saint_sernin_1_verso.svg",
      "st_sernin_garden/carte_recherches_saint_sernin_2_recto.svg",
      "st_sernin_garden/carte_recherches_saint_sernin_2_verso.svg"
    ],
    description: "Projet de fin d’étude, il n’a pas été réalisé. C’est une entreprise de production de fruits et légumes en agriculture raisonnée dans la région toulousaine. Ils proposent la cueillette de fruits et légumes dans les champs ainsi que la livraison de paniers hebdomadaires. Les valeurs mises en avant sont la consommation locale, saine, au fil des saisons, sans intermédiaire.",
    images: [
      {
        src: "st_sernin_garden/flyer_saint_sernin_recto-min.jpg",
        width: 1,
        height: 1
      },
      {
        src: "st_sernin_garden/flyer_saint_sernin_verso-min.jpg",
        width: 1,
        height: 1
      },
      {
        src: "st_sernin_garden/camion_saint_sernin-min.jpg",
        width: 1,
        height: 1
      },
      {
        src: "st_sernin_garden/devanture_saint_sernin-min.jpg",
        width: 1,
        height: 1
      },
      {
        src: "st_sernin_garden/panneau_saint_sernin_2-min.jpg",
        width: 1,
        height: 1
      },
      {
        src: "st_sernin_garden/panneau_saint_sernin_3-min.jpg",
        width: 1,
        height: 1
      },
      {
        src: "st_sernin_garden/panneau_saint_sernin_4-min.jpg",
        width: 1,
        height: 1
      },
      {
        src: "st_sernin_garden/panneaux_saint_sernin1-min.jpg",
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
    <MainLayout
      isFooter={true}
      smallHeader={!!selectedProject}
      title="Réalisations clients"
      description="Présentation de différents projets professionnels"
>
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
                      <h3>Logo sélectionné</h3>
                      <div className="flex flex-wrap">
                        <img src={selectedProject.logo} alt={selectedProject.logo} className="w-32 m-4"/>
                      </div>
                    </div>
                  : null}
                  {selectedProject.searchLogos.length ?
                    <div className="my-6">
                      <h3>Recherches Logo</h3>
                      <div className="flex flex-wrap">
                        {selectedProject.searchLogos.map((logo, index) => {
                          return <img src={logo} alt={logo} key={index} className="w-32 m-4"/>
                        })}
                      </div>
                    </div>
                  : null}
                {selectedProject.contactCard.length ?
                  <div className="my-6">
                    <h3>Carte de visite</h3>
                    <div className="flex flex-wrap">
                      {selectedProject.contactCard.map((logo, index) => {
                        return <img src={logo} alt={logo} key={index} className="h-fit w-64 m-4 shadow-lg"/>
                      })}
                    </div>
                  </div>
                : null}
                {selectedProject.searchContactCard.length ?
                  <div className="my-6">
                    <h3>Recherches Carte de visite</h3>
                    <div className="flex flex-wrap">
                      {selectedProject.searchContactCard.map((logo, index) => {
                        return <img src={logo} alt={logo} key={index} className="h-fit w-64 m-4 shadow-lg"/>
                      })}
                    </div>
                  </div>
                  : null}
                {selectedProject.images.length ?
                  <div className="my-6">
                    <h3>Supports de communication</h3>
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
            <h2 className={`${selectedProject ? "mt-20 md:hidden" : "mt-44 md:mt-40"}`}>Projets</h2>
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
