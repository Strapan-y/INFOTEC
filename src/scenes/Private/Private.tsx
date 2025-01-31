import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateLayout from "../../layouts/PrivateLayout";
import { Home } from "./Home/Home";
import { Users } from "./Users/Users";
import { Academic } from "./Academic/CrearCursoModule";
import { Academic_module } from "./Academic/CrearModulos";
import { Inventory } from "./Inventory/Inventory";
import { Content_Module } from "./Academic/CrearEntradasModule";
import { Content_Entrada } from "./Academic/VisualizarEntradaModulos";
import { Dashboard } from "./Dashboard/Dashboard";

const Private = () => {
  return (
    <BrowserRouter>
      <PrivateLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/Academic" element={<Academic />} />
          <Route path="/Academic_module" element={<Academic_module />} />
          <Route path="/Content_Module" element={<Content_Module />} />
          <Route path="/Content_Entrada" element={<Content_Entrada />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </PrivateLayout>
    </BrowserRouter>
  );
};

export default Private;
