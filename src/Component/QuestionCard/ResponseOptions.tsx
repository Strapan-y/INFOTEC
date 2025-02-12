import { Input, Checkbox, Radio } from "antd";
import { useState } from "react";

interface ResponseOptionsProps {
    questionType: string;
}

export const ResponseOptions: React.FC<ResponseOptionsProps> = ({ questionType }) => {
    const [options, setOptions] = useState([""]);
    const [trueFalseText, setTrueFalseText] = useState({ true: "", false: "" });
    const addOption = () => setOptions([...options, ""]);

    const updateOption = (index: number, value: string) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    switch (questionType) {
        case "multipleChoice":
            return (
                <div className="bg-[#EFFAFF] p-4 rounded-lg shadow-md w-full">
                    {options.map((option, index) => (
                        <div key={index} className="flex items-center gap-[0.5vw] py-2">
                            <Checkbox />
                            <Input
                                className="w-full text-gray-500 h-[1.3vw] placeholder-gray-400 focus:ring-0 border-0 border-b border-gray-300"
                                placeholder="+ Añadir"
                                style={{ borderRadius: "0" }}
                                value={option}
                                onChange={(e) => updateOption(index, e.target.value)}
                            />
                        </div>
                    ))}
                    <div className="flex justify-end mt-2">
                        <button
                            onClick={addOption}
                            className="bg-[#00AEEF] text-white font-semibold px-4 py-2 rounded-full text-sm hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4] transition"
                        >
                            + Añadir
                        </button>
                    </div>
                </div>
            );

        case "trueFalse":
            return (
                <div className="bg-[#EFFAFF] p-4 rounded-lg shadow-md w-full">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Radio value="true">Verdadero</Radio>

                        </div>
                        <div className="flex items-center gap-2">
                            <Radio value="false">Falso</Radio>
                        </div>
                    </div>
                </div>
            );

        case "shortAnswer":
            return (
                <div className="bg-[#EFFAFF] p-4 rounded-lg shadow-md w-full">
                    <textarea
                        className="bg-[white] w-full h-[5vw] p-[1vw] rounded-lg resize-none"
                        placeholder=" Escribe la pregunta"
                    />
                </div>
            );

        case "UniqueOption":
            return (
                <div className="bg-[#EFFAFF] p-4 rounded-lg shadow-md w-full">
                    {options.map((option, index) => (
                        <div key={index} className="flex items-center gap-[0.5vw] py-2">
                            <Radio />
                            <Input
                                className="w-full text-gray-500 h-[1.3vw] placeholder-gray-400 focus:ring-0 border-0 border-b border-gray-300"
                                placeholder="+ Añadir"
                                style={{ borderRadius: "0" }}
                                value={option}
                                onChange={(e) => updateOption(index, e.target.value)}
                            />
                        </div>
                    ))}
                    <div className="flex justify-end mt-2">
                        <button
                            onClick={addOption}
                            className="bg-[#00AEEF] text-white font-semibold px-4 py-2 rounded-full text-sm hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4] transition"
                        >
                            + Añadir
                        </button>
                    </div>
                </div>
            );

        default:
            return <div className="text-gray-500">Selecciona un tipo de pregunta</div>;
    }
};
