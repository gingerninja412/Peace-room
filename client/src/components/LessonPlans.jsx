import { Button } from "@chakra-ui/react";
import axios from 'axios'

function LessonPlans() {
  function download (item) {
    axios.get(`http://localhost:3001/resources/${item}`, {
      responseType: "blob"
    }).then(res => {
      const url = URL.createObjectURL(res.data)
      const a = document.createElement('a')
      a.href = url
      a.download = "The Debate.doc"
      a.style.display ='none'
      document.body.appendChild(a)
      a.click()
      a.remove()
    }).catch(err => {
      console.log(err)
    })
  }
  return ( 
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="p-8">
        <h1 className='font-Zeyada text-8xl'>Lesson Plans</h1>
      </div> 
      <div className="flex flex-col justify-start items-center border-solid border-4 border-sky-600 rounded-lg p-8 gap-8">
        <div className="flex justify-center items-center gap-4">
          <h3 className='font-Zeyada text-4xl'>Lesson 1 - The Debate</h3>
          <Button className='font-Zeyada text-2xl tracking-widest' colorScheme='blue' onClick={() => download('lessonOne')}>Download</Button>
        </div>
        <div className="flex justify-center items-center gap-4">
          <h3 className='font-Zeyada text-4xl'>Lesson 2 - Submitting and Voting</h3>
          <Button className='font-Zeyada text-2xl tracking-widest' colorScheme='blue' onClick={() => download('lessonTwo')}>Download</Button>
        </div>
        <div className="flex justify-center items-center gap-4">
          <h3 className='font-Zeyada text-4xl'>Lesson 1 and 2 Together</h3>
          <Button className='font-Zeyada text-2xl tracking-widest' colorScheme='blue' onClick={() => download('together')}>Download</Button>
        </div>
        <div className="flex justify-center items-center gap-4">
          <h3 className='font-Zeyada text-4xl'>Biography pro-forma</h3>
          <Button className='font-Zeyada text-2xl tracking-widest' colorScheme='blue' onClick={() => download('biography')}>Download</Button>
        </div>
      </div>
    </div>
   );
}

export default LessonPlans;