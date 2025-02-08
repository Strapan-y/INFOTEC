import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateLayout from "../../layouts/PrivateLayout";
import { Home } from "./Home/Home";
import { Users } from "./Users/Users";
import { Academic } from "./Academic/CrearCursoModule";
import { AcademicModule } from "./Academic/CrearModulos"; // PascalCase
import { Inventory } from "./Inventory/Inventory";
import { ContentModule } from "./Academic/CrearEntradasModule"; // PascalCase
import { ContentEntrada } from "./Academic/VisualizarEntradaModulos"; // PascalCase
import { ModulesContents } from "./Dashboard/LayoutModules";

const Private = () => {
  return (
    <BrowserRouter>
      <PrivateLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/academic-module" element={<AcademicModule />} />
          <Route path="/content-module" element={<ContentModule />} />
          <Route path="/content-entrada" element={<ContentEntrada />} />
          <Route path="/dashboard" element={<ModulesContents />} />
          <Route path="/inventory" element={<Inventory />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </PrivateLayout>
    </BrowserRouter>
  );
};

export default Private;
