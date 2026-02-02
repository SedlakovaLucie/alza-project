import "./ErrorPage.css";
import  {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <section className="errorPage">
      <p className="error-mark">!</p>
      <h1>{t("errorPage.title")}</h1>
      <p>{t("errorPage.message")}</p>
      <Link to="/"><button className="errorPage-button">{t("errorPage.button")}</button></Link>
    </section>
  );
};

export default ErrorPage;
