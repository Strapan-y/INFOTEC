import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateLayout from "../../layouts/PrivateLayout";
import { Home } from "./Home/Home";

const Private = () => {
  return (
    <BrowserRouter>
      <PrivateLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </PrivateLayout>
    </BrowserRouter>
  );
};

export default Private;
