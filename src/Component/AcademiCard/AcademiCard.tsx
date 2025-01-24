interface AcademiCardProps {
    img: string;
    Tmodule: string;
    docent: string;
    onClick: () => void;
}

export const AcademiCard: React.FC<AcademiCardProps> = ({ img, Tmodule, docent, onClick }) => {
    return (
        <div className=" flex flex-col items-center justify-center bg-[white] rounded-lg shadow-lg h-[40%] w-[23%] gap-[0.5vw]" onClick={onClick}>
            <img className="w-[3vw]" src={img} />
            <h1 className="text-[#000000] text-[0.6vw]">{Tmodule}</h1>
            <h5 className="text-[#016FB4] text-[0.6vw]">DOCENTE: {docent}</h5>
            <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]">Ver</button>
        </div>







    );
};