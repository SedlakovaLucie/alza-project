import "./Navbar.css";
import avatarImage from "../../../assets/images/avatar.png";
import navLogo from "../../../assets/images/alza-logo.svg";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <a href="#heroSection">
        <img src={navLogo} alt="logo" className="nav-logo"/>
      </a>
      <div>
        <img src={avatarImage} alt="profil" className="avatar"/>
      </div>
    </nav>
  );
};

export default Navbar;
