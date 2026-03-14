import { NavBar } from "./component/NavBar";
import { SideBar } from "./component/SideBar";
import { DashBoard } from "./DashBoard/DashBoard";

function App() {
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

export default App;
