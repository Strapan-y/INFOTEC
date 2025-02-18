import { Download, Edit, Trash, ArrowLeft } from "lucide-react";

export default function ViewTask() {

  return (
    <div className="p-6 bg-[#F9FCFF] min-h-screen">
        {/* Botón de regreso */}
        <button className="bg-[#016FB4] text-white p-2 rounded-full">
            <ArrowLeft size={20} />
        </button>
      
        <div className="flex justify-between items-center mt-4">
            <div className="bg-white shadow-lg p-4 rounded-lg w-1/2">
                <h2 className="text-lg font-bold text-[#016FB4]">MÓDULO II</h2>
                <p>Computación y Sistemas</p>
                <p className="text-sm text-gray-500">Fecha de entrega: 01/08/2025 @ 09:30</p>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-lg w-1/3">
                <h3 className="text-[#016FB4] font-bold">INFORMACIÓN GENERAL</h3>
                <p><strong>Curso:</strong> MÓDULO 1</p>
                <p><strong>Programa:</strong></p>
                <p><strong>Estudiantes totales:</strong></p>
                <p><strong>Entregadas:</strong></p>
                <p><strong>Sin entregar:</strong></p>
            </div>
            {/* Botón de descarga */}
            <button className="bg-[#016FB4] text-white p-2 rounded">
            <Download size={20} />
            </button>
        </div>
      
      {/* Tabla de estudiantes */}
      <div className="mt-6 bg-white shadow-lg p-4 rounded-lg">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-[#EAF4FF] text-[#016FB4]">
            <tr>
              <th className="border p-2">Estado</th>
              <th className="border p-2">Estudiante</th>
              <th className="border p-2">Comentario estudiante</th>
              <th className="border p-2">Archivo</th>
              <th className="border p-2">Nota</th>
              <th className="border p-2">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 text-center">Pendiente</td>
              <td className="border p-2 text-center">Juan Pérez</td>
              <td className="border p-2 text-center">Sin comentarios</td>
              <td className="border p-2 text-center">-</td>
              <td className="border p-2 text-center">-</td>
              <td className="border p-2 text-center flex justify-center gap-2">
                <button className="text-blue-500">
                  <Edit size={18} />
                </button>
                <button className="text-red-500">
                  <Trash size={18} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}