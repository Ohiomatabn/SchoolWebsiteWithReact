import { dashBoardDetails } from "./dashboardDetails";
export function DashBoardBody() {
  console.log(dashBoardDetails);
  return (
    <div className="main-content flex">
      <div className="container">
        <div className="grid js-dashboard-container">
          {dashBoardDetails.map((content) => {
            return (
              <a key={content.name} href={content.url}>
                <div className="card">
                  <h3>{content.name}</h3>
                  <img src={content.image} alt="MY Profile" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
