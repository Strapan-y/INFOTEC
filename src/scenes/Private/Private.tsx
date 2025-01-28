import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateLayout from "../../layouts/PrivateLayout";
import { Home } from "./Home/Home";
import { Users } from "./Users/Users";
import { Academic } from "./Academic/Academic";
import { Academic_module } from "./Academic/Academic-Modulo";
import { Inventory } from "./Inventory/Inventory";

const Private = () => {
  return (
    <BrowserRouter>
      <PrivateLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/academic-module" element={<Academic_module />} />
          <Route path="/inventory" element={<Inventory />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </PrivateLayout>
    </BrowserRouter>
  );
};

export default Private;
