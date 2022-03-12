import ArrowUp from "../assets/arrow-up.svg";
import ArrowDown from "../assets/arrow-down.svg";

interface Props {
  animate?: boolean;
  onClickUp?: () => void;
  onClickDown?: () => void;
}

const VerticalNavigation = ({animate= false, onClickUp, onClickDown}: Props) => {
  return <div className="z-10 absolute h-screen flex flex-col justify-end md:justify-center right-0 left-0 md:left-auto items-center md:items-stretch -m-12 md:m-12 space-y-12">
    {onClickUp && <div onClick={onClickUp} className={`h-8 w-8 bg-black rounded-full cursor-pointer ${animate ? "animate-bounce" : ""}`}>
      <ArrowUp className="w-8"/>
    </div>}
    {onClickDown && <div onClick={onClickDown} className={`h-8 w-8 bg-black rounded-full cursor-pointer ${animate ? "animate-bounce" : ""}`}>
      <ArrowDown className="w-8"/>
    </div>}
  </div>
}

export default VerticalNavigation;
