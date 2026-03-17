import { Link } from "react-router-dom";

export function SideBar() {
  return (
    <aside className="sidebar" id="js-sidebar">
      <i className="fa fa-times js-close"></i>
      <div className="profile">
        <div className="profile-img">
          <img src="images\Snapchat-1599006824~2.jpg" alt="Profile Img" />
        </div>
        <div className="name">
          <h4>John David</h4>
          <h6>Science</h6>
        </div>
      </div>
      <ul>
        <li className="active">
          <Link to="/">
            <i className="fa fa-dashboard"></i>Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile">
            {" "}
            <i className="fa fa-user"></i>Profile
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa fa-dashboard"></i>Fee Allocation
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa fa-users"></i>Staffs
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa fa-arrow-right-arrow-left"></i>School Transfer
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa fa-money-bill"></i>Debt
          </Link>
        </li>
        <li>
          <Link to="/result">
            <i className="fa fa-book"></i>Result
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa fa-calendar"></i>Calendar
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa fa-key"></i>Password Reset
          </Link>
        </li>
      </ul>
    </aside>
  );
}
