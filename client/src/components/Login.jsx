import { Input, InputGroup, InputRightElement,Button } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react';
import { useState } from 'react';

function Login() {
  const [show, setShow] = useState(false)
  const showClick = () => setShow(!show)

  return ( 
    <div className="flex justify-start items-center h-dvh flex-col">
      <h1 className='mt-8 text-9xl font-Zeyada'>The peace Room</h1>
      <div className='flex justify-center items-center flex-col h-full'>
        <div className="p-8 border-solid border-4 border-sky-600 rounded-lg">
          <form className='flex justify-center items-center flex-col gap-6'>
            <div className='flex justify-start items-center flex-col'>
              <label className='font-Zeyada text-2xl'>Username or email</label>
              <Input size="md" className='font-Zeyada' placeholder='enter your username or email' width="20rem"/>
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
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={showClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>
            <div id="form-item">
              <RadioGroup className='font-Zeyada'>
                <Stack direction='row'>
                  <Radio value='1' size="lg">Student</Radio>
                  <Radio value='2' size="lg">Teacher</Radio>
                  <Radio value='3' size="lg">Admin</Radio>
                </Stack>
              </RadioGroup>
            </div>
            <Button className='font-Zeyada text-2xl'>Log in</Button>
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