import { Input } from "antd";
import { AcademiCard } from "../../../Component/AcademiCard/AcademiCard";
import filled from "../../../assets/img/filled.svg";
import mass from "../../../assets/img/Mas.svg";

const { Search } = Input;
const style: React.CSSProperties = { background: 'purple', padding: '8px', width: '20vw' };

export const Academic = () => {
    return (
        <div className="users flex flex-col h-full w-full gap-[1vw] p-[1vw]">
            <div className="border-b-2 border-solid border-[#016FB4] h-[2%] w-full">
                <h1 className="text-[#016FB4] font-Caladea text-[0.6vw]">GESTIONAR MODULO ACADEMICO</h1>
            </div>

            <div className="flex flex-col items-center justify-start h-full p-[2vw] w-full">
                <div className="flex items-start justify-between w-full ">
                    <Search className="custon-search w-[30vw] h-[3vw]" placeholder="Buscar..." enterButton />

                </div>


                <div className="flex flex-wrap items-start justify-start h-[30vw] w-[50vw] p-[2vw] gap-[2vw] w-full bg-opacity-35 overflow-auto">
                    <div className=" flex flex-col items-center justify-center bg-[white] rounded-lg shadow-lg h-[40%] w-[23%] gap-[0.5vw] border-2 border-dashed border-[#C1C1C1] cursor-pointer">
                        <img className="w-[3vw]" src={mass} />
                        <h1 className="text-[#00AEEF] text-[0.6vw]">Crear Nuevo Programa</h1>
                    </div>
                    
                    <AcademiCard
                        img={filled}
                        Tmodule={"Gestionar Suscripcion"}
                        docent={"Juan Perez"}
                        onClick={() => console.log("Gestionar Suscripcion")}
                    />


                </div>
            </div>

        </div>
    );
}