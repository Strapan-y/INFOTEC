import { Dropdown, MenuProps } from 'antd';
import op from '../../assets/img/option.svg';
interface AcademiCardProps {
    img: string;
    Tmodule: string;
    docent: string;
    h: string;
    w: string;
    onClick: () => void;
}

export const AcademiCard: React.FC<AcademiCardProps> = ({ img, Tmodule, docent, h, w, onClick }) => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Editar contenido
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Editar Modulo
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    Eliminar
                </a>
            ),
        },
    ];
    return (
        <div className={`relative flex flex-col items-center justify-center bg-[white] rounded-lg shadow-lg gap-[0.5vw]`} style={{ width: w, height: h }}>
            <Dropdown menu={{ items }} placement="bottomRight" arrow>
                <img className="absolute top-2 right-2 w-[2vw] h-[2vw] cursor-pointer" src={op} />
            </Dropdown>
            <img className="w-[4vw] size-18 rounded-full bg-radial" src={img} />
            <h1 className="text-[#000000] text-[0.6vw]">{Tmodule}</h1>
            <h5 className="text-[#016FB4] text-[0.6vw]">{docent}</h5>
            <button className="bg-[#00AEEF] text-white font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={onClick}>Ver</button>
        </div>







    );
};