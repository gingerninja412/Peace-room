import { Input, InputGroup, InputRightElement,Button } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

function StudentRegister() {
  const [show, setShow] = useState(false)
  const showClick = () => setShow(!show)
  const [schools, setSchools] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/teacher/getSchools").then(res => {
      setSchools(res.data)
    }).catch(err => {
      console.log(err)
    })
  })

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
            <Select placeholder='Select a school'>
              {schools.map(item => {
                return (
                  <option value={item.School}>{item.School}</option>
                )
              })}
            </Select>
          </div>
          <div className='flex justify-start items-center flex-col'>
            <Select placeholder='Select a class'>
              <option value='option1'>Class 1</option>
              <option value='option2'>Class 2</option>
              <option value='option3'>Class 3</option>
            </Select>
          </div>
          <Button className='font-Zeyada text-2xl tracking-widest' colorScheme='blue'>Register</Button>
        </form>
      </div>
    </div>
  );
}

export default StudentRegister;