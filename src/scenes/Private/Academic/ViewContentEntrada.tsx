import { useNavigate } from "react-router-dom";
import botonizquierda from "../../../assets/img/buttonleft.svg";
import imagenejemplo from "../../../assets/img/image.svg";

export const ViewContentEntrada = () => {
    const navigate = useNavigate()


    return (
        <div className="users flex flex-col h-full w-full p-[2vw] gap-[0.5vw]" >
            <div className="border-b-2 border-solid border-[#016FB4] h-[2%] w-full">
                <h1 className="text-[#016FB4] font-Caladea text-[0.6vw]">MODULO XXX CONTENIDO</h1>
            </div>
            <div className="bg-[white] flex flex-col items-center rounded-lg shadow-lg h-full w-full pt-[2vw] overflow-auto">
                <div className="flex gap-[2vw] h-[15vw] w-[90%] p-[1vw]">
                    <img className="h-[3vw] w-[3vw] relative right-[3vw] cursor-pointer" alt="" src={botonizquierda} onClick={() => navigate('/AcademicModule')} />
                    <img className="shadow-lg rounded-lg object-cover h-[12vw] w-[12vw]" src={imagenejemplo} alt=""/>
                    <div className="flex flex-col h-[10vw] w-[50vw] gap-[1vw]">
                        <h1 className="text-[#016FB4] text-[1.5vw]">FUNDAMENTOS XX</h1>
                        <p className="text-[#00000] leading-7 text-justify text-[1vw]">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}