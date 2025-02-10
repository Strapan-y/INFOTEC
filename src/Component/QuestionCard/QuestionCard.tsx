import { Dropdown, MenuProps } from 'antd';
import op from '../../assets/img/option.svg';
import { useNavigate } from 'react-router-dom';
interface QuestionCardProps {
}

export const QuestionCard: React.FC<QuestionCardProps> = () => {
    const navigate = useNavigate();
    const items: MenuProps['items'] = [];

    return (
        <div className={`flex items-center justify-center bg-[white] h-[10vw] p-[1vw] w-full rounded-lg shadow-lg gap-[1vw]`}>
            <div className="flex flex-col justify-center p-[1vw] gap-[0.5vw] bg-[yellow]">
                <div>
                    <h1 className="text-[#000000] text-[0.6vw]">PREGUNTA</h1>
                    <textarea className=" w-[20vw] h-[3vw] border-2 border-solid border-[#F3F3F3]" name="" id="" />
                </div>
                
                <div>
                    <h1 className="text-[#000000] text-[0.6vw]">NOTA</h1>
                    <input
                        className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
                        type="text"
                        placeholder="Escribe el nombre"
                        style={{ width: "10.3vw", }}
                    />
                </div>
            </div>
            <div>
                <h1 className="text-[#016FB4] text-[0.6vw]">TIPO DE PREGUNTA</h1>
            </div>




        </div>
    );
};