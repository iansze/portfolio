import Anchor from "../components/Anchor";

const Footer = () => {
  return (
    <footer className="flex justify-between p-3 font-openSans text-secondary">
      <p className="text-secondary">© 2023 Ian Sze. All Rights Reserved.</p>
      <Anchor page={"Header"}>Back to top 🠕</Anchor>
    </footer>
  );
};

export default Footer;
