import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { SquarePen } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function TeacherCenter() {
  const [newClass, setNewClass] = useState("");
  const user = useSelector((state) => state.user.value);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/teacher/getClasses")
      .then((res) => {
        console.log(res.data);
        setClasses(res.data);
      })
      .catch((err) => [console.log(err)]);
  }, []);

  function createClass() {
    if (newClass == "") {
      return;
    }

    axios
      .post(
        "http://localhost:3001/teacher/addClass",
        {
          class: newClass,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setClasses([{Class: newClass}, ...classes]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="grid grid-cols-6 h-screen">
      <div className="h-full border-right-solid border-right-8 border-right-black p-4 flex flex-col justify-start items-center bg-sky-600 gap-16">
        <div className="flex justify-center items-center gap-2">
          <Input
            variant="filled"
            _focus={{ backgroundColor: "white" }}
            placeholder="add class"
            value={newClass}
            onChange={(e) => setNewClass(e.target.value)}
          />
          <Button _active={{ backgroundColor: "red" }} onClick={createClass}>
            <SquarePen />
          </Button>
        </div>
        <div className="self-start">
          <h3 className="font-Zeyada text-2xl">Your classes:</h3>
          <ul className="flex flex-col gap-2">
            {classes.map((item) => {
              return (
                <li key={item.id}>
                  <Button>{item.Class}</Button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col-span-5 h-full border-solid border-8 border-black"></div>
    </div>
  );
}

export default TeacherCenter;
