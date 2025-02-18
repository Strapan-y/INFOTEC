import { useState } from "react";
import { QuestionCard } from "../../../../Component/QuestionCard/QuestionCard"

export const AddQuestion: React.FC = () => {
    const [Questions, setQuestions] = useState([""]);
    const AddQuestions = () => setQuestions([...Questions, ""]);
    
    return (
        <div className="flex flex-col w-[55vw] min-h-[30vw] pt-[2vw] gap-[2vw] px-[2vw]">
            <div className="overflow-auto h-[25vw] pr-[2vw]">
                {Questions.map((Question, index) => (
                    <QuestionCard

                    />
                ))}

            </div>

            <button
                className="bg-[#00AEEF] w-[9vw] h-[2vw] text-white text-[1vw] font-semibold px-2 py-1 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]"
                onClick={() => AddQuestions()}>

                + PREGUNTA
            </button>

        </div>
    )
}