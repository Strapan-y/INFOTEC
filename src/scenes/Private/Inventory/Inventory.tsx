import { AutoComplete, Input, Modal, Select, Switch } from "antd";
import edit from "../../../assets/img/edit.svg";
import delet from "../../../assets/img/baseline-delete.svg";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";



export const Inventory = () => {
    const { Search } = Input;
    const [isModalSuscripcion, setIsModalSuscripcion] = useState(false);
    const [isModalEditarSuscripcion, setIsModalEditarSuscripcion] = useState(false);
    const [isModalEditarEmpresaSuscripcion, setIsModalEditarEmpresaSuscripcion] = useState(false);
    const onChange = (checked: boolean) => {
        console.log(`switch to ${false}`);
    };

    const handleInputChange = (e: { target: { value: string; }; }, name: any) => {
        const value = e.target.value.replace(/[^0-9]/g, ""); // Permitir solo números
        setValueEmpresaData(name, value);
    };
    const handleInputKeys = (e: { target: { value: string } }, name: any) => {
        const value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, ""); // Permitir solo letras, espacios y caracteres acentuados
        setValueEmpresaData(name, value);
    };
    const {
        register: registercontrolEmpresaData,
        setValue: setValueEmpresaData,
        watch: watchEmpresaData,
        control: controlEmpresaData,
        formState: { errors: errorsEmpresaData },
    } = useForm({
        defaultValues: {
            documentType: '',
            nit: '',
            name: '',
            suscription: '',
            telefono: '',
            documentText: '',
            nationality: '',
            idNumber: '',
            precio: '',
            historyNumber: '',
            department: '',
            municipality: '',
            subdistrict: '',
            neighborhood: '',
            cellphone: '',
            email: '',
            patientProfession: ''
        }
    });

    return (
        <div className="users flex flex-col h-full w-full gap-[1vw] p-[1vw]">
            <div className="border-b-2 border-solid border-[#016FB4] h-[2%] w-full">
                <h1 className="text-[#016FB4] font-Caladea text-[0.6vw]">GESTIONAR SUSCRIPCION</h1>
            </div>

            <div className="flex flex-col items-center justify-start h-full p-[2vw] w-full">
                <div className="flex items-start justify-between w-full ">
                    <Search className="custon-search w-[30vw] h-[3vw]" placeholder="Buscar..." enterButton />
                    <div className="flex items-start justify-end w-full">
                        <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={() => setIsModalSuscripcion(true)}>
                            CREAR SUSCRIPCION
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-[1vw] h-[15vw]">
                    <div className="bg-[white] rounded-lg min-h-[14vw] p-[1vw] max-h-[14vw] w-[25vw] overflow-auto">
                        <table className="table-auto w-full text-left">
                            <thead>
                                <tr className="border-b-2 border-solid border-gray-200 text-[#016FB4]">
                                    <th className="p-4">#</th>
                                    <th className="p-4">SUSCRICIONES</th>
                                    <th className="p-4">PRECIO</th>
                                    <th className="p-4">SELECCIONAR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-2 border-solid border-gray-200 text-[0B0C0C] hover:bg-gray-50">
                                    <td className="p-4">1</td>
                                    <td className="p-4">BASICA</td>
                                    <td className="p-4">50</td>

                                    <td className="p-4 flex justify-center items-center gap-2 cursor-pointer">
                                        <img className="w-[1vw]" src={edit} alt="Edit" onClick={() => setIsModalEditarSuscripcion(true)}/>
                                        <img className="w-[1vw]" src={delet} alt="Delete" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                {/* TABLA*/}
                <div className="flex items-center justify-center h-full  w-full bg-opacity-35 gap-[2%]">
                    <div className="bg-[white] rounded-lg shadow-lg min-h-[85%] max-h-[90%] w-full p-[1vw] overflow-auto">
                        <table className="table-auto w-full text-center">
                            <thead>
                                <tr className="border-b-2 border-solid border-gray-200 text-[#016FB4]">
                                    <th className="p-4">#</th>
                                    <th className="p-4">NIT</th>
                                    <th className="p-4">EMPRESA</th>
                                    <th className="p-4">SUSCRIPCION</th>
                                    <th className="p-4">FECHA INICIO</th>
                                    <th className="p-4">FECHA FIN</th>
                                    <th className="p-4">SELECCIONAR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-2 border-solid border-gray-200 text-[0B0C0C] hover:bg-gray-50">
                                    <td className="p-4">1</td>
                                    <td className="p-4">000000251</td>
                                    <td className="p-4">PROYECTANDO</td>
                                    <td className="p-4">BÁSICA</td>
                                    <td className="p-4">23/01/2025</td>
                                    <td className="p-4">23/04/2025</td>
                                    <td className="p-4 flex justify-center items-center gap-2 cursor-pointer">
                                        <img className="w-[1vw]" src={edit} alt="Edit" onClick={() => setIsModalEditarEmpresaSuscripcion(true)}/>
                                        <img className="w-[1vw]" src={delet} alt="Delete" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Modal title="CREAR SUSCRIPCION" width={"40vw"} open={isModalSuscripcion} footer={null} onCancel={() => setIsModalSuscripcion(false)}>
                    <div className='border-t-[0.2vw] justify-center border-solid border-gray-100 w-full flex flex-wrap pt-[1vw] gap-4'>
                        <div>
                            <h1 className='p-1 px-3'>CODIGO</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                {...registercontrolEmpresaData("nit", {})}
                                onChange={(e) => handleInputChange(e, "nit")}
                                value={watchEmpresaData("nit")}
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>TIPO DE SUSCRIPCION</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                {...registercontrolEmpresaData("name", {})}
                                onChange={(e) => handleInputKeys(e, "name")}
                                value={watchEmpresaData("name")}
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>DURACION</h1>
                            <Select
                                placeholder="Selecciona"
                                style={{ width: "10.3vw" }}
                                onChange={(value) => console.log(`Seleccionado: ${value}`)}
                                options={[
                                    { value: "1", label: "MENSUAL" },
                                    { value: "2", label: "SEMESTRAL" },
                                    { value: "3", label: "ANUAL" },
                                ]}
                            />
                        </div>

                        <div>
                            <h1 className='p-1 px-3'>PRECIO</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                {...registercontrolEmpresaData("precio", {})}
                                onChange={(e) => handleInputChange(e, "precio")}
                                value={watchEmpresaData("precio")}
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>DESCUENTO</h1>
                            <Switch defaultChecked onChange={onChange} />
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="text"
                                placeholder="Escribe el nombre"
                                style={{ width: "8.3vw", }}
                            />
                        </div>

                        <div>
                            <h1 className="pSelect p-1 px-3">ESTADO</h1>
                            <Select
                                placeholder="Selecciona"
                                style={{ width: "10.3vw" }}
                                onChange={(value) => console.log(`Seleccionado: ${value}`)}
                                options={[
                                    { value: "1", label: "ACTIVO" },
                                    { value: "2", label: "INACTIVO" }
                                ]}
                            />
                        </div>
                        <div>
                            <h1 className="pSelect p-1 px-3">FECHA DE CREACION</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="date"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className="pSelect p-1 px-3">FECHA FIN</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="date"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        

                        <div>
                            <h1 className="pSelect p-1 px-3">DESCRIPCION</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="email"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>


                        <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={() => setIsModalSuscripcion(true)}>
                            CREAR SUSCRIPCION
                        </button>

                    </div>

                </Modal>
                <Modal title="EDITAR SUSCRIPCION" width={"40vw"} open={isModalEditarSuscripcion} footer={null} onCancel={() => setIsModalEditarSuscripcion(false)}>
                    <div className='border-t-[0.2vw] justify-center border-solid border-gray-100 w-full flex flex-wrap pt-[1vw] gap-4'>
                        <div>
                            <h1 className='p-1 px-3'>CODIGO</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                {...registercontrolEmpresaData("nit", {})}
                                onChange={(e) => handleInputChange(e, "nit")}
                                value={watchEmpresaData("nit")}
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>TIPO DE SUSCRIPCION</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                {...registercontrolEmpresaData("name", {})}
                                onChange={(e) => handleInputKeys(e, "name")}
                                value={watchEmpresaData("name")}
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>DURACION</h1>
                            <Select
                                placeholder="Selecciona"
                                style={{ width: "10.3vw" }}
                                onChange={(value) => console.log(`Seleccionado: ${value}`)}
                                options={[
                                    { value: "1", label: "MENSUAL" },
                                    { value: "2", label: "SEMESTRAL" },
                                    { value: "3", label: "ANUAL" },
                                ]}
                            />
                        </div>

                        <div>
                            <h1 className='p-1 px-3'>PRECIO</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                {...registercontrolEmpresaData("precio", {})}
                                onChange={(e) => handleInputChange(e, "precio")}
                                value={watchEmpresaData("precio")}
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>DESCUENTO</h1>
                            <Switch defaultChecked onChange={onChange} />
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="text"
                                placeholder="Escribe el nombre"
                                style={{ width: "8.3vw", }}
                            />
                        </div>
                        
                        <div>
                            <h1 className="pSelect p-1 px-3">ESTADO</h1>
                            <Select
                                placeholder="Selecciona"
                                style={{ width: "10.3vw" }}
                                onChange={(value) => console.log(`Seleccionado: ${value}`)}
                                options={[
                                    { value: "1", label: "ACTIVO" },
                                    { value: "2", label: "INACTIVO" }
                                ]}
                            />
                        </div>
                        <div>
                            <h1 className="pSelect p-1 px-3">FECHA DE CREACION</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="date"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className="pSelect p-1 px-3">FECHA FIN</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="date"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        

                        <div>
                            <h1 className="pSelect p-1 px-3">DESCRIPCION</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="email"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>


                        <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]">
                            ACTUALIZAR SUSCRIPCION
                        </button>

                    </div>

                </Modal>
                <Modal title="EDITAR SUSCRIPCION EMPRESA" width={"35vw"} open={isModalEditarEmpresaSuscripcion} footer={null} onCancel={() => setIsModalEditarEmpresaSuscripcion(false)}>
                    <div className='border-t-[0.2vw] justify-center border-solid border-gray-100 w-full flex flex-wrap pt-[1vw] gap-4'>
                        <div>
                            <h1 className='p-1 px-3'>NIT</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                {...registercontrolEmpresaData("nit", {})}
                                onChange={(e) => handleInputChange(e, "nit")}
                                value={watchEmpresaData("nit")}
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                                disabled
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>EMPRESA</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                {...registercontrolEmpresaData("name", {})}
                                onChange={(e) => handleInputKeys(e, "name")}
                                value={watchEmpresaData("name")}
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                                disabled
                            />
                        </div>
                        <div>
                            <h1 className='p-1 px-3'>TIPO SUSCRIPCION</h1>
                            <Select
                                placeholder="Selecciona"
                                style={{ width: "10.3vw" }}
                                onChange={(value) => console.log(`Seleccionado: ${value}`)}
                                options={[
                                    { value: "1", label: "MENSUAL" },
                                    { value: "2", label: "SEMESTRAL" },
                                    { value: "3", label: "ANUAL" },
                                ]}
                            />
                        </div>

                        <div>
                            <h1 className="pSelect p-1 px-3">ESTADO</h1>
                            <Select
                                placeholder="Selecciona"
                                style={{ width: "10.3vw" }}
                                onChange={(value) => console.log(`Seleccionado: ${value}`)}
                                options={[
                                    { value: "1", label: "ACTIVO" },
                                    { value: "2", label: "INACTIVO" }
                                ]}
                            />
                        </div>
                        <div>
                            <h1 className="pSelect p-1 px-3">FECHA DE CREACION</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="date"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        <div>
                            <h1 className="pSelect p-1 px-3">FECHA FIN</h1>
                            <input
                                className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                                type="date"
                                placeholder="Escribe el nombre"
                                style={{ width: "10.3vw", }}
                            />
                        </div>
                        

                        <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]">
                            ACTUALIZAR
                        </button>

                    </div>

                </Modal>
            </div>
        </div>
    );
}