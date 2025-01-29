import { Navigate, useLocation, useNavigate } from "react-router-dom";
import botonizquierda from "../../../assets/img/buttonleft.svg";
import imagenejemplo from "../../../assets/img/image.svg";
import { AcademiCard } from "../../../Component/AcademiCard/AcademiCard";
import { GetProp, Input, message, Modal, Switch, Upload, UploadProps } from "antd";
import { useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { EntradaCard } from "../../../Component/EntradaCard/EntradaCard";

const { Search } = Input;
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export const Content_Module = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [istIsModalCrearEntrada, setIsModalCrearEntrada] = useState(false);
    const [isModalEditarEntrada, setIsModalEditarEntrada] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (new URLSearchParams(location.search).get('showModal') === 'true') {
            setIsModalEditarEntrada(true);
        }
    }, [location]);


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
    const beforeUpload = (file: FileType) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };

    const getBase64 = (img: FileType, callback: (url: string) => void) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result as string));
        reader.readAsDataURL(img);
    };

    const handleChange: UploadProps['onChange'] = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as FileType, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const [imageUrl, setImageUrl] = useState<string>();
    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

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
        <div className="users flex flex-col h-full w-full p-[1vw] gap-[1vw]" >
            <div className="border-b-2 border-solid border-[#016FB4] h-[2%] w-full">
                <h1 className="text-[#016FB4] font-Caladea text-[0.6vw]">CONTENIDO MODULO ACADEMICO</h1>
            </div>

            <div className="bg-[white] flex flex-col items-center rounded-lg shadow-lg h-full w-full pt-[2vw] overflow-auto">
                <div className="flex gap-[2vw] h-[15vw] w-[90%] p-[1vw] border-b-2 border-solid border-gray-500/10">
                    <img className="h-[3vw] w-[3vw] relative right-[3vw] cursor-pointer" src={botonizquierda} onClick={() => navigate('/Academic_module')} />
                    <img className="shadow-lg rounded-lg object-cover h-[12vw] w-[12vw]" src={imagenejemplo} />
                    <div className="flex flex-col h-[10vw] w-[50vw] gap-[1vw]">
                        <h1 className="text-[#016FB4] text-[1.5vw]">MODULO 1</h1>
                        <p className="text-[#00000] leading-7 text-justify text-[1vw]">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                            No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col h-full w-full p-[2vw] gap-[0.5vw]">
                    <button className="bg-[#00AEEF] self-end text-white text-[1vw] font-semibold px-3 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={() =>setIsModalEditarEntrada(true)}>CREAR ENTRADA</button>

                    <div className="flex flex-col items-center gap-[0.5vw] w-full">

                        <EntradaCard
                            img={imagenejemplo}
                            Tmodule={"SSHH"}
                            estado={"Borrador"}
                            fecha="12/12/2021"
                            w={"100%"}
                            h={"5vw"}
                            onClick={() => navigate('/Content_Module')}
                        />
                        <EntradaCard
                            img={imagenejemplo}
                            Tmodule={"SSHH"}
                            estado={"Borrador"}
                            fecha="12/12/2021"
                            w={"100%"}
                            h={"5vw"}
                            onClick={() => navigate('/Content_Module')}
                        />
                        <EntradaCard
                            img={imagenejemplo}
                            Tmodule={"SSHH"}
                            estado={"Borrador"}
                            fecha="12/12/2021"
                            w={"100%"}
                            h={"5vw"}
                            onClick={() => navigate('/Content_Module')}
                        />

                    </div>

                </div>
            </div>

            <Modal title="CREAREntrada" width={"26vw"} open={istIsModalCrearEntrada} footer={null} onCancel={() => setIsModalCrearEntrada(false)}>
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
                        <h1 className='p-1 px-3'>NOMBRE</h1>
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
                        <h1 className="pSelect p-1 px-3">ESTADO</h1>
                        <input
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                            type="email"
                            placeholder="Escribe el nombre"
                            style={{ width: "10.3vw", }}
                        />
                    </div>

                    <div>
                        <h1 className='p-1 px-3'>PRECIO</h1>
                        <Switch defaultChecked onChange={onChange} />
                        <input
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                            type="text"
                            placeholder="Escribe el nombre"
                            style={{ width: "8.5vw", }}
                        />
                    </div>

                    <div>
                        <h1 className='p-1 px-3'>FECHA DE PUBLICACION</h1>
                        <Switch defaultChecked onChange={onChange} />
                        <input
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-800"
                            type="date"
                            placeholder="Escribe el nombre"
                            style={{ width: "8.5vw", }}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center w-[10.5vw]">
                        <h1 className="pSelect p-1 px-3">ICONO DEL MODULO</h1>
                        <Upload
                            name="avatar"
                            listType="picture-circle"
                            className="avatar-uploader"
                            showUploadList={false}


                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '0.2vw' }} /> : uploadButton}
                        </Upload>

                    </div>

                    <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={() => setIsModalCrearEntrada(true)}>
                        CREAR MODULO
                    </button>
                </div>
            </Modal>
        </div>

    );
};