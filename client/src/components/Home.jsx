import logo1 from "../assets/WorldECitizens.png";
import logo2 from "../assets/GlobalSchoolAlliance.png";
import peaceRoom from "../assets/OutsideViewOfPeaceRoom.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const teacher = useSelector((state) => state.teacher.value);

  function downloadNominationCards() {
    axios
      .get("http://localhost:3001/resources/Nomination", {
        responseType: "blob",
      })
      .then((res) => {
        const url = URL.createObjectURL(res.data);
        const a = document.createElement("a");
        a.href = url;
        a.download = `nominationCards.docx`;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        a.remove();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="grid grid-cols-4 h-full p-4">
      <div className="flex justify-around items-center col-span-4">
        <div className="flex justify-center items-center ">
          <img src={logo1} className="h-40" />
          <h2 className="font-Zeyada text-4xl">World E Citizens</h2>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-Zeyada text-3xl">Welcome to the Peace room</h1>
          <h2 className="font-Zeyada text-3xl">Vrede! - Peace!</h2>
        </div>
        <div className="flex justify-center items-center ">
          <img src={logo2} className="h-40" />
        </div>
      </div>
      <div className="h-full col-span-1 border-sky-600 border-8 border-solid p-4 flex justify-around items-center flex-col rounded-md">
        <h2 className="font-Zeyada text-3xl underline decoration-sky-600">
          Resources for all
        </h2>
        <h3 className="font-Zeyada text-2xl">Nomination help sheet</h3>
        <h3
          className="font-Zeyada text-2xl"
          onClick={() => navigate("/history")}
        >
          History
        </h3>
        <h3 className="font-Zeyada text-2xl">Peace Room Song</h3>
      </div>
      <div className="col-span-2 p-4">
        <img src={peaceRoom} />
      </div>
      {teacher == "true" ? (
        <div className="border-sky-600 border-8 border-solid p-4 h-full rounded-md flex justify-around items-center flex-col col-span-1">
          <h2 className="font-Zeyada text-3xl underline decoration-sky-600">
            Teacher Resources
          </h2>
          <h3
            className="font-Zeyada text-2xl"
            onClick={() => navigate("/wellcomeVideo")}
          >
            Welcome video
          </h3>
          <h3 className="font-Zeyada text-2xl">Debate Presentation</h3>
          <h3
            className="font-Zeyada text-2xl"
            onClick={() => navigate("/teacherCenter")}
          >
            Teacher Center
          </h3>
          <h3
            className="font-Zeyada text-2xl"
            onClick={downloadNominationCards}
          >
            Nomination cards
          </h3>
          <h3
            className="font-Zeyada text-2xl"
            onClick={() => navigate("/lessonPlans")}
          >
            Lesson plans
          </h3>
        </div>
      ) : null}
      <div className="col-span-2 h-full border-sky-600 border-8 border-solid col-start-2 flex justify-center items-center rounded-md">
        <h2 className="font-Zeyada text-2xl" onClick={() => navigate("/peaceRoom")}>Enter the peace room</h2>
      </div>
    </div>
  );
}

export default Home;
