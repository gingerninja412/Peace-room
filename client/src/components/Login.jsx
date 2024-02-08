import { Input, InputGroup, InputRightElement,Button } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

function Login() {
  const [show, setShow] = useState(false)
  const showClick = () => setShow(!show)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("")

  function sendData(e) {
    e.preventDefault()
    let link = ""
    if(userType == "Students") {
      link = "http://localhost:3001/student/login"
    } else if(userType == "Teachers") {
      link = "http://localhost:3001/teacher/login"
    } else if(userType == "Admins") {
      link = "http://localhost:3001/admin/login"
    }
    console.log(link)
    axios.post(link, {
      username: username,
      password: password
    }).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }

  return ( 
    <div className="flex justify-start items-center h-dvh flex-col">
      <h1 className='mt-8 text-9xl font-Zeyada'>The peace Room</h1>
      <div className='flex justify-center items-center flex-col h-full'>
        <div className="p-8 border-solid border-4 border-sky-600 rounded-lg">
          <form className='flex justify-center items-center flex-col gap-6' onSubmit={sendData}>
            <div className='flex justify-start items-center flex-col'>
              <label className='font-Zeyada text-2xl'>Username or email</label>
              <Input 
                size="md" 
                className='font-Zeyada' 
                placeholder='enter your username or email' 
                width="20rem" 
                onChange={(e) => setUsername(e.target.value)} 
                value={username}
              />
            </div>
            <div className='flex justify-start items-center flex-col'>
              <label className='font-Zeyada text-2xl'>password</label>
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
                  <Button h='1.75rem' size='sm' onClick={showClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>
            <div id="form-item">
              <RadioGroup className='font-Zeyada' onChange={setUserType} value={userType}>
                <Stack direction='row'>
                  <Radio value='Students' size="lg">Student</Radio>
                  <Radio value='Teachers' size="lg">Teacher</Radio>
                  <Radio value='Admins' size="lg">Admin</Radio>
                </Stack>
              </RadioGroup>
            </div>
            <Button className='font-Zeyada text-2xl' type="submit">Log in</Button>
            <div className='flex justify-start items-center flex-col'>
              <label className='font-Zeyada text-2xl'>Don't have an account?</label>
              <Button className='font-Zeyada text-2xl'>Register</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
   );
}

export default Login;