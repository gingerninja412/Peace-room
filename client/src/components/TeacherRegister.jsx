import { Input, InputGroup, InputRightElement,Button } from '@chakra-ui/react'
import { useState } from 'react';
import { Select } from '@chakra-ui/react';
import axios from 'axios'

function TeacherRegister() {
  const [show, setShow] = useState(false)
  const showClick = () => setShow(!show)

  let [newSchool, setNewSchool] = useState(false)
  let [school, setSchool] = useState("")
  let [newSchoolValue, setNewSchoolValue] = useState("")
  let [lastName, setLastName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [confirmPassword, setConfirmPassword] = useState("")
  let [problem, setProblem] = useState("")

  function changeSchool(e) {
    setSchool(e.target.value)
    if(e.target.value == "new") {
      setNewSchool(true)
    } else {
      setNewSchool(false)
    }
  }

  function sendData (e) {
    e.preventDefault()
    let usedSchool = school
    if(lastName == "") {
      setProblem("Enter a username")
      return
    } else if(email == "" ) {
      setProblem("enter your password")
      return
    } else if(password == "") {
      setProblem("enter a memorable password")
      return
    } else if(confirmPassword == "") {
      setProblem("please confirm your password")
      return
    } else if(confirmPassword != password) {
      setProblem("please ensure your passwords match")
      return
    } else if(school == "") {
      setProblem("please enter a school")
      return
    }

    if(newSchool == true) {
      if(newSchoolValue == "") {
        setProblem("enter a school")
        return
      } else {
        usedSchool = newSchoolValue
      }
    }

    axios.post("http://localhost:3001/teacher/add", {
      lastName: lastName,
      email: email,
      password: password,
      school: usedSchool
    }).then(res => {
      console.log(res)
    }).catch(error => [
      console.log(error)
    ])
  }

  return ( 
    <div className="flex justify-center items-center h-full">
      <div className='flex justify-center items-center flex-col gap-4 p-4 border-solid border-8 border-sky-600 rounded-lg'>
        <form className='flex justify-center items-center flex-col gap-6' onSubmit={sendData}> 
          <div className='flex justify-start items-center flex-col'>
            <label className='font-Zeyada text-2xl'>Enter your last name</label>
            <Input 
              placeholder="eg John"
              size="md" 
              className='font-Zeyada'
              width="20rem"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div className='flex justify-start items-center flex-col'>
            <label className='font-Zeyada text-2xl'>Enter your email address</label>
            <Input 
              placeholder="eg John"
              size="md" 
              className='font-Zeyada'
              width="20rem"
              onChange={(e) => setEmail(e.target.value)}
              value={email} 
            />
          </div>
          <div className='flex justify-start items-center flex-col'>
            <label className='font-Zeyada text-2xl'>Enter a password that you will remember</label>
            <InputGroup size='md'>
              <Input 
                className='font-Zeyada text-2xl' 
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                width="20rem"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={showClick} colorScheme='blue' className='font-Zeyada tracking-widest'>
                  {show ? 'Hide' : 'Show'}
                </Button >
              </InputRightElement>
            </InputGroup>
          </div>
          <div className='flex justify-start items-center flex-col'>
            <label className='font-Zeyada text-2xl'>Confirm that password</label>
            <InputGroup size='md'>
              <Input 
                className='font-Zeyada text-2xl' 
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Confirm Password'
                width="20rem"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={showClick} colorScheme='blue' className='font-Zeyada tracking-widest'>
                  {show ? 'Hide' : 'Show'}
                </Button >
              </InputRightElement>
            </InputGroup>
          </div>
          <div className='flex justify-start items-center flex-col'>
            <label className='font-Zeyada text-2xl'>Select your school</label>
            <Select placeholder='Select a school' onChange={changeSchool} value={school}>
              <option value='new'>Add a school</option>
            </Select>
          </div>
          {newSchool == true ? <div className='flex justify-start items-center flex-col'>
            <label className='font-Zeyada text-2xl'>Enter your school</label>
            <Input 
              placeholder="eg St Johns"
              size="md" 
              className='font-Zeyada'
              width="20rem"
              onChange={(e) => setNewSchoolValue(e.target.value)}
              value={newSchoolValue} 
            />
          </div>: null}
          <Button className='font-Zeyada text-2xl tracking-widest' colorScheme='blue' type="submit">Register</Button>
        </form>
        {problem == "" ? null : <h3 className='font-Zeyada text-2xl tracking-widest text-red-800'>{problem}</h3>}
      </div>
    </div>
  );
}

export default TeacherRegister;