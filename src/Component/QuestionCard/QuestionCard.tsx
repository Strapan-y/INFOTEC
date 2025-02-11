import { Select } from "antd";

interface QuestionCardProps {}

export const QuestionCard: React.FC<QuestionCardProps> = () => {
  return (
    <div>
      <h1 className="text-[#000000] text-[0.6vw]">AGREGAR PREGUNTA</h1>
      <div className="flex items-center justify-between bg-white h-[15vw] p-[1vw] w-full rounded-lg shadow-lg gap-[1vw]">
        {/* Sección de Pregunta y Nota */}
        <div className="flex flex-col justify-center p-[1vw] gap-[0.5vw]  w-[18vw] h-[10.5vw]">
          <div>
            <h1 className="text-[#000000] text-[0.6vw]">PREGUNTA</h1>
            <textarea 
              className="w-[16vw] h-[4vw] resize-none border-2 border-solid border-[#F3F3F3]" 
              placeholder="Escribe la pregunta"
            />
          </div>
          <div>
            <h1 className="text-[#000000] text-[0.6vw]">NOTA</h1>
            <input
              className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 p-2 text-gray-800"
              type="text"
              placeholder="Escribe la nota"
              style={{ width: "10.3vw" }}
            />
          </div>
        </div>

        {/* Sección de Tipo de Pregunta */}
        <div className="flex flex-col justify-start w-[18vw] h-[10.5vw] p-[1vw] gap-[0.5vw]">
          <div>
            <h1 className="text-[#016FB4] text-[0.6vw]">TIPO DE PREGUNTA</h1>
            <Select
              placeholder="Selecciona"
              className="border-[0.1vw] h-[2vw] border-solid border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-800"
              style={{ width: '10.3vw', minHeight: '2vw' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
