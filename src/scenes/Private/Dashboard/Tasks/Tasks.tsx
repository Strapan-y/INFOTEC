import Mas_blue from '../../../../assets/img/Mas_blue.svg';
import edit from '../../../../assets/img/edit.svg';
import view_eye from '../../../../assets/img/view_eye.svg';
import { Modal, Switch } from 'antd';
import { ArrowLeft, Download, Edit, Trash } from 'lucide-react';
import { useState } from 'react';
import { ViewTask } from './ViewTasks';



export const Tasks: React.FC = () => {
    const [CreateTask, setCreateTask] = useState(false);
    const [SubPagine, setSubPagine] = useState(0);
    const [current, setCurrent] = useState(0);

    const data = [
        { estado: "Activo", titulo: "Tarea 1", fecha: "13/01/2025" },
        { estado: "Inactivo", titulo: "Tarea 2", fecha: "13/01/2025" },
        { estado: "Inactivo", titulo: "Tarea 3", fecha: "13/01/2025" },

    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-start pt-[1vw] p-[1vw]">
            {(() => {
                switch (SubPagine) {
                    case 0:
                        return (
                            <div className="flex flex-col justify-start h-full w-full px-[2vw]">
                                <h1 className="underline pb-[0vw]">MIS TAREAS</h1>
                                <div className="flex justify-end px-[0.5vw] pb-[0.5vw]">
                                    <Download className="text-[#016FB4] cursor-pointer" size={22} />
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md h-[85%] w-full pb-[0.5vw] border-2 border-solid border-[#F3F3F3] overflow-auto">
                                    <div className="grid grid-cols-4 justify-center text-[#016FB4] font-bold p-3 border-b">
                                        <div className="flex items-center justify-center">ESTADO</div>
                                        <div className="flex items-center justify-center">TITULO</div>
                                        <div className="flex items-center justify-center">ENTREGAS HASTA</div>
                                        <div className="flex items-center justify-center">OPCIONES</div>
                                    </div>

                                    {/* Data Rows */}
                                    {data.map((item, index) => (
                                        <div key={index} className="grid grid-cols-4 items-center bg-blue-50 hover:bg-blue-100 p-3 rounded-md mb-2">
                                            <div className="flex items-center justify-center">{item.estado}</div>
                                            <div className="flex items-center justify-center">{item.titulo}</div>
                                            <div className="flex items-center justify-center">{item.fecha}</div>
                                            <div className="flex gap-2 items-center justify-center text-blue-600">
                                                <Switch className='w-[1vw]' defaultChecked />
                                                <button className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                                                    <img src={edit} alt="Edit" className="w-5 h-5" />
                                                </button>
                                                <button className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                                                    <img src={view_eye} alt="View" className="w-5 h-5 " onClick={() => { setSubPagine(1) }} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex justify-end w-full'>
                                    <img src={Mas_blue} alt="" className="cursor-pointer" />
                                </div>
                            </div>
                        );
                    case 1:
                        return (
                            <ViewTask />
                        );
                    default:
                        return null;
                }
            }
            )()}
        </div>
    );
}



