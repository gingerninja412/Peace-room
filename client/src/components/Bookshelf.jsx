import logo1 from "../assets/WorldECitizens.png";
import logo2 from "../assets/GlobalSchoolAlliance.png";
import { useState } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Bookshelf() {
  const [nominations, setNominations] = useState([]);
  const navigate = useNavigate()

  function getNominations(letter) {
    axios
      .get(`http://localhost:3001/nomination/getAlphabetical/${letter}`, {
        withCredentials: true,
      })
      .then((res) => {
        setNominations(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-start p-4">
      <div className="flex items-center justify-around w-full">
        <div className="flex items-center justify-center">
          <img src={logo1} className="h-40" />
          <h2 className="font-Zeyada text-4xl">World E Citizens</h2>
        </div>
        <div>
          <h1 className="font-Zeyada text-4xl">
            Have a look at the accepted nominations
          </h1>
        </div>
        <div className="flex justify-center items-center ">
          <img src={logo2} className="h-40" />
        </div>
      </div>
      <div className="w-full grid grid-cols-4 h-full gap-4">
        <div className="h-full border-sky-600 border-solid border-8 rounded-lg">
          <h2 className="font-Zeyada text-2xl">
            Select a letter of the alphabet
          </h2>
          <di className="w-full flex items-center justify-around">
            <ul>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("A")}
              >
                A
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("B")}
              >
                B
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("C")}
              >
                C
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("D")}
              >
                D
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("E")}
              >
                E
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("F")}
              >
                F
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("G")}
              >
                G
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("H")}
              >
                H
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("I")}
              >
                I
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("J")}
              >
                J
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("K")}
              >
                K
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("L")}
              >
                L
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("M")}
              >
                M
              </li>
            </ul>
            <ul>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("N")}
              >
                N
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("O")}
              >
                O
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("P")}
              >
                P
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("Q")}
              >
                Q
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("R")}
              >
                R
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("S")}
              >
                S
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("T")}
              >
                T
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("U")}
              >
                U
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("V")}
              >
                V
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("W")}
              >
                W
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("X")}
              >
                X
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("Y")}
              >
                Y
              </li>
              <li
                className="font-Zeyada text-5xl"
                onClick={() => getNominations("Z")}
              >
                Z
              </li>
            </ul>
          </di>
        </div>
        <div className="col-span-3 border-sky-600 border-solid border-8 rounded-lg flex justify-start items-start flex-wrap p-4 overflow-y-auto">
          {nominations.map((item) => {
            return (
              <div className="border-sky-600 border-4 border-solid flex items-center justify-center p-2 rounded-lg gap-2">
                <h3>{item.nominee}</h3>
                <Button colorScheme="blue" onClick={() => navigate(`/nomination/${item.id}`)}>See more</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bookshelf;
