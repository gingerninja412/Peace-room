import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/Login";
import { ChakraProvider } from '@chakra-ui/react'
import AccountType from "./components/AccountType";

function App() {

  return (
    <div className="h-screen">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/ACType" element={<AccountType />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  )
}

export default App
