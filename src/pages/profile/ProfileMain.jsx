import { DashBoardHeader } from "../../component/DashBoardHeader";

export function ProfileMain() {
  return (
    <main>
      <DashBoardHeader />

      <div className="student-data">
        <ul className="bio-data">
          <h2>Bio-Data</h2>
          <li>Surname: David</li>
          <li>First Name: John</li>
          <li>Other Name(s): Adavize</li>
          <li>Sex: Male</li>
          <li>State: Kogi</li>
          <li>Nationality: Nigeria</li>
          <li>Other Name(s): Adavize</li>
        </ul>
        <ul className="birthday">
          <h2>Birthday</h2>
          <li>Age: 20</li>
          <li>Date: 21</li>
          <li>Month: January</li>
          <li>Year: 2005</li>
        </ul>
        <ul className="Contact">
          <h2>Contact</h2>
          <li>Student Phone No: 09161098199</li>
          <li>Home Address: Utoboo Obeiba Ihima</li>
          <li>Father's Phone No: 08130345282</li>
          <li>Mother's Phone No: 07047940700</li>
          <li>Parent Occupation: Bussiness and Farming</li>
        </ul>
        <ul className="academics">
          <h2>Academics</h2>
          <li>Registration No: 2021937ST110</li>
          <li>className: SSS 3</li>
          <li>Term: First Term</li>
        </ul>
        <ul className="sponsor">
          <h2>Sponsor</h2>
          <li>Name: Abraham John</li>
          <li>Phone No: 08130345282</li>
          <li>Relationship: Father</li>
        </ul>
        <ul className="registered">
          <h2>Registered</h2>
          <li>Date: 12</li>
          <li>Month: September</li>
          <li>Year: 2019</li>
        </ul>
      </div>
    </main>
  );
}
