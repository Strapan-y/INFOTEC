import { useLocation, useNavigate } from "react-router-dom";
import botonizquierda from "../../../assets/img/buttonleft.svg";
import imagenejemplo from "../../../assets/img/image.svg";
import { GetProp, message, Modal, Switch, Upload, UploadFile, UploadProps } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { EntradaCard } from "../../../Component/EntradaCard/EntradaCard";
import Quill from "quill";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import edit from "../../../assets/img/edit.svg";
import { PlusOutlined } from "@ant-design/icons";


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
Quill.register("modules/imageResize", ImageResize);

export const GContentModule = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [istIsModalCrearEntrada, setIsModalCrearEntrada] = useState(false);
    const [isModalEditarEntrada, setIsModalEditarEntrada] = useState(false);
    const [isModalEditarModulo, setIsModalEditarModulo] = useState(false);

    // Estados para las imágenes
    const [crearImageUrl, setCrearImageUrl] = useState<string>();
    const [crearFileList, setCrearFileList] = useState<UploadFile[]>([]);
    const [editarImageUrl, setEditarImageUrl] = useState<string>();
    const [editarFileList, setEditarFileList] = useState<UploadFile[]>([]);
    const [content, setContent] = useState<string>('');
    

    useEffect(() => {
        if (new URLSearchParams(location.search).get('showModal') === 'true') {
            setIsModalEditarEntrada(true);
        }
    }, [location]);

    const handleSave = () => {
        console.log('Contenido guardado:', content);
        setIsModalCrearEntrada(false);
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // Tamaños de texto
            [{ 'font': [] }], // Tipografías
            [{ 'size': ['small', false, 'large', 'huge'] }], // Tamaños alternativos
            ['bold', 'italic', 'underline', 'strike'], // Formato básico
            [{ 'color': [] }, { 'background': [] }], // Color de texto y fondo
            [{ 'align': ['', 'center', 'right', 'justify'] }], // Alineación
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image', 'video'],
            ['clean']
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

    // Handlers para Crear Modulos
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

    // Handlers para Editar Modulos
    const handleChangeEditar: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        const latestFile = newFileList.slice(-1);
        setEditarFileList(latestFile);

        if (latestFile.length > 0) {
            const file = latestFile[0].originFileObj as File;
            const reader = new FileReader();
            reader.onload = (e) => setEditarImageUrl(e.target?.result as string);
            reader.readAsDataURL(file);
        } else {
            setEditarImageUrl(undefined);
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
        <div className="users flex flex-col h-full w-full p-[2vw] gap-[0.5vw]" >
            <div className="border-b-2 border-solid border-[#016FB4] h-[2%] w-full">
                <h1 className="text-[#016FB4] font-Caladea text-[0.6vw]">GESTIONAR ENTRADAS MODULO</h1>
            </div>

            <div className="bg-[white] flex flex-col items-center rounded-lg shadow-lg h-full w-full pt-[1.5vw] overflow-auto">
                <div className="flex gap-[2vw] h-[15vw] w-[90%] p-[1vw] border-b-2 border-solid border-gray-500/10">
                    <img className="h-[3vw] w-[3vw] relative right-[3vw] cursor-pointer" alt="" src={botonizquierda} onClick={() => navigate('/AcademicModule')} />
                    <img className="shadow-lg rounded-lg object-cover h-[12vw] w-[12vw]" alt="" src={imagenejemplo} />
                    <div className="flex flex-col h-[10vw] w-full gap-[2vw]">
                        <h1 className="text-[#016FB4] text-[1.5vw]">MODULO 1</h1>
                        <div className="flex w-full items-center justify-between">
                            <p className="text-[#00000] leading-7 text-justify text-[1vw] flex-1">
                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                                cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
                                galería de textos y los mezcló de tal manera que logró hacer un libro de textos specimen.
                                No sólo sobrevivió 500 años, sino que también ingresó como texto de relleno en documentos
                                electrónicos, quedando esencialmente igual al original.
                            </p>
                            <div className="flex justify-center pl-[3vw]">
                                <img className="w-[1.5vw]  cursor-pointer" alt="" src={edit} onClick={() => setIsModalEditarModulo(true)} />

                            </div>



                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full w-full p-[1vw] gap-[0.5vw]">
                    <button className="bg-[#00AEEF] self-end text-white text-[1vw] font-semibold px-3 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={() => setIsModalCrearEntrada(true)}>CREAR ENTRADA</button>

                    <div className="flex flex-col items-center gap-[0.5vw] w-full">

                        <EntradaCard
                            img={imagenejemplo}
                            Tmodule={"SSHH"}
                            estado={"Borrador"}
                            fecha="12/12/2021"
                            w={"100%"}
                            h={"5vw"}
                            onClick={() => navigate("/ContentEntrada")}
                        />
                        <EntradaCard
                            img={imagenejemplo}
                            Tmodule={"SSHH"}
                            estado={"Borrador"}
                            fecha="12/12/2021"
                            w={"100%"}
                            h={"5vw"}
                            onClick={() => navigate('/ContentEntrada')}
                        />
                        <EntradaCard
                            img={imagenejemplo}
                            Tmodule={"SSHH"}
                            estado={"Borrador"}
                            fecha="12/12/2021"
                            w={"100%"}
                            h={"5vw"}
                            onClick={() => navigate('/ContentEntrada')}
                        />
                        

                    </div>

                </div>
            </div>

            <Modal title="CREAR ENTRADA"
                width={"50vw"}
                open={istIsModalCrearEntrada}
                footer={null}
                onCancel={() => setIsModalCrearEntrada(false)}>

                <div className="flex flex-wrap border-t-[0.2vw] h-[35vw] justify-center border-solid border-gray-100 w-full pt-[1vw] gap-4 ">
                    <div>
                        <h1 className="p-1 px-3">CODIGO</h1>
                        <input
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                            placeholder="Escribe el nombre"
                            style={{ width: "10.3vw" }}
                        />
                    </div>
                    <div>
                        <h1 className="p-1 px-3">TITULO</h1>
                        <input
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                            placeholder="Escribe el nombre"
                            style={{ width: "10.3vw" }}
                        />
                    </div>

                    <div>
                        <h1 className="pSelect p-1 px-3">ESTADO</h1>
                        <input
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                            type="email"
                            placeholder="Escribe el nombre"
                            style={{ width: "10.3vw" }}
                        />
                    </div>

                    <div>
                        <h1 className="p-1 px-3">FECHA DE PUBLICACION</h1>
                        <Switch defaultChecked />
                        <input
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-800"
                            type="date"
                            placeholder="Escribe el nombre"
                            style={{ width: "8.5vw" }}
                        />
                    </div>

                    <div className="w-full rounded-xl p-1  relative gap-[2vw]">
                        <h1 className="text-lg font-bold mb-2">CONTENIDO</h1>
                        <div className="h-[400px]">
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
                    <button
                        className="bg-[#00AEEF] text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={handleSave}>
                        GUARDAR ENTRADA
                    </button>

                </div>
            </Modal>

            <Modal title="EDITAR ENTRADA"
                width={"50vw"}
                open={isModalEditarEntrada}
                footer={null}
                onCancel={() => setIsModalEditarEntrada(false)}>

                <div className="flex flex-wrap border-t-[0.2vw] h-[28vw] justify-center border-solid border-gray-100 w-full pt-[1vw] gap-4 ">
                    <div>
                        <h1 className="p-1 px-3">CODIGO</h1>
                        <input
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                            placeholder="Escribe el nombre"
                            style={{ width: "10.3vw" }}
                        />
                    </div>
                    <div>
                        <h1 className="p-1 px-3">TITULO</h1>
                        <input
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                            placeholder="Escribe el nombre"
                            style={{ width: "10.3vw" }}
                        />
                    </div>

                    <div>
                        <h1 className="pSelect p-1 px-3">ESTADO</h1>
                        <input
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                            type="email"
                            placeholder="Escribe el nombre"
                            style={{ width: "10.3vw" }}
                        />
                    </div>

                    <div>
                        <h1 className="p-1 px-3">FECHA DE PUBLICACION</h1>
                        <Switch defaultChecked />
                        <input
                            className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-800"
                            type="date"
                            placeholder="Escribe el nombre"
                            style={{ width: "8.5vw" }}
                        />
                    </div>

                    <div className="w-full rounded-xl p-1  relative gap-[2vw]">
                        <h1 className="text-lg font-bold mb-2">CONTENIDO</h1>
                        <div className="h-[400px]">
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
                    <button
                        className="bg-[#00AEEF] text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={handleSave}>
                        ACTUALIZAR ENTRADA
                    </button>

                </div>
            </Modal>

            <Modal title="EDITAR MODULO" width={"26vw"} open={isModalEditarModulo} footer={null} onCancel={() => setIsModalEditarModulo(false)}>
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
                            fileList={crearFileList}
                            beforeUpload={beforeUpload}
                            onChange={handleChangeCrear}
                            maxCount={1}

                        >
                            {/* Solo muestra el botón si no hay archivos subidos */}
                            {crearFileList.length === 0 && uploadButton}
                        </Upload>

                    </div>

                    <div className="w-[25vw] h-[15vw] rounded-xl p-1  relative ">
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

                    <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={() => setIsModalEditarModulo(true)}>
                        ACTUALIZAR MODULO
                    </button>
                </div>
            </Modal>

        </div>

    );
};