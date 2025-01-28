import mass from "../../../assets/img/Mas.svg";
import { useState } from "react";
import botonizquierda from "../../../assets/img/buttonleft.svg";
import imagenejemplo from "../../../assets/img/image.svg";
import { AcademiCard } from "../../../Component/AcademiCard/AcademiCard";
import { useNavigate } from "react-router-dom";
import { MenuProps } from "antd";



export const Academic_module = () => {
    const navigate = useNavigate();
    

  
    return (
        <div className="users flex flex-col h-full w-full p-[1vw] gap-[1vw]" >
            <div className="border-b-2 border-solid border-[#016FB4] h-[2%] w-full">
                <h1 className="text-[#016FB4] font-Caladea text-[0.6vw]">MODULO ACADEMICO</h1>
            </div>

            <div className="bg-[white] flex flex-col items-center rounded-lg shadow-lg h-full w-full pt-[2vw] overflow-auto">
                <div className="flex gap-[2vw] h-[15vw] w-[90%] p-[1vw] border-b-2 border-solid border-gray-500/10">
                    <img className="h-[3vw] w-[3vw] relative right-[3vw] cursor-pointer" src={botonizquierda} onClick={() => navigate('/Academic')} />
                    <img className="shadow-lg rounded-lg object-cover h-[12vw] w-[12vw]" src={imagenejemplo} />
                    <div className="flex flex-col h-[10vw] w-[50vw] gap-[1vw]">
                        <h1 className="text-[#016FB4] text-[1.5vw]">TITULO MODULO</h1>
                        <p className="text-[#00000] leading-7 text-justify text-[1vw]">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.
                        </p>
                    </div>
                </div>
                <div className="flex h-full w-full p-[2vw] flex-wrap">
                    <div className="flex flex-wrap items gap-[2vw] p-[2vw] center">
                        <div className=" flex flex-col items-center justify-center bg-[white] rounded-lg shadow-lg h-[10vw] w-[15vw] gap-[0.5vw] border-2 border-dashed border-[#C1C1C1] cursor-pointer">
                            <img className="w-[3vw]" src={mass}/>
                            <h1 className="text-[#00AEEF] text-[0.6vw]">Crear Modulo</h1>
                        </div>

                        <AcademiCard
                            img={imagenejemplo}
                            Tmodule={"SSHH"}
                            docent={"FUNDAMENTOS XXX"}
                            w={"15vw"}
                            h={"10vw"}
                            onClick={() => navigate('/Academic')}
                        />

                        <AcademiCard
                            img={imagenejemplo}
                            Tmodule={"SSHH"}
                            docent={"FUNDAMENTOS XXX"}
                            w={"15vw"}
                            h={"10vw"}
                            onClick={() => navigate('/Academic')}
                        />
                        <AcademiCard
                            img={imagenejemplo}
                            Tmodule={"SSHH"}
                            docent={"FUNDAMENTOS XXX"}
                            w={"15vw"}
                            h={"10vw"}
                            onClick={() => navigate('/Academic')}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};
