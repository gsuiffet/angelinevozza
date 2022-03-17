import React, {PropsWithChildren} from "react";

interface Props {
  onClick: () => void;
  additionalContainerStyle: string,
  additionalStyle: string,
  bg: {backgroundImage: string},
  title: string,
}

const Card = ({onClick, additionalContainerStyle, additionalStyle, bg, title, children}: PropsWithChildren<Props>) => {
  return <div
    className="min-w-[128px] h-48 my-2 flex items-center justify-center cursor-pointer relative"
    onClick={onClick}
  >
    <div
      className={`${additionalContainerStyle} parent cursor-pointer min-w-[128px] w-32 h-48 rounded-xl bg-no-repeat m-4 drop-shadow-md`}
      style={bg}
    >
      <div className={`${additionalStyle} text-white invisible animated-card parent-hover:visible h-full rounded-xl items-center justify-center`}>
        <h3 className="leading-normal w-min text-center first-letter:capitalize">{title.replace(/_/g, ' ')}</h3>
      </div>
    </div>
    {children}
  </div>
}

export default Card;
