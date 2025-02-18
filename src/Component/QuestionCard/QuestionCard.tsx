import { Select } from "antd";
import { ResponseOptions } from "./ResponseOptions";
import { useState } from "react";


export const QuestionCard: React.FC = () => {
    const [questionType, setQuestionType] = useState<string>("multipleChoice");
    return (

        <div className="flex items-start justify-between mb-[2vw] bg-white min-h-[15vw] p-[1vw] w-full rounded-lg shadow-lg gap-[1vw] border-2 border-solid border-[#F3F3F3]">
            {/* Sección de Pregunta y Nota */}
            <div className="flex flex-col gap-[1vw]  w-[18vw] h-[10.5vw]">
                <div>
                    <h1 className="text-[#016FB4] text-[0.6vw] pb-[0.3vw]">PREGUNTA</h1>
                    <textarea
                        className="bg-[white] w-full h-[5vw] p-[1vw] rounded-lg resize-none border-[0.1vw] border-solid border-gray-300"
                        placeholder=" Escribe la pregunta"
                    />
                </div>
                <div>
                    <h1 className="text-[#000000] text-[0.6vw] pb-[0.3vw]">NOTA</h1>
                    <input
                        className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                        type="text"
                        placeholder="Escribe la nota"
                        style={{ width: "10.3vw" }}
                    />
                </div>
            </div>

            {/* Sección de Tipo de Pregunta */}
            <div className="flex flex-col justify-start px-[1vw] w-[25vw] min-h-[11vw] gap-[0.5vw]">
                <div>
                    <h1 className="text-[#016FB4] text-[0.6vw]">TIPO DE PREGUNTA</h1>
                    <Select
                        className="w-full mt-1"
                        value={questionType}
                        onChange={(value) => setQuestionType(value)}
                        style={{ width: "10.3vw" }}
                        options={[
                            { value: "multipleChoice", label: "Múltiple Opción" },
                            { value: "trueFalse", label: "Verdadero/Falso" },
                            { value: "shortAnswer", label: "Respuesta Corta" },
                            { value: "UniqueOption", label: "Unica opcion" },
                        ]}
                    />
                </div>
                <ResponseOptions questionType={questionType} />
            </div>
        </div>

    );
};
