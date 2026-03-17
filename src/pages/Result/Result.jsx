import { NavBar } from "../../component/NavBar";
import { SideBar } from "../../component/SideBar";
import { ResultMain } from "./ResultMain";
import "./result.css";

export function Result() {
  return (
    <>
      <NavBar />
      <div className="divider">
        <SideBar />
        <ResultMain />
      </div>
    </>
  );
}
