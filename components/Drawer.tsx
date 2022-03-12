import Close from "assets/close.svg";
import { FC } from "react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const Drawer: FC<DrawerProps> = ({ open, onClose, children }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed bg-black/50 inset-0 z-40 transition-opacity duration-200 md:hidden md:opacity-0 ${
          open ? "block opacity-1" : "hidden opacity-0"
        }`}
      />
      <div className={`fixed w-60 md:w-80 bg-white top-0 bottom-0 right-0 z-50 transition-transform duration-200 md:hidden ${
        open ? "translate-x-0" : "translate-x-80"
      }`}>
        <div
          className="bg-wave bg-repeat h-full"
        >
          <div className="p-8 absolute top-0 right-0">
            <div className="flex justify-center items-center w-[40px] h-[20px]">
              <Close width={22} onClick={onClose} className="cursor-pointer text-black" />
            </div>
          </div>
          <div className="absolute top-16 right-0">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
