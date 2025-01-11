import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Row } from "antd"
import Login from "./Login/Login"

const Public = () => {

  return (
    <Row className='public'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Row>
  )
}

export default Public