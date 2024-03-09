import logo1 from "../assets/WorldECitizens.png";
import logo2 from "../assets/GlobalSchoolAlliance.png";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SubmitNomination() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [reason, setReason] = useState("")
  const [problem, setProblem] = useState("")

  function submitNominee(e) {
    e.preventDefault()

    if(name == "") {
      setProblem("Enter the name of he person you are nominating")
      return 
    } else if(reason == "") {
      setProblem("Why are you nominating this person")
      return
    }

    axios.post("http://localhost:3001/nomination/add", {
      name: name,
      reason: reason
    }, {
      withCredentials: true
    }).then(res => {
      navigate("/peaceRoom")
    }).catch(err => {
      console.log(err)
    })

  }

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="grid grid-cols-4 h-full p-4 w-full">
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
        <div className="h-128 col-span-2 w-full col-start-2 border-sky-600 border-8 border-solid rounded-md flex flex-col items-center justify-center">
          <form
            className="w-2/4 flex flex-col justify-start items-center gap-16"
            onSubmit={submitNominee}
          >
            <div className="flex flex-col justify-start items-center">
              <h2 className="font-Zeyada text-2xl">Who do you want to add?</h2>
              <Input
                placeholder="Who are you nominating?"
                className="font-Zeyada text-2xl"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-start items-center">
              <h2 className="font-Zeyada text-2xl">Why should they be in the peaceroom</h2>
              <Textarea
                placeholder="Write a small paragraph about why they should be nominated"
                className="font-Zeyada text-2xl"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                maxHeight={200}
              />
            </div>
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </form>
          {problem == "" ? null : (
            <h3 className="font-Zeyada text-2xl tracking-widest text-red-800">
              {problem}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubmitNomination;
