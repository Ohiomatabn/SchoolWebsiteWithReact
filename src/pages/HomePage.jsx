import { NavBar } from "../component/NavBar";
import { SideBar } from "../component/SideBar";
import { DashBoard } from "./DashBoard/DashBoard";

export function HomePage() {
  return (
    <>
      <NavBar />

      <div className="divider">
        <SideBar />
        <DashBoard />
      </div>
    </>
  );
}
