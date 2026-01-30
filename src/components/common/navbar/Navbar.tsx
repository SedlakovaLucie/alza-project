import "./Navbar.css";
import avatarImage from "../../../assets/images/avatar.png";
import navLogo from "../../../assets/images/alza-logo.svg";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div >
        <img src={navLogo} alt="logo" className="nav-logo"/>
      </div>
      <div>
        <img src={avatarImage} alt="profil" className="avatar"/>
      </div>
    </nav>
  );
};

export default Navbar;
