import { Steps, Switch } from "antd";
import { Download, Eye, FileText, Pencil, Trash } from "lucide-react";
import { useState } from "react";

export const Grades: React.FC = () => {
    // Datos de ejemplo
    const [grades, setGrades] = useState([
        { id: 1, student: "Juan Pérez", activity1: 8, activity2: 9, activity3: 7 }
    ]);

    const handleEdit = (id: number) => {
        console.log(`Editar estudiante con ID: ${id}`);
    };

    const handleDelete = (id: number) => {
        setGrades(grades.filter((grade) => grade.id !== id));
    };

    const { Step } = Steps;
    const [current, setCurrent] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onChange = (checked: boolean) => {
        console.log(`switch to ${false}`);
    };
    
    const handleView = (id: number) => {
        console.log(`Ver detalles del estudiante con ID: ${id}`);
      };
    

    const data = [
        { estado: "Activo", titulo: "Exam 1", fecha: "13/01/2025", preguntas: 15 },
        { estado: "Inactivo", titulo: "Exam 2", fecha: "13/01/2025", preguntas: 20 },
        { estado: "Inactivo", titulo: "Exam 2", fecha: "13/01/2025", preguntas: 20 },
    ];




    return (
        <div className="flex flex-col justify-start h-full w-full px-[2vw]">
            <h1 className="underline p-[1vw]">MIS CALIFICACIONES</h1>
            <div className="bg-white p-4 rounded-lg shadow-md h-[80%] w-full border-2 border-solid border-[#F3F3F3] gap-[1vw] overflow-auto">
                <div className="grid grid-cols-5 justify-center text-[#016FB4] font-bold p-3 border-b">
                    <div className="flex items-center justify-center">ESTUDIANTE</div>
                    <div className="flex items-center justify-center">ACTIVIDAD 1</div>
                    <div className="flex items-center justify-center">ACTIVIDAD 2</div>
                    <div className="flex items-center justify-center">ACTIVIDAD 3</div>
                    <div className="flex items-center justify-center">OPCIONES</div>
                </div>

                {grades.map((grade, index) => (
                    <div key={index} className="grid grid-cols-5 items-center bg-blue-50 hover:bg-blue-100 p-3 rounded-md mb-2">
                        <div className="flex items-center justify-center">{grade.student}</div>
                        <div className="flex items-center justify-center">{grade.activity1}</div>
                        <div className="flex items-center justify-center">{grade.activity2}</div>
                        <div className="flex items-center justify-center">{grade.activity3}</div>
                        <div className="flex gap-2 items-center justify-center text-blue-600">
                            <Switch defaultChecked />
                            <button className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                                <Pencil className="w-5 h-5" onClick={() => handleEdit(grade.id)} />
                            </button>
                            <button className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                                <Eye className="w-5 h-5" onClick={() => handleView(grade.id)} />
                            </button>
                            <button className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                                <FileText className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};