import Mas_blue from '../../../../assets/img/Mas_blue.svg';
import edit from '../../../../assets/img/edit.svg';
import view_eye from '../../../../assets/img/view_eye.svg';
import { Modal, Switch } from 'antd';
import { Download } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const Tasks: React.FC = () => {
    const navigate = useNavigate();
    const [CrearTarea, setCrearTarea] = useState(false);

    const data = [
        { estado: "Activo", titulo: "Tarea 1", fecha: "13/01/2025" },
        { estado: "Inactivo", titulo: "Tarea 2", fecha: "13/01/2025"},
        { estado: "Inactivo", titulo: "Tarea 3", fecha: "13/01/2025"},

    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-start pt-[2vw] p-[1vw]">
            <div className="flex flex-col justify-start h-full w-full px-[2vw]">
                <h1 className="underline pb-[0vw]">MIS TAREAS</h1>

                <div className="flex justify-end p-[0.5vw]">
                    <Download className="text-[#016FB4] cursor-pointer" size={22} />
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md h-[85%] w-full  border-2 border-solid border-[#F3F3F3] overflow-auto">
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
                                    <img src={view_eye} alt="View" className="w-5 h-5" onClick={() => {navigate('/ViewTask')}}/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-end px-[2vw] w-full'>
                <img src={Mas_blue} alt="" className="cursor-pointer" onClick={() => setCrearTarea(true)} />
            </div>
            <Modal open={CrearTarea} footer={null} onCancel={() => setCrearTarea(false)} width="45vw" style={{ display: 'flex' }}>
                
            </Modal>

        </div>

    );
}