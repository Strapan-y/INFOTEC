import Mas_blue from '../../../../assets/img/Mas_blue.svg';
import edit from '../../../../assets/img/edit.svg';
import view_eye from '../../../../assets/img/view_eye.svg';
import encuesta from '../../../../assets/img/Encuestablue.svg';
import { useState } from 'react';
import { Button, Modal, Steps, Switch } from 'antd';
import { CreateExamStep } from './CreateExamStep';
import { AddQuestion } from './AddQuestions';



export const OnlineExam: React.FC = () => {
    const [CrearExamen, setCrearExamen] = useState(false);
    const [EditarExamen, setEditarExamen] = useState(false);
    const [VerExamen, setVerExamen] = useState(false);
    const [SubPagine, setSubPagine] = useState(0);

    const { Step } = Steps;
    const [current, setCurrent] = useState(0);


    const onChange = (checked: boolean) => {
        console.log(`switch to ${false}`);
    };

    const data = [
        { estado: "Activo", titulo: "Exam 1", fecha: "13/01/2025", preguntas: 15 },
        { estado: "Inactivo", titulo: "Exam 2", fecha: "13/01/2025", preguntas: 20 },
        { estado: "Inactivo", titulo: "Exam 2", fecha: "13/01/2025", preguntas: 20 },
    ];



    const next = () => {
        setCurrent(current + 1);
        window.scrollTo(0, 0)
    };

    const prev = () => {
        setCurrent(current - 1);
        window.scrollTo(0, 0)
    };

    const steps = [
        {
            title: 'CREAR EXAMEN',
            content: <CreateExamStep setCrearExamen={setCrearExamen} />,
        },
        {
            title: 'AGREGAR PREGUNTAS',
            content: <AddQuestion />,
        },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-start pt-[1vw] p-[1vw]">
            {(() => {
                switch (SubPagine) {
                    case 0:
                        return <div className="flex flex-col justify-start h-full w-full px-[2vw]">
                            <h1 className="underline p-[1vw]">MIS EXAMENES</h1>
                            <div className="bg-white p-4 rounded-lg shadow-md h-[80%] w-full border-2 border-solid border-[#F3F3F3] gap-[1vw] overflow-auto">
                                <div className="grid grid-cols-5 justify-center text-[#016FB4] font-bold p-3 border-b">
                                    <div className="flex items-center justify-center">ESTADO</div>
                                    <div className="flex items-center justify-center">TITULO</div>
                                    <div className="flex items-center justify-center">FECHA</div>
                                    <div className="flex items-center justify-center">PREGUNTAS</div>
                                    <div className="flex items-center justify-center">OPCIONES</div>
                                </div>

                                {/* Data Rows */}
                                {data.map((item, index) => (
                                    <div key={index} className="grid grid-cols-5 items-center bg-blue-50 hover:bg-blue-100 p-3 rounded-md mb-2">
                                        <div className="flex items-center justify-center">{item.estado}</div>
                                        <div className="flex items-center justify-center">{item.titulo}</div>
                                        <div className="flex items-center justify-center">{item.fecha}</div>
                                        <div className="flex items-center justify-center">{item.preguntas}</div>
                                        <div className="flex gap-2 items-center justify-center text-blue-600">
                                            <Switch defaultChecked onChange={onChange} />
                                            <button className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                                                <img src={edit} alt="Edit" className="w-5 h-5" onClick={() => {
                                                    setEditarExamen(true)
                                                    setCrearExamen(true)
                                                }} />
                                            </button>
                                            <button className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                                                <img src={view_eye} alt="View" className="w-5 h-5" onClick={() => { setSubPagine(1) }} />
                                            </button>
                                            <button className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                                                <img src={encuesta} alt="Survey" className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-end w-full pt-[1vw]'>
                                <img src={Mas_blue} alt="" className="cursor-pointer" onClick={() => setCrearExamen(true)} />
                            </div>
                        </div>
                            ;
                    case 1:
                        return <div className="flex flex-col justify-start h-[80%] w-full p-[2vw]">
                            <div className="flex bg-white justify-center p-2 rounded-lg w-full overflow-auto">
                                <table className="table-auto w-full text-center">
                                    <thead>
                                        <tr className="bg-blue-50 hover:bg-blue-100 border-b-2 border-solid border-gray-200 text-[#016FB4]">
                                            <th className="p-4">#</th>
                                            <th className="p-4">ESTUDIANTE</th>
                                            <th className="p-4">NOTA</th>
                                            <th className="p-4">RESULTADO</th>
                                            <th className="p-4">OPCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b-2 border-solid border-gray-200 text-[0B0C0C] hover:bg-gray-50">
                                            <td className="p-4">1</td>
                                            <td className="p-4">000000251</td>
                                            <td className="p-4">PROYECTANDO</td>
                                            <td className="p-4">000000251</td>
                                            <td className="p-4 flex justify-center items-center gap-2 cursor-pointer">
                                                <img src={view_eye} alt="View" className="w-5 h-5" />
                                            </td>
                                        </tr>
                                        <tr className="border-b-2 border-solid border-gray-200 text-[0B0C0C] hover:bg-gray-50">
                                            <td className="p-4">1</td>
                                            <td className="p-4">000000251</td>
                                            <td className="p-4">PROYECTANDO</td>
                                            <td className="p-4">000000251</td>
                                            <td className="p-4 flex justify-center items-center gap-2 cursor-pointer">
                                                <img src={view_eye} alt="View" className="w-5 h-5" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button
                                className="bg-[#00AEEF] w-[9vw] h-[2vw] text-white text-[1vw] font-semibold px-2 py-1 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]"
                            >

                                ATRAS
                            </button>

                        </div>

                }
            })()}


            <Modal open={CrearExamen} footer={null} onCancel={() => {
                setCrearExamen(false)
                setEditarExamen(false)
            }} width="45vw" style={{ display: 'flex' }}>
                <div className="flex items-center pt-[1vw] justify-center w-full">
                    <Steps
                        className="w-[20vw]"
                        direction="horizontal"
                        current={current}
                    >
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                </div>

                <div className="steps-content" >{steps[current].content}</div>
                <div className="flex justify-center w-full" >
                    {current > 0 && (
                        <Button className='boton' style={{ margin: '0 8px', backgroundColor: '#C4C4C4', borderRadius: '10px', }} onClick={() => prev()}>
                            Atras
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button className='boton' type="primary" style={{ backgroundColor: '#4E8E30', borderRadius: '10px', }} onClick={() => next()}>
                            Continuar
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <button
                            className="bg-[#00AEEF] text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]">
                            {EditarExamen ? "EDITAR EXAMEN" : "CREAR EXAMEN"}
                        </button>
                    )}
                </div>
            </Modal>

            <Modal open={VerExamen} footer={null} onCancel={() => { setVerExamen(false) }} width="45vw" style={{ display: 'flex' }}>


            </Modal>

        </div>

    );
}