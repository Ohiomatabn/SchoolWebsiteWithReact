export function NavBar() {
  return (
    <nav className="navbar">
      <div className="container flex">
        <div className="school-name">
          <i className="fa fa-bars js-show"></i>
          <h2>World Best Sec Sch</h2>
        </div>
        <div className="current-date-time">
          <p className="js-now">30-Nov-2025 5:23:11</p>
        </div>
      </div>
    </nav>
  );
}
