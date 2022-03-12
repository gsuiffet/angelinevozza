import NextLink, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, FC } from "react";

type AnchorProps = Pick<LinkProps, "href"> & AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: FC<AnchorProps> = ({ children, href, ...props }) => {
  return (
    <NextLink href={`${href}`}>
      <a {...props}>{children}</a>
    </NextLink>
  );
};

export default Link;
