import { useState } from "react";
import { studentDetails } from "./resultDetails";

export function ResultMain() {
  const [InvalidResult, setInvalidResult] = useState("");
  function showResult() {
    //Get the value of the input field
    const examNumberInput = document.querySelector("#exam-no").value;
    const selectedTerm = document.querySelector("#term").value;
    const selectedYear = document.querySelector("#year").value;
    let studentResult = "";
    let resultHTML = "";

    //using the value of the input field loop through the studentDetails array to find a matching one from the input field
    studentDetails.forEach((studentDetail) => {
      if (
        studentDetail.examNumber === examNumberInput &&
        studentDetail.term === selectedTerm &&
        studentDetail.year === selectedYear
      ) {
        studentResult = studentDetail;
        console.log(studentDetail.term);
      } else {
        console.log("Invalid");
      }
    });

    //Display the result when a matching examNumber is found
    if (studentResult) {
      resultHTML = `
            <div class="container">
            <div class="border">
              <div class="school-name">
                <h2>World Best Secondary School</h2>
                <h2>${studentResult.term} ${studentResult.year} Terminal Result</h2>
              </div>
              <div class="student-details">
                <h2>${studentResult.name}</h2>
                <hr />
                <div class="flex">
                  <div>
                    <h2>${studentResult.examNumber}</h2>
                    <h5>Student Exam No</h4>
                  </div>
                  <div>
                    <h2>${studentResult.term}</h2>
                    <h5>${studentResult.currentClass}</h4>
                  </div>
                  <div>
                    <img src="images/Snapchat-1599006824~2.jpg" alt="" class="passport">
                  </div>
                </div>
              </div>
              <hr>
              <table>
                <tr>
                  <th>S/N</th>
                  <th>Subject</th>
                  <th>Score</th>
                  <th>Grade</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>English</td>
                  <td>${studentResult.result.score.english}</td>
                  <td>${studentResult.result.grade.english}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Mathematics</td>
                  <td>${studentResult.result.score.maths}</td>
                  <td>${studentResult.result.grade.maths}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Physics</td>
                  <td>${studentResult.result.score.physcis}</td>
                  <td>${studentResult.result.grade.physcis}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Biology</td>
                  <td>${studentResult.result.score.biology}</td>
                  <td>${studentResult.result.grade.biology}</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Chemistry</td>
                  <td>${studentResult.result.score.chemistry}</td>
                  <td>${studentResult.result.grade.chemistry}</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Civic Education</td>
                  <td>${studentResult.result.score.civicEducation}</td>
                  <td>${studentResult.result.grade.civicEducation}</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>CRS</td>
                  <td>${studentResult.result.score.crs}</td>
                  <td>${studentResult.result.grade.crs}</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Agric Science</td>
                  <td>${studentResult.result.score.agric}</td>
                  <td>${studentResult.result.grade.agric}</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Marketing</td>
                  <td>${studentResult.result.score.marketing}</td>
                  <td>${studentResult.result.grade.marketing}</td>
                </tr>
              </table>
            </div>
          </div>
    `;
    }

    if (resultHTML) {
      //updating the DOM
      document.querySelector(".result").innerHTML = resultHTML;
    } else {
      setInvalidResult("Invalid Credential...");
    }
  }
  return (
    <main>
      <div className="header flex">
        <div className="school_name">
          <h1>WORLD BEST SECONDARY SCHOOL</h1>
          <h4>First Tearm 2024/25 Session</h4>
        </div>
        <div>
          <i className="fa fa-book"></i>
          <span>/ Result</span>
        </div>
      </div>

      <div className="exam_no">
        <div className="container">
          <label htmlFor="exam-no">Examination Number</label>
          <input
            type="text"
            name="exam_no"
            id="exam-no"
            placeholder="Enter Examination Number"
          />
          <div className="flex">
            <select name="term" id="term">
              <option value="">Term</option>
              <option value="First Term">First Term</option>
              <option value="Second Term">Second Term</option>
              <option value="Third Term">Third Term</option>
            </select>
            <select name="year" id="year">
              <option value="exam-year">Exam Year</option>
              <option value="2024/25">2024/25</option>
              <option value="2023/24">2023/24</option>
              <option value="2022/23">2022/23</option>
              <option value="2021/22">2021/22</option>
            </select>
          </div>
          <button className="check-result" onClick={showResult}>
            Check Result
          </button>
        </div>
      </div>

      <div className="result">
        <p className="error">{InvalidResult}</p>
      </div>
    </main>
  );
}
