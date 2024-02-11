import { Input, InputGroup, InputRightElement,Button } from '@chakra-ui/react'
import { useState } from 'react';
import { Select } from '@chakra-ui/react';

function TeacherRegister() {
  const [show, setShow] = useState(false)
  const showClick = () => setShow(!show)

  let [newSchool, setNewSchool] = useState(false)
  let [school, setSchool] = useState("")

  function changeSchool(e) {
    setSchool(e.target.value)
    if(e.target.value == "new") {
      setNewSchool(true)
    } else {
      setNewSchool(false)
    }
  }

  return ( 
    <div className="flex justify-center items-center h-full">
      <div className='flex justify-center items-center flex-col gap-4 p-4 border-solid border-8 border-sky-600 rounded-lg'>
        <form className='flex justify-center items-center flex-col gap-6'>
          <div className='flex justify-start items-center flex-col'>
            <label className='font-Zeyada text-2xl'>Enter your first name</label>
            <Input 
              placeholder="eg John"
              size="md" 
              className='font-Zeyada'
              width="20rem" 
            />
          </div>
          <div className='flex justify-start items-center flex-col'>
            <label className='font-Zeyada text-2xl'>Enter your email address</label>
            <Input 
              placeholder="eg John"
              size="md" 
              className='font-Zeyada'
              width="20rem" 
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
              <option value='School1'>School 1</option>
              <option value='School2'>School 2</option>
              <option value='School3'>School 3</option>
            </Select>
          </div>
          {newSchool == true ? <div className='flex justify-start items-center flex-col'>
            <label className='font-Zeyada text-2xl'>Enter your school</label>
            <Input 
              placeholder="eg St Johns"
              size="md" 
              className='font-Zeyada'
              width="20rem" 
            />
          </div>: null}
          <Button className='font-Zeyada text-2xl tracking-widest' colorScheme='blue' type="submit">Register</Button>
        </form>
      </div>
    </div>
  );
}

export default TeacherRegister;