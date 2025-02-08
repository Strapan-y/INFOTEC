import { Button, GetProp, Input, Modal, Select, Switch, Upload, UploadFile, UploadProps, message } from "antd";
import filled from "../../../assets/img/filled.svg";
import mass from "../../../assets/img/Mas.svg";
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { AcademiCard } from "../../../Component/AcademiCard/AcademiCard";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill, { Quill } from "react-quill";

import 'react-quill/dist/quill.snow.css';



const { Search } = Input;
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];


export const Academic = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Estados para modales
    const [isModalPrograma, setIsModalPrograma] = useState(false);
    const [isModalEditarPrograma, setIsModalEditarPrograma] = useState(false);

    // Estados para las imágenes
    const [crearImageUrl, setCrearImageUrl] = useState<string>();
    const [crearFileList, setCrearFileList] = useState<UploadFile[]>([]);
   
    const [content, setContent] = useState<string>('');

    

    useEffect(() => {
        if (new URLSearchParams(location.search).get('showModal') === 'true') {
            setIsModalEditarPrograma(true);
        }
    }, [location]);

    const beforeUpload = (file: FileType) => {
        const isImage = file.type.startsWith('image/');
        if (!isImage) {
            message.error('Solo puedes subir archivos de imagen!');
            return Upload.LIST_IGNORE;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('La imagen debe ser menor a 2MB!');
            return Upload.LIST_IGNORE;
        }
        return false;
    };

    // Handlers para Crear Programa
    const handleChangeCrear: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        const latestFile = newFileList.slice(-1);
        setCrearFileList(latestFile);

        if (latestFile.length > 0) {
            const file = latestFile[0].originFileObj as File;
            const reader = new FileReader();
            reader.onload = (e) => setCrearImageUrl(e.target?.result as string);
            reader.readAsDataURL(file);
        } else {
            setCrearImageUrl(undefined);
        }
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Subir imagen</div>
        </div>
    );

    const handleContentChange = (value: string) => {
        setContent(value);
    };


    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // Tamaños de texto
            [{ 'font': [] }], // Tipografías 
            ['bold', 'italic', 'underline', 'strike'], // Asegurar que están en su propio array
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }], // Color de texto y fondo
            [{ 'align': ['', 'center', 'right', 'justify'] }], // Alineación
            ['blockquote', 'code-block'],
            ['link', 'image', 'video'],
        ],
        imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize', 'Toolbar']
        }
    };

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'code-block',
        'list',
        'bullet',
        'link',
        'image',
        'video',
        'color',
        'background',
        'align'
    ];


    // Excepciones del teclado
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
    } = useForm({
        defaultValues: {
            nit: '',
            name: '',
        }
    });
    return (
        <div className="users flex flex-col h-full w-full gap-[0.5vw] p-[2vw]">
            <div className="border-b-2 border-solid border-[#016FB4] h-[2%] w-full">
                <h1 className="text-[#016FB4] font-Caladea text-[0.6vw]">GESTIONAR MODULO ACADEMICO</h1>
            </div>
            <div className="bg-[white] rounded-lg shadow-lg flex flex-col items-center justify-start h-full p-[2vw] w-full">
                <div className="flex items-start justify-between w-full ">
                    <Search className="custon-search w-[20vw] h-[3vw]" placeholder="Buscar..." enterButton />
                </div>
                <div className="flex flex-wrap items-start justify-start h-[30vw] p-[2vw] gap-[2vw] w-full bg-opacity-35 overflow-auto">
                    <div className=" flex flex-col items-center justify-center bg-[white] rounded-lg shadow-lg h-[40%] w-[23%] gap-[0.5vw] border-2 border-dashed border-[#C1C1C1] cursor-pointer" onClick={() => setIsModalPrograma(true)}>
                        <img className="w-[3vw]" src={mass} alt=""/>
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
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-800"
                            style={{ width: '10.3vw', minHeight: '2vw', }}
                        />
                    </div>
                    <div>
                        <h1 className='p-1 px-3'>COMPARTIR CON</h1>
                        <Select
                            placeholder="selecciona"
                            style={{ width: '10.3vw', minHeight: '2vw', }}
                        />
                    </div>
                    <div>
                        <h1 className='p-1 px-3'>CATEGORIA</h1>
                        <Select
                            placeholder="selecciona"
                            style={{ width: '10.3vw', minHeight: '2vw', }}
                        />
                    </div>
                    <div className="selectDiv">
                        <h1 className="pSelect p-1 px-3">ESTADO <label style={{ color: '#DD2025', marginLeft: '0.2vw' }}>*</label></h1>
                        <Select
                            placeholder="selecciona"
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-800"
                            style={{ width: '10.3vw', minHeight: '2vw', }}
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
                            style={{ width: "8.5vw", }}
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="pSelect p-1 px-3">ICONO DEL PROGRAMA</h1>
                        <div className="relative">
                            <Upload
                                name="avatar"
                                listType="picture-circle"
                                className="avatar-uploader"
                                fileList={crearFileList}
                                beforeUpload={beforeUpload}
                                onChange={handleChangeCrear}
                                maxCount={1}

                            >
                                {/* Solo muestra el botón si no hay archivos subidos */}
                                {crearFileList.length === 0 && uploadButton}
                            </Upload>
                        </div>
                    </div>

                    <div className="w-[25vw] h-[13vw] rounded-xl p-1  relative ">
                        <h1 className="pSelect">CONTENIDO</h1>
                        <div className="h-[200px]">
                            <ReactQuill
                                value={content}
                                onChange={handleContentChange}
                                modules={modules}
                                formats={formats}
                                className="bg-white rounded-lg h-full border border-gray-300"
                                theme="snow"
                            />
                        </div>

                    </div>
                </div>
                <div className="w-full flex justify-center mt-4">
                    <button className="bg-[#00AEEF] text-white font-semibold px-3 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={() => setIsModalPrograma(true)}>
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
                            className="avatar-uploader"
                            showUploadList={false}
                            beforeUpload={beforeUpload}
                            onChange={handleChangeCrear}
                        >
                            <Button
                                shape="circle"
                                className="w-[7vw] h-[7vw] flex flex-col items-center justify-center border-dashed border-2 border-[#00AEEF]"
                            >
                                {uploadButton}
                            </Button>
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
