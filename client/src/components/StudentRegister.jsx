import { Input, InputGroup, InputRightElement,Button } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { setTeacher } from "../utils/slices/teacherSlice";
import { setUser } from "../utils/slices/userSlice";
import { useNavigate } from 'react-router-dom';

function StudentRegister() {
  //component states
  const [show, setShow] = useState(false);
  const [schools, setSchools] = useState([]);
  const [classes, setClasses] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [school, setSchool] = useState("");
  const [schoolClass, setClass] = useState("");
  const [problem, setProblem] = useState("");

  //redux states
  const teacher = useSelector((state) => state.teacher.value);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  //hooks
  const navigate = useNavigate()

  //utility functions
  const showClick = () => setShow(!show);

  useEffect(() => {
    axios
      .get("http://localhost:3001/teacher/getSchools")
      .then((res) => {
        setSchools(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function changeSchool(e) {
    setSchool(e.target.value);
    axios
      .get(`http://localhost:3001/student/getClasses/${e.target.value}`)
      .then((res) => {
        console.log(res.data);
        setClasses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function registerStudent(e) {
    e.preventDefault();
    if (name == "") {
      setProblem("enter a name");
      return;
    } else if (password == "") {
      setProblem("enter a password");
      return;
    } else if (confirmPassword == "") {
      setProblem("confirm your password");
      return;
    } else if (password != confirmPassword) {
      setProblem("Passwords do not match");
      return;
    } else if (school == "") {
      setProblem("Please tell us what school you go to");
      return;
    } else if (schoolClass == "") {
      setProblem("Please tell us what class you are in");
      return;
    }

    axios
      .post("http://localhost:3001/student/add", {
        name: name,
        school: school,
        class: schoolClass,
        password: password,
      })
      .then((res) => {
        dispatch(setTeacher(false))
        dispatch(setUser(name))
        window.sessionStorage.setItem("user", name)
        window.sessionStorage.setItem("teacher", false)
        navigate("/home")
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex justify-center items-center flex-col gap-4 p-4 border-solid border-8 border-sky-600 rounded-lg">
        <form
          className="flex justify-center items-center flex-col gap-6"
          onSubmit={registerStudent}
        >
          <div className="flex justify-start items-center flex-col">
            <label className="font-Zeyada text-2xl">
              Enter your first name
            </label>
            <Input
              placeholder="eg John"
              size="md"
              className="font-Zeyada"
              width="20rem"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex justify-start items-center flex-col">
            <label className="font-Zeyada text-2xl">
              Enter a password that you will remember
            </label>
            <InputGroup size="md">
              <Input
                className="font-Zeyada text-2xl"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                width="20rem"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={showClick}
                  colorScheme="blue"
                  className="font-Zeyada tracking-widest"
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>
          <div className="flex justify-start items-center flex-col">
            <label className="font-Zeyada text-2xl">
              Confirm that password
            </label>
            <InputGroup size="md">
              <Input
                className="font-Zeyada text-2xl"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Confirm Password"
                width="20rem"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={showClick}
                  colorScheme="blue"
                  className="font-Zeyada tracking-widest"
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>
          <div className="flex justify-start items-center flex-col">
            <Select
              placeholder="Select a school"
              onChange={changeSchool}
              value={school}
            >
              {schools.map((item) => {
                return <option value={item.School}>{item.School}</option>;
              })}
            </Select>
          </div>
          <div className="flex justify-start items-center flex-col">
            <Select
              placeholder="Select a class"
              onChange={(e) => setClass(e.target.value)}
              value={schoolClass}
            >
              {classes.map((item) => {
                return <option value={item.Class}>{item.Class}</option>;
              })}
            </Select>
          </div>
          <Button
            className="font-Zeyada text-2xl tracking-widest"
            colorScheme="blue"
            type="submit"
          >
            Register
          </Button>
        </form>
        {problem == "" ? null : (
          <h3 className="font-Zeyada text-2xl tracking-widest text-red-800">
            {problem}
          </h3>
        )}
      </div>
    </div>
  );
}

export default StudentRegister;