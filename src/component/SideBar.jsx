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
          <a href="#">
            <i className="fa fa-dashboard"></i>Dashboard
          </a>
        </li>
        <li>
          <a href="HTML/profile.html">
            {" "}
            <i className="fa fa-user"></i>Profile
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-dashboard"></i>Fee Allocation
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-users"></i>Staffs
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-arrow-right-arrow-left"></i>School Transfer
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-money-bill"></i>Debt
          </a>
        </li>
        <li>
          <a href="HTML/result.html">
            <i className="fa fa-book"></i>Result
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-calendar"></i>Calendar
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-key"></i>Password Reset
          </a>
        </li>
      </ul>
    </aside>
  );
}
