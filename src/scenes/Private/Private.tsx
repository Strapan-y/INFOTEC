import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateLayout from "../../layouts/PrivateLayout";
import { Home } from "./Home/Home";
import { Users } from "./Users/Users";
import { Academic } from "./Academic/Academic";
import { AcademicModule } from "./Academic/AcademicModule";
import { Inventory } from "./Inventory/Inventory";
import { GContentModule } from "./Academic/GContentModule";
import { ViewContentEntrada } from "./Academic/ViewContentEntrada"; 
import { ModulesContents } from "./Dashboard/LayoutModules";

const Private = () => {
  return (
    <BrowserRouter>
      <PrivateLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Academic" element={<Academic />} />
          <Route path="/AcademicModule" element={<AcademicModule />} />
          <Route path="/ContentModule" element={<GContentModule />} />
          <Route path="/ContentEntrada" element={<ViewContentEntrada />} />
          <Route path="/Dashboard" element={<ModulesContents />} />
          <Route path="/Inventory" element={<Inventory />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </PrivateLayout>
    </BrowserRouter>
  );
};

export default Private;
