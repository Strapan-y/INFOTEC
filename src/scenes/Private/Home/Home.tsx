import { Card } from "antd"
import enlace from "../../../assets/img/enlace.svg"
import flag from "../../../assets/img/flag.svg"
import Encuesta from "../../../assets/img/Encuesta.svg"
import video from "../../../assets/img/video.svg"
import plane from "../../../assets/img/plane-line.svg"
import { Progress } from 'antd';


export const Home = () => {

    const alumejem = [
        {
            nombre: "Juan",
            modulo: "Modulo 1",
            progreso: 70
        },
        {
            nombre: "Pablo",
            modulo: "Modulo 2",
            progreso: 50
    
        },
        {
            nombre: "Juan",
            modulo: "Modulo 1",
            progreso: 10
        }
    ]

    return (
        <div className="flex flex justify-center items-center h-full w-full  gap-[1.5vw] p-[2vw]">
            <div className="flex flex-col justify-start h-full w-[25%] bg-opacity-35 gap-[1.5vw]">
                <div className="bg-[white] rounded-lg shadow-lg min-h-[17.5vw] max-h-[17.5vw] w-full">

                    <div className="border-b-2 border-solid border-gray-100 h-[20vm] w-full p-[1vw]">
                        <h1 className="text-[#323232] font-Caladea">Grafico de suscripcion</h1>
                    </div>
                    {/* Aqui va el contenedor de la informacion*/}
                    <div className="rounded-lg h-[80%] w-full p-[1vw]">
                        <div className="bg-[#EFFBFF] rounded-lg p-[0.5vw] h-[80%] w-full">
                            <h1>Holaaa</h1>
                        </div>
                    </div>
                </div>

                <div className="bg-[white] rounded-lg shadow-lg h-[15vw] w-full ">
                    <div className="border-b-2 border-solid border-gray-100 h-[20%] w-full p-[1vw]">
                        <h1 className="text-[#323232] font-Caladea">Usuarios Activos</h1>
                    </div>

                    <div className="bg-[white] rounded-lg shadow-lg min-h-[16.5vw] max-h-[16.5vw] w-full overflow-y-auto">
                        <div className="w-full p-[1vw] flex gap-[0.5vw] overflow-y-auto">
                            <h1 className="w-[2vw] h-[2vw] bg-pink-200 text-white rounded-full flex items-center justify-center font-Caladea">A</h1>
                            <div className="flex flex-col items-start">
                                <h5 className="text-black">Admin</h5>
                                <h1 className="bg-[#00AEEF] h-[1vw] text-white p-[0.2vw] rounded-lg text-[0.5vw] mt-[0.2vw]">Administrador</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Aqui va el segundo card de informacion*/}

            <div className="flex flex-col justify-start h-full w-[50%] bg-opacity-35 gap-[1.5vw]">
                <div className="bg-[white] rounded-lg shadow-lg min-h-[20vw] max-h-[20%] w-full ">
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
                        <button className="bg-[#00AEEF] text-[white] p-[0.5vw] flex rounded-lg items-center gap-[0.1vw]"><img className="w-[1vw]" src={plane} />Enviar</button>

                    </div>
                </div>
            </div>


            {/* Aqui va el tercer card de informacion*/}
            <div className="flex flex-col justify-start h-full w-[20%] bg-opacity-35 gap-[1.5vw]">
                <div className="bg-[white] rounded-lg shadow-lg  w-full">
                    <div className=" w-full bg-[#00AEEF] rounded-t-lg shadow-md flex flex-col items-center justify-center text-white p-[1vw]">
                        <div className="text-[2.5rem] font-bold leading-none">22</div>
                        <div className="text-[1.2rem] font-semibold">Miercoles</div>
                        <div className="text-sm">Enero 2025</div>
                    </div>
                    <div className="rounded-lg h-[9vw] w-full p-[1vw] min-h-[11vw] max-h-[11vw] overflow-y-auto">
                        <div className="flex flex-col gap-[0.3vw] ">
                            <div className="bg-[#EFFBFF] rounded-lg w-full p-[1vw] flex justify-between">
                                <h1 className="text-[#016FB4]">Clase Autocad en vivo</h1>
                                <h1 className="text-[#016FB4]">5pm</h1>

                            </div>
                            <div className="bg-[#EFFBFF] rounded-lg w-full p-[1vw] flex justify-between">
                                <h1 className="text-[#016FB4]">Clase Excel en vivo</h1>
                                <h1 className="text-[#016FB4]">5pm</h1>
                            </div>
                            <div className="bg-[#EFFBFF] rounded-lg w-full p-[1vw] flex justify-between">
                                <h1 className="text-[#016FB4]">Clase Excel en vivo</h1>
                                <h1 className="text-[#016FB4]">5pm</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-start w-full bg-opacity-35 gap-[1.5vw]">
                    <div className="bg-[white] rounded-lg shadow-lg  min-h-[20vw] max-h-[20vw] w-full">
                        <div className=" border-b-2 border-solid border-gray-100 w-full p-[1vw]">
                            <div>
                                <h1 className="text-[#323232] font-Caladea">Progreso estudiantes</h1>
                            </div>
                        </div>
                        {/* Aqui va el contenedor de la informacion*/}
                        <div className="rounded-lg h-[80%] w-full overflow-y-auto">
                            {alumejem.map((alum) => {
                                const getProgressColor = () => {
                                    if (alum.progreso >= 80) {
                                        return "#B7F651"; // Verde
                                    } else if (alum.progreso >= 50) {
                                        return "#FFE552"; // Amarillo
                                    } else {
                                        return "#FF6B6B"; // Rojo
                                    }
                                };
                                
                                return (<> <div className="flex justify-between p-[1vw] pb-[0.5vw]">
                                    <h1 className="text-[#016FB4]">{alum.nombre}</h1>
                                    <h1 className="text-[#016FB4]">{alum.modulo}</h1>
                                </div>
                                    <Progress className="p-[1vw] pt-[0vw] pb-[0vw]" percent={alum.progreso} percentPosition={{ align: 'end', type: 'inner' }} size={["100%", 20]} strokeColor={getProgressColor()} />
                                </>)

                            })}

                        </div>
                    </div>
                </div >
            </div >
        </div >

    )
}