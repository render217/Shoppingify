import React from "react"
import { Route, Routes } from 'react-router-dom'
import AppLayout from "./Layout/AppLayout"
import { Login, Main, NotFound, Register, Statistics, History } from "./pages"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Main />} />
          <Route path="history" element={<History />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path='register' element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App