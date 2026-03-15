import { NavBar } from "../../component/NavBar";
import { SideBar } from "../../component/SideBar";
import { ProfileMain } from "./ProfileMain";
import "./Profile.css";
import "../../App.css";

export function Profile() {
  return (
    <>
      <NavBar />
      <div className="divider">
        <SideBar />
        <ProfileMain />
      </div>
    </>
  );
}
