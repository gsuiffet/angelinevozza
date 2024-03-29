import MainLayout from "layouts";
import { NextPage } from "next";
import Footer from "../layouts/footer";
import Gallery from "react-photo-gallery";
import { ClickEvent, Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Chevron from "assets/chevron-down.svg";
import React, {useState, useEffect, useCallback} from "react";
import ImgsViewer from "react-images-viewer";

import Card from "../components/Card";

interface TypeIllustrationsByType {
  key: string,
  value: {src: string, height: number, width: number}[];
}

const Artwork: NextPage = () => {
  const [illustrationsByType, setIllustrationsByType] = useState<TypeIllustrationsByType[] | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  useEffect(() => {
    if (!illustrationsByType) {
      (async () => {
        const response = await fetch("/api/illustrations");
        const data = await response.json();
        setIllustrationsByType(data);
      })()
    }
  }, [illustrationsByType]);

  if (!illustrationsByType) {
    return <div className="flex w-full h-screen items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
    </div>
  }

  const categories = illustrationsByType.map((illustrationType) => illustrationType.key);
  const illustrationsToDisplay = illustrationsByType.find(({key}) => key === selectedCategory)?.value;

  const handleMenuClick = (event: ClickEvent) => {
    setSelectedCategory(event.value);
  };

  const menuButton = (
    <MenuButton
      className="text-black flex items-center border border-black px-4 rounded-xl"
    >
      <div className="py-2 flex justify-center">
        <p className="text-black font-semibold first-letter:capitalize">{selectedCategory?.replaceAll("_", " ")}</p></div>
      <Chevron width={12} className="ml-8" fill="#000" />
    </MenuButton>
  );

  return (
    <MainLayout isFooter={true}
      title="Artwork"
      description="Présentation de mes dessins personnels"
    >
      <div className="flex flex-col justify-between min-h-screen">
        {
          !selectedCategory &&
          <div className="relative -mt-16">
            <h2 className={`${selectedCategory ? "mt-20" : "mt-44 md:mt-40"}`}>Artwork</h2>
            <div className={`${selectedCategory ? "md:mt-32" : ""} px-2 pb-2 md:overflow-y-auto md:absolute flex flex-wrap justify-center w-full`}>
              {
                categories.map((category, index) => {
                  const illustrationValue = illustrationsByType.find(({key}) => key === category)?.value;
                  if (illustrationValue) {
                    const illustrationStyle = { backgroundImage: `url(${illustrationValue[0].src}`}
                    return <Card
                      key={index}
                      onClick={() => setSelectedCategory(category)}
                      additionalContainerStyle="bg-cover bg-center"
                      additionalStyle="flex"
                      bg={illustrationStyle}
                      title={category}
                    />
                  }
                })
              }
            </div>
          </div>
        }
        {viewerIsOpen && illustrationsToDisplay && (
          <ImgsViewer
            imgs={illustrationsToDisplay.map(x => ({src: x.src}))}
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
        {
          illustrationsToDisplay ?
            <div className="overflow-hidden">
              <div className="section my-4 flex flex-wrap mt-24">
                <Menu onItemClick={handleMenuClick} menuButton={menuButton} transition className="drop-down">
                  {categories.map((category) => {
                    return (
                      <MenuItem key={category} value={category}>
                        <div className="py-2 flex">
                          <p className="text-black first-letter:capitalize">{category.replaceAll("_", " ")}</p>
                        </div>
                      </MenuItem>
                    );
                  })}
                </Menu>
              </div>
              <Gallery photos={illustrationsToDisplay} onClick={openLightbox} direction="column" />
            </div>
          : null
        }
        <Footer />
      </div>
    </MainLayout>
  );
};

export default Artwork;
