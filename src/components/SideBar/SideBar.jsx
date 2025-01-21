import "./SideBar.css";
import avatar from "../../assets/avatar-wtwr.png";

function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="Default Avatar" className="sidebar__avatar" />
      <p className="sidebar__username">User name</p>
    </div>
  );
}

export default SideBar;
