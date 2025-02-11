import { Select, Switch } from "antd"
import { useState } from "react";
import ReactQuill, { Quill } from "react-quill"

interface CreateExamProps {
    setCrearExamen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateExamStep: React.FC<CreateExamProps> = ({ setCrearExamen }) => {
    const [content, setContent] = useState<string>('');

    const handleContentChange = (value: string) => {
        setContent(value);
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': ['', 'center', 'right', 'justify'] }],
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


    return (
        <div className="border-t-[0.2vw] flex justify-center items-center border-solid border-gray-100 w-full h-full pt-[1vw] gap-4 flex-wrap">

            <div>
                <h1 className='p-1 px-3'>TITULO</h1>
                <input
                    className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                    type="text"
                    placeholder="Escribe el nombre"
                    style={{ width: "10.3vw", }}
                />
            </div>
            <div>
                <h1 className='p-1 px-3'>FECHA</h1>
                <input
                    className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                    type="date"
                    placeholder="Escribe el nombre"
                    style={{ width: "10.3vw", }}
                />
            </div>
            <div>
                <h1 className='p-1 px-3'>HORA DE INICIO</h1>
                <input
                    className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                    type="time"
                    placeholder="Escribe el nombre"
                    style={{ width: "10.3vw", }}
                />
            </div>
            <div>
                <h1 className='p-1 px-3'>HORA LIMITE</h1>
                <input
                    className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                    type="time"
                    placeholder="Escribe el nombre"
                    style={{ width: "10.3vw", }}
                />
            </div>
            <div>
                <h1 className='p-1 px-3'>PORCENTAJE MINIMO</h1>
                <input
                    className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                    type="text"
                    placeholder="Escribe el nombre"
                    style={{ width: "10.3vw", }}
                />
            </div>
            <div>
                <h1 className='p-1 px-3'>CONTRASEÑA</h1>
                <div className="flex items-center gap-[0.2vw]">
                    <Switch className='w-[2vw]' defaultChecked />
                    <input
                        className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                        type="text"
                        placeholder="Escribe el nombre"
                        style={{ width: "8.3vw", }}
                    />

                </div>

            </div>
            <div>
                <h1 className='p-1 px-3'>MOSTRAR RESULTADO</h1>
                <Select
                    placeholder="selecciona"
                    className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-800"
                    style={{ width: '10.3vw', minHeight: '2vw', }}
                />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='p-1 px-3'>PREGUNTAS ALEATORIAS</h1>
                <Switch className='w-[2vw]' defaultChecked />
            </div>

            <div className="w-full rounded-xl p-1 h-[17vw]  relative gap-[2vw]">
                <h1 className="text-lg font-bold mb-2">CONTENIDO</h1>
                <div className="h-[10vw]">
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
    )
}

