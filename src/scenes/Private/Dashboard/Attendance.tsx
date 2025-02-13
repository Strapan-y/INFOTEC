import { Button, Input } from "antd";
import { CalendarIcon, Search } from "lucide-react";
import { useState } from "react";

export const Attendance: React.FC = () => {
    const [date, setDate] = useState<string>("");
    const [Search, setSearch] = useState<string>("");

    return (
        <div className="flex flex-col justify-start h-[80%] w-full p-[2vw]">
            <h2 className="text-lg font-semibold mb-4">Asistencia</h2>
            <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-2 border p-2 rounded-md bg-blue-50">
                    <CalendarIcon className="w-4 h-4 text-blue-600" />
                    <input
                        type="date"
                        className="bg-transparent focus:outline-none"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <button
                    className="bg-[#00AEEF] w-[4vw] h-[2vw] text-white text-[1vw] font-semibold px-2 py-1 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]">
                    VER
                </button>
                <Input
                    className="w-48 bg-blue-50"
                    placeholder="Buscar"
                    value={Search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    className="bg-[#00AEEF] w-[7vw] h-[2vw] text-white text-[1vw] font-semibold px-2 py-1 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]">
                    BUSCAR
                </button>
            </div>



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
                                <img src={"view_eye"} alt="View" className="w-5 h-5" />
                            </td>
                        </tr>
                        <tr className="border-b-2 border-solid border-gray-200 text-[0B0C0C] hover:bg-gray-50">
                            <td className="p-4">1</td>
                            <td className="p-4">000000251</td>
                            <td className="p-4">PROYECTANDO</td>
                            <td className="p-4">000000251</td>
                            <td className="p-4 flex justify-center items-center gap-2 cursor-pointer">
                                <img src={"view_eye"} alt="View" className="w-5 h-5" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    );
};