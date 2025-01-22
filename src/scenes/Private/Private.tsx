import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateLayout from "../../layouts/PrivateLayout";
import { Home } from "./Home/Home";
import { Users } from "./Users/Users";

const Private = () => {
  return (
    <BrowserRouter>
      <PrivateLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </PrivateLayout>
    </BrowserRouter>
  );
};

export default Private;
