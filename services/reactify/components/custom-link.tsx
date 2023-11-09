import Link from "next/link";
import { AnchorHTMLAttributes, FC } from "react";

const CustomLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
  return <a {...props} target="_blank" />;
};

export default CustomLink;
