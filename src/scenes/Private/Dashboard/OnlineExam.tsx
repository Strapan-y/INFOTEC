import edit from '../../../assets/img/edit.svg';
import delet from '../../../assets/img/baseline-delete.svg';
import { Input, Progress } from "antd"
import Mas_blue from '../../../assets/img/Mas_blue.svg';
import { useForm } from "react-hook-form"

export const OnlineExam: React.FC = () => {
    const { Search } = Input;

    const onChange = (checked: boolean) => {
        console.log(`switch to ${false}`);
    };

    return (
        <div className="flex flex-col items-center justify-start h-full pt-[1vw] p-[2vw] w-full">
            <div className="flex flex-col items-center justify-start pt-[1vw] h-full w-full bg-opacity-35 gap-[2%]">
                <div className="bg-white rounded-lg shadow-lg min-h-[80%] pt-[1vw] px-[2vw] max-h-[80%] w-[80%] overflow-auto border-2 border-solid border-[#F3F3F3]">
                    <table className="table-fixed w-full border-separate" style={{ borderSpacing: '0 10px' }}>
                        <thead>
                            <tr className="text-[#016FB4]">
                                <th className="p-4">#</th>
                                <th className="p-4">ESTADO</th>
                                <th className="p-4">TITULO</th>
                                <th className="p-4">FECHA</th>
                                <th className="p-4">PREGUNTAS</th>
                                <th className="p-4">OPCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Fila 1 */}
                            <tr>
                                <td className="p-4 bg-[#016FB4] text-white rounded-l-xl">1</td>
                                <td className="p-4 bg-[#016FB4] text-white">000000251</td>
                                <td className="p-4 bg-[#016FB4] text-white">PROYECTANDO</td>
                                <td className="p-4 bg-[#016FB4] text-white">000000251</td>
                                <td className="p-4 bg-[#016FB4] text-[0.8vw] text-white">WWWWWWWWW</td>
                                <td className="p-4 bg-[#016FB4] text-white flex justify-center items-center gap-5 rounded-r-xl">
                                    <img className="h-[1vw] hover:scale-110 transition-transform" src={delet} alt="Delete" />
                                </td>
                            </tr>
                            <tr className="">
                                <td className="p-4 bg-[#016FB4] h-[3vw] text-white rounded-l-xl">1</td>
                                <td className="p-4 bg-[#016FB4] h-[3vw] text-white">000000251</td>
                                <td className="p-4 bg-[#016FB4] h-[3vw] text-white">PROYECTANDO</td>
                                <td className="p-4 bg-[#016FB4] h-[3vw] text-white">000000251</td>
                                <td className="p-4 bg-[#016FB4] h-[3vw] text-white">WWWWWWWWW</td>
                                <td className="p-4 bg-[#016FB4] h-[3vw] text-white flex justify-center items-center gap-5 rounded-r-xl">
                                    <img className="h-[2vw] hover:scale-110 transition-transform" src={edit} alt="Edit" />

                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
                <div className="mt-4">
                    <img src={Mas_blue} alt="Agregar" className="cursor-pointer hover:opacity-80 transition-opacity" />
                </div>
            </div>
        </div>

    );
};