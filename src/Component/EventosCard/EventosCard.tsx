interface EventCardProps {
    NameTitle: string;
    hora: string;
    onClick: () => void;
}

export const EventosCard: React.FC<EventCardProps> = ({ NameTitle, hora, onClick }) => {
    return (
        <div className="flex flex-col p-[0.2vw]">
            <div className="bg-[#EFFBFF] rounded-lg w-full p-[1vw] flex justify-between  ">
                <h1 className="text-[#016FB4]">{NameTitle}</h1>
                <h1 className="text-[#016FB4]">{hora}</h1>
            </div>
        </div>



    );
};