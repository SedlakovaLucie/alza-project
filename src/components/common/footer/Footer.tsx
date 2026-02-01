import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-wrapper">
      <div>©{new Date().getFullYear()}</div>
      <div>
        <a
          href="https://luciejagosova.cz"
          target="blank"
          className="author-link"
        >
          @{t("footer.author")}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
