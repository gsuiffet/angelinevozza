import React from "react";
import Link from "./Link";

interface Props {
  href: string;
  title: string;
  bg: string;
}

const RedirectCard = ({href, title, bg}: Props) => {
  return <Link href={href} className="bg-white drop-shadow-xl h-60 md:h-80 w-44 md:w-80 rounded-3xl flex flex-col justify-center py-4 md:pt-8 md:pb-0 px-4 md:px-8 cursor-pointer">
    <div className={`w-full h-4/6 rounded-3xl ${bg}`} />
    <div className="h-2/6 flex justify-center items-center">
      <h2 className="m-auto">{title}</h2>
    </div>
  </Link>
}

export default RedirectCard;
