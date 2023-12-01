import AnchorLink from "react-anchor-link-smooth-scroll";

type AnchorLinkProps = {
  page: string;
  children?: React.ReactNode;
};

const Anchor = ({ page, children }: AnchorLinkProps) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  return <AnchorLink href={`#${lowerCasePage}`}>{children}</AnchorLink>;
};

export default Anchor;
