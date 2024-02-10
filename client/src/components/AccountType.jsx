import { Button } from "@chakra-ui/react";

function AccountType() {

  return ( 
    <div className="flex justify-center items-center h-full">
      <div className='flex justify-center items-center flex-col gap-4 p-4 border-solid border-8 border-sky-600 rounded-lg'>
        <h2 className='font-Zeyada text-4xl'>What type of account are you registering for?</h2>
        <Button colorScheme="blue" className='font-Zeyada tracking-widest' >Student</Button>
        <Button colorScheme="blue" className='font-Zeyada tracking-widest' >Teacher</Button>
      </div>
    </div>
   );
}

export default AccountType;