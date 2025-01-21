import { Card } from "antd"
import enlace from "../../../assets/img/enlace.svg"
import flag from "../../../assets/img/flag.svg"
import Encuesta from "../../../assets/img/Encuesta.svg"
import video from "../../../assets/img/video.svg"

export const Home = () => {
    return (
        <div className="flex flex items-center justify-start w-full  gap-[1.5vw] p-[2vw]">
            <div className="flex justify-start w-full bg-opacity-35">
                <div className="bg-[white] rounded-lg shadow-lg h-[15vw] w-full ">
                    <div className="border-b-2 border-solid border-gray-100 h-[20%] w-full p-[1vw]">
                        <h1 className="text-[#323232] font-Caladea">Grafico de suscripcion</h1>
                    </div>
                    {/* Aqui va el contenedor de la informacion*/}
                    <div className="rounded-lg h-[80%] w-full p-[1vw]">
                        <div className="bg-[#EFFBFF] rounded-lg  h-[80%] w-full">
                            <h1>Holaaa</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Aqui va el segundo card de informacion*/}
            <div className="flex justify-start w-full bg-opacity-35">
                <div className="flex justify-start w-full bg-opacity-35">
                    <div className="bg-[white] rounded-lg shadow-lg h-[15vw] w-full ">
                        <div className="border-b-2 border-solid border-gray-100 h-[80%] w-full p-[1vw] flex gap-[0.5vw]">
                            <h1 className="w-[2vw] h-[2vw] bg-pink-200 text-white rounded-full flex items-center justify-center font-Caladea ">A</h1>
                            <textarea className="w-[90%] h-[80%] bg-transparent border-none outline-none mt-[0.5vw]" placeholder="Hola Admin ¿Quieres compartir algo hoy?..."></textarea>
                        </div>
                        {/* Aqui va el contenedor de enlaces del segundo card*/}
                        <div className="rounded-lg h-[20%] w-full p-[0.8vw] flex justify-between">
                            <div className="flex">
                                <img className="w-[3vw]" src={enlace} />
                                <img className="w-[3vw]" src={flag} />
                                <img className="w-[3vw]" src={Encuesta} />
                                <img className="w-[3vw]" src={video} />
                                
                            </div>
                            <button className="bg-[#00AEEF] text-[white] p-[0.5vw] flex rounded-lg items-center gap-[0.1vw]"><img className="w-[1vw]" src={enlace} />Enviar</button>
                            
                        </div>
                    </div>
                </div>









                {/* <div className="bg-[white] rounded-lg shadow-lg h-[15vw] w-full">
                    <div className="rounded-lg h-[80%] w-full p-[1vw]">
                        <div className="border-b-2 border-solid border-gray-100 h-[20%] w-full p-[1vw]">
                            <h1 className="text-[#323232] font-Caladea">Bienvenido</h1>
                        </div>
                        
                        <div className="rounded-lg h-[20%] w-full p-[1vw]">
                            <div className="bg-[#EFFBFF] rounded-lg  h-[80%] w-full">
                                <h1>Holaaa</h1>
                            </div>
                        </div>
                    </div>

                </div> */}


            </div>
            <div className="flex justify-start w-full">|
                <h1>Holi A</h1>
            </div>
        </div>
    )
}