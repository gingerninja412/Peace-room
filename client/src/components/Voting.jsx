import logo1 from "../assets/WorldECitizens.png";
import logo2 from "../assets/GlobalSchoolAlliance.png";
import { useEffect, useState } from "react";
import { Vote } from "lucide-react";
import { ArrowBigRightDash } from "lucide-react";
import axios from "axios";

function Voting() {
  const [nomination, setNomination] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3001/nomination/getRandom", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res)
        setNomination(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function upvote() {
    axios.get(`http://localhost:3001/nomination/upvote/${nomination.id}`, {
      withCredentials: true
    }).then(res => {
      axios
        .get("http://localhost:3001/nomination/getRandom", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          setNomination(res.data);
        });
    })
  }
  
  function skip() {
    axios
      .get("http://localhost:3001/nomination/getRandom", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setNomination(res.data);
      });
  }

  return (
    <div className="h-full flex flex-col justify-start items-center px-8">
      <div className="flex items-center justify-between w-full">
        <div className="flex justify-center items-center ">
          <img src={logo1} className="h-40" />
          <h2 className="font-Zeyada text-4xl">World E Citizens</h2>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-Zeyada text-3xl">Vote for a nomination</h1>
        </div>
        <div className="flex justify-center items-center ">
          <img src={logo2} className="h-40" />
        </div>
      </div>
      <div className="w-2/4 h-128 border-sky-600 border-8 border-solid flex flex-col justify-start items-center p-4 gap-4">
        <h2 className="font-Zeyada text-5xl underline">{nomination.nominee}</h2>
        <p className="font-Zeyada text-3xl p-2 w-full h-1/2 flex justify-center items-center">
          {nomination.content}
        </p>
        <h2 className="font-Zeyada text-3xl">
          Submitted by - {nomination.author}
        </h2>
        <div className="w-full flex justify-between items-center">
          <Vote size={100} onClick={upvote}/>
          <h3 className="font-Zeyada text-3xl">{nomination.Votes} - votes</h3>
          <ArrowBigRightDash size={100} onClick={skip}/>
        </div>
      </div>
    </div>
  );
}

export default Voting;
