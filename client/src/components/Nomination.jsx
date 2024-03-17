import logo1 from "../assets/WorldECitizens.png";
import logo2 from "../assets/GlobalSchoolAlliance.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ThumbsUp } from "lucide-react";

function Nomination() {
  const params = useParams();
  const [nomination, setNomination] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/nomination/getNomination/${params.nominationID}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data)
        setNomination(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start p-4">
      <div className="flex items-center justify-around w-full">
        <div className="flex items-center justify-center">
          <img src={logo1} className="h-40" />
          <h2 className="font-Zeyada text-4xl">World E Citizens</h2>
        </div>
        <div>
          <h1 className="font-Zeyada text-4xl">{nomination.nominee}</h1>
        </div>
        <div className="flex justify-center items-center ">
          <img src={logo2} className="h-40" />
        </div>
      </div>
      <div className="w-3/4 border-sky-600 border-8 border-solid rounded-lg h-full flex flex-col items-center justify-start p-4">
        <div className="w-full h-3/4 overflow-y-auto border-b-sky-600 border-b-8 border-b-solid">
          <h2 className="font-Zeyada text-2xl">{nomination.content}</h2>
        </div>
        <div className="flex items-center justify-between w-full">
          <ThumbsUp size={128} />
          <h2 className="font-Zeyada text-4xl">
            {nomination.Votes.length} - Votes
          </h2>
          <h2 className="font-Zeyada text-4xl">By - {nomination.author}</h2>
        </div>
      </div>
    </div>
  );
}

export default Nomination;
