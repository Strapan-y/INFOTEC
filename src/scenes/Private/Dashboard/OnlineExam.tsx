import Mas_blue from '../../../assets/img/Mas_blue.svg';
import edit from '../../../assets/img/edit.svg';
import view_eye from '../../../assets/img/view_eye.svg';
import encuesta from '../../../assets/img/Encuestablue.svg';
export const OnlineExam: React.FC = () => {

    const data = [
        { estado: "Activo", titulo: "Exam 1", fecha: "13/01/2025", preguntas: 15 },
        { estado: "Inactivo", titulo: "Exam 2", fecha: "13/01/2025", preguntas: 20 },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-start gap-3 pt-[3vw] p-[2vw]">
            <div className='flex justify-center h-full w-full px-[2vw] pb-[2vw]'>
                <div className="bg-white p-4 rounded-lg shadow-md h-[60%] w-full border-2 border-solid border-[#F3F3F3]">
                    {/* Header */}
                    <div className="grid grid-cols-5 justify-center text-[#016FB4] font-bold p-3 border-b">
                        <div className="flex items-center justify-center">ESTADO</div>
                        <div className="flex items-center justify-center">TITULO</div>
                        <div className="flex items-center justify-center">FECHA</div>
                        <div className="flex items-center justify-center">PREGUNTAS</div>
                        <div className="flex items-center justify-center">OPCIONES</div>
                    </div>

                    {/* Data Rows */}
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-5 items-center bg-blue-50 hover:bg-blue-100 p-3 rounded-md mb-2"
                        >
                            <div className="flex items-center justify-center">{item.estado}</div>
                            <div className="flex items-center justify-center">{item.titulo}</div>
                            <div className="flex items-center justify-center">{item.fecha}</div>
                            <div className="flex items-center justify-center">{item.preguntas}</div>
                            <div className="flex gap-2 justify-center text-blue-600">
                                <button className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                                    <img src={edit} alt="Edit" className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                                    <img src={view_eye} alt="View" className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                                    <img src={encuesta} alt="Survey" className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <img src={Mas_blue} alt="" />

            </div>

        </div>

    );
}