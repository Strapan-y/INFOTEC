import { Dropdown, MenuProps } from 'antd';
import op from '../../assets/img/option.svg';
import { useLocation, useNavigate } from 'react-router-dom';
interface AcademiCardProps {
    img: string;
    Tmodule: string;
    docent: string;
    h: string;
    w: string;
    onClick: () => void;
}

export const AcademiCard: React.FC<AcademiCardProps> = ({ img, Tmodule, docent, h, w, onClick }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const items: MenuProps['items'] = [];
    if (location.pathname === '/Academic') {
        items.push(
            {
                key: '1',
                label: (
                    <button onClick={() => navigate('/Academic?showModal=true')}>
                        EDITAR PROGRAMA
                    </button>
                ),
            },
            {
                key: '2',
                label: (
                    <button onClick={() => navigate('/Academic?showModal=true')}>
                        ELIMINAR PROGRAMA
                    </button>
                ),
            }
        );
    } else {
        
        items.push(
            {
                key: '1',
                label: (
                    <button
                        onClick={() => navigate('/ContentModule')}>
                        EDITAR MODULO
                    </button>
                    
                ),
            },
            {
                key: '2',
                label: (
                    <button
                        onClick={() => navigate('/ContentModule')}>
                        ELIMINAR MODULO
                    </button>
                ),
            },
        );
    }
    return (
        <div className={`relative flex flex-col items-center justify-center bg-[white] rounded-lg shadow-lg gap-[0.5vw]`} style={{ width: w, height: h }}>
            <Dropdown menu={{ items }} placement="bottomRight" arrow>
                <img className="absolute top-2 right-2 w-[2vw] h-[2vw] cursor-pointer" src={op} alt='' />
            </Dropdown>
            <img className="w-[4vw] size-18 rounded-full bg-radial" src={img} alt='' />
            <h1 className="text-[#000000] text-[0.6vw]">{Tmodule}</h1>
            <h5 className="text-[#016FB4] text-[0.6vw]">{docent}</h5>
            <button className="bg-[#00AEEF] text-white text-[1vw] font-semibold px-2 py-1 h-[2vw] w-[5vw] rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={onClick}>Ver</button>
        </div>
    );
};