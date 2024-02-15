import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/Login";
import { ChakraProvider } from '@chakra-ui/react'
import AccountType from "./components/AccountType";
import StudentRegister from "./components/StudentRegister";
import TeacherRegister from "./components/TeacherRegister";
import Home from "./components/Home";
import History from "./components/History";

function App() {

  return (
    <div className="h-screen">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/ACType" element={<AccountType />} />
            <Route path="/StudentRegister" element={<StudentRegister />} />
            <Route path="/TeacherRegister" element={<TeacherRegister />} />
            <Route path="/home" element={<Home />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  )
}

export default App
