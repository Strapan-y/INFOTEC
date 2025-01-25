import { Input } from "antd";
import edit from "../../../assets/img/edit.svg";
import delet from "../../../assets/img/baseline-delete.svg";



export const Inventory = () => {
    const { Search } = Input;
    return (
        <div className="users flex flex-col h-full w-full gap-[1vw] p-[1vw]">
            <div className="border-b-2 border-solid border-[#016FB4] h-[2%] w-full">
                <h1 className="text-[#016FB4] font-Caladea text-[0.6vw]">GESTIONAR SUSCRIPCION</h1>
            </div>
            <div className="flex flex-col items-center justify-start h-full p-[2vw] w-full">
                <div className="flex items-start justify-between w-full ">
                    <Search className="custon-search w-[30vw] h-[3vw]" placeholder="Buscar..." enterButton />
                    <div className="flex items-start justify-end w-full">
                        <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]">
                            CREAR SUSCRIPCION
                        </button>
                    </div>
                </div>
                {/* Contenedor de la tabla */}
                <div className="flex items-center justify-center h-full pt-[3vw] w-full bg-opacity-35 gap-[2%]">
                    <div className="bg-[white] rounded-lg shadow-lg min-h-[85%] max-h-[90%] w-full p-[1vw] overflow-auto">
                        <table className="table-auto w-full text-center">
                            <thead>
                                <tr className="border-b-2 border-solid border-gray-200 text-[#016FB4]">
                                    <th className="p-4">#</th>
                                    <th className="p-4">NIT</th>
                                    <th className="p-4">EMPRESA</th>
                                    <th className="p-4">USUARIO</th>
                                    <th className="p-4">CONTRASEÑA</th>
                                    <th className="p-4">SUSCRIPCIÓN</th>
                                    <th className="p-4">INICIO</th>
                                    <th className="p-4">FIN</th>
                                    <th className="p-4">SELECCIONAR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-2 border-solid border-gray-200 text-[0B0C0C] hover:bg-gray-50">
                                    <td className="p-4">1</td>
                                    <td className="p-4">000000251</td>
                                    <td className="p-4">PROYECTANDO</td>
                                    <td className="p-4">000000251</td>
                                    <td className="p-4">WWWWWWWWW</td>
                                    <td className="p-4">BÁSICA</td>
                                    <td className="p-4">23/01/2025</td>
                                    <td className="p-4">23/04/2025</td>
                                    <td className="p-4 flex justify-center items-center gap-2 cursor-pointer">
                                        <img className="w-[1vw]" src={edit} alt="Edit"/>
                                        <img className="w-[1vw]" src={delet} alt="Delete" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}