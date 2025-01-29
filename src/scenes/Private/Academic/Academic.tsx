import { GetProp, Input, Modal, Select, Switch, Upload, UploadProps, message } from "antd";
import filled from "../../../assets/img/filled.svg";
import mass from "../../../assets/img/Mas.svg";
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { AcademiCard } from "../../../Component/AcademiCard/AcademiCard";
import { useLocation, useNavigate } from "react-router-dom";


const { Search } = Input;
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];


export const Academic = () => {
    const location = useLocation();
    const [isModalPrograma, setIsModalPrograma] = useState(false);
    const [isModalEditarPrograma, setIsModalEditarPrograma] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (new URLSearchParams(location.search).get('showModal') === 'true') {
            setIsModalEditarPrograma(true);
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
        <div className="users flex flex-col h-full w-full gap-[1vw] p-[1vw]">
            <div className="border-b-2 border-solid border-[#016FB4] h-[2%] w-full">
                <h1 className="text-[#016FB4] font-Caladea text-[0.6vw]">GESTIONAR MODULO ACADEMICO</h1>
            </div>

            <div className="flex flex-col items-center justify-start h-full p-[2vw] w-full">
                <div className="flex items-start justify-between w-full ">
                    <Search className="custon-search w-[30vw] h-[3vw]" placeholder="Buscar..." enterButton />

                </div>


                <div className="flex flex-wrap items-start justify-start h-[30vw] w-[50vw] p-[2vw] gap-[2vw] w-full bg-opacity-35 overflow-auto">
                    <div className=" flex flex-col items-center justify-center bg-[white] rounded-lg shadow-lg h-[40%] w-[23%] gap-[0.5vw] border-2 border-dashed border-[#C1C1C1] cursor-pointer" onClick={() => setIsModalPrograma(true)}>
                        <img className="w-[3vw]" src={mass} />
                        <h1 className="text-[#00AEEF] text-[0.6vw]">Crear Nuevo Programa</h1>
                    </div>

                    <AcademiCard
                        img={filled}
                        Tmodule={"SSHH"}
                        docent={"DOCENTE:Juan Perez"}
                        w={"23%"}
                        h={"40%"}
                        onClick={() => navigate('/Academic_module')}
                    />


                </div>
            </div>


            <Modal title="CREAR PROGRAMA" width={"40vw"} open={isModalPrograma} footer={null} onCancel={() => setIsModalPrograma(false)}>
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
                    <div className="selectDiv">
                        <h1 className="pSelect p-1 px-3">DOCENTE <label style={{ color: '#DD2025', marginLeft: '0.2vw' }}>*</label></h1>
                        <Select
                            placeholder="selecciona"
                            style={{ width: "10.3vw", }}
                        />


                    </div>
                    <div>
                        <h1 className='p-1 px-3'>COMPARTIR CON</h1>
                        <Select
                            placeholder="selecciona"
                            style={{ width: "10.3vw", }}
                        />
                    </div>
                    <div>
                        <h1 className='p-1 px-3'>CATEGORIA</h1>
                        <Select
                            placeholder="selecciona"
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
                            style={{ width: "9vw", }}
                        />
                    </div>

                    <div>
                        <h1 className='p-1 px-3'>FECHA DE CREACION</h1>
                        <input
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                            type="date"
                            placeholder="Escribe el nombre"
                            style={{ width: "10.3vw", }}
                        />
                    </div>

                    <div>
                        <h1 className='p-1 px-3'>FECHA DE PUBLICACION</h1>
                        <Switch defaultChecked onChange={onChange} />
                        <input
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                            type="date"
                            placeholder="Escribe el nombre"
                            style={{ width: "10.3vw", }}
                        />
                    </div>
                    <div>
                        <h1 className="pSelect p-1 px-3">ICONO DEL PROGRAMA</h1>
                        <Upload
                            name="avatar"
                            listType="picture-circle"
                            className="avatar-uploader"
                            showUploadList={false}
                            style={{ width: "7vw", }}

                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '0.2vw' }} /> : uploadButton}
                        </Upload>

                    </div>

                    <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={() => setIsModalPrograma(true)}>
                        CREAR PROGRAMA
                    </button>
                </div>
            </Modal>

            <Modal title="EDITAR PROGRAMA" width={"40vw"} open={isModalEditarPrograma} footer={null} onCancel={() => setIsModalEditarPrograma(false)}>
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
                    <div className="selectDiv">
                        <h1 className="pSelect p-1 px-3">DOCENTE <label style={{ color: '#DD2025', marginLeft: '0.2vw' }}>*</label></h1>
                        <Select
                            placeholder="selecciona"
                            style={{ width: "10.3vw", }}
                        />


                    </div>
                    <div>
                        <h1 className='p-1 px-3'>COMPARTIR CON</h1>
                        <Select
                            placeholder="selecciona"
                            style={{ width: "10.3vw", }}
                        />
                    </div>
                    <div>
                        <h1 className='p-1 px-3'>CATEGORIA</h1>
                        <Select
                            placeholder="selecciona"
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
                            style={{ width: "9vw", }}
                        />
                    </div>

                    <div>
                        <h1 className='p-1 px-3'>FECHA DE CREACION</h1>
                        <input
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                            type="date"
                            placeholder="Escribe el nombre"
                            style={{ width: "10.3vw", }}
                        />
                    </div>

                    <div>
                        <h1 className='p-1 px-3'>FECHA DE PUBLICACION</h1>
                        <Switch defaultChecked onChange={onChange} />
                        <input
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                            type="date"
                            placeholder="Escribe el nombre"
                            style={{ width: "10.3vw", }}
                        />
                    </div>
                    <div>
                        <h1 className="pSelect p-1 px-3">ICONO DEL PROGRAMA</h1>
                        <Upload
                            name="avatar"
                            listType="picture-circle"
                            className="avatar-uploader"
                            showUploadList={false}
                            style={{ width: "7vw", }}

                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '0.2vw' }} /> : uploadButton}
                        </Upload>

                    </div>

                    <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={() => setIsModalEditarPrograma(true)}>
                        ACTUALIZAR
                    </button>
                </div>
            </Modal>


        </div>

    );
};
