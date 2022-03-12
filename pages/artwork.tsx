import MainLayout from "layouts";
import { NextPage } from "next";
import Footer from "../layouts/footer";
import Gallery from "react-photo-gallery";
import { ClickEvent, Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Chevron from "assets/chevron-down.svg";
import React, {useState, useEffect, useCallback} from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

interface TypeIllustrationsByType {
  key: string,
  value: {src: string, height: number, width: number}[];
}

const Artwork: NextPage = () => {
  const [illustrationsByType, setIllustrationsByType] = useState<TypeIllustrationsByType[] | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    if (!illustrationsByType) {
      (async () => {
        const response = await fetch("/api/illustrations");
        const data = await response.json();
        setIllustrationsByType(data);
        setSelectedCategory(data[0].key);
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
        <p className="text-black font-semibold first-letter:capitalize">{selectedCategory}</p></div>
      <Chevron width={12} className="ml-8" fill="#000" />
    </MenuButton>
  );

  return (
    <MainLayout isFooter={true}>
      <div className="flex flex-col justify-between min-h-screen">
        <ModalGateway>
          {viewerIsOpen && illustrationsToDisplay ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={illustrationsToDisplay.map(x => ({source: x.src}))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        {
          illustrationsToDisplay ?
            <>
              <div className="section my-4 flex flex-wrap mt-24">
                <Menu onItemClick={handleMenuClick} menuButton={menuButton} transition className="drop-down">
                  {categories.map((category) => {
                    return (
                      <MenuItem key={category} value={category}>
                        <div className="py-2 flex">
                          <p className="text-black first-letter:capitalize">{category}</p>
                        </div>
                      </MenuItem>
                    );
                  })}
                </Menu>
              </div>
              <Gallery photos={illustrationsToDisplay} onClick={openLightbox} />
            </>
          : null
        }
        <Footer />
      </div>
    </MainLayout>
  );
};

export default Artwork;
