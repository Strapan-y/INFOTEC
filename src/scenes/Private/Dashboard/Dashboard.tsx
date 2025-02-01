import { useNavigate } from "react-router-dom";
import botonizquierda from "../../../assets/img/buttonleft.svg";
import imagenejemplo from "../../../assets/img/image.svg";

export const Dashboard: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className="users flex flex-col h-full w-full p-[1vw] gap-[1vw]" >
            <div className="border-b-2 border-solid border-[#016FB4] h-[2%] w-full">
                <h1 className="text-[#016FB4] font-Caladea text-[0.6vw]">DASHBOARD</h1>
            </div>

            <div className="bg-[white] flex flex-col items-center rounded-lg shadow-lg h-full w-full pt-[1.5vw] px-[1.5vw] overflow-auto">
                <div className="flex gap-[2vw] h-[5vw] w-full p-[1vw] border-b-2 border-solid border-gray-500/10">
                    <div className="flex items-center justify-between gap-[3vw]">
                        <img className="h-[3vw] w-[3vw] right-[3vw] cursor-pointer" src={botonizquierda} onClick={() => navigate('/Academic_Content')} />
                        <img className="h-[3vw] w-[3vw] cursor-pointer" src={botonizquierda} onClick={() => navigate('/Academic_Content')} />
                        <img className="h-[3vw] w-[3vw] cursor-pointer" src={botonizquierda} onClick={() => navigate('/Academic_Content')} />
                        <img className="h-[3vw] w-[3vw] cursor-pointer" src={botonizquierda} onClick={() => navigate('/Academic_Content')} />
                        <img className="h-[3vw] w-[3vw] cursor-pointer" src={botonizquierda} onClick={() => navigate('/Academic_Content')} />

                    </div>


                </div>

            </div>
        </div>


    );
}