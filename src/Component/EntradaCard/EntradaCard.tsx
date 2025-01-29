import { Dropdown, MenuProps } from 'antd';
import op from '../../assets/img/option.svg';
import { useNavigate } from 'react-router-dom';
interface AcademiCardProps {
    img: string;
    Tmodule: string;
    fecha: string;
    estado: string;
    h: string;
    w: string;
    onClick: () => void;
}

export const EntradaCard: React.FC<AcademiCardProps> = ({ img, Tmodule, fecha, estado, h, w, onClick }) => {
    const navigate = useNavigate();
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" onClick={() => navigate('/Academic?showModal=true')}>
                    EDITAR PROGRAMA
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" onClick={() => navigate('/Academic_module?showModal=true')}>
                    EDITAR MODULO
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    ELIMINAR PROGRAMA
                </a>
            ),
        },
    ];
    return (
        <div className={`relative flex items-center justify-between bg-[white] rounded-lg shadow-lg gap-[0.5vw]`} style={{ width: w, height: h }}>
            <div className='flex items-center justify-between p-[1vw] gap-[0.5vw]'>
                <img className="w-[4vw] bg-radial" src={img} />
                <div>
                    <h1 className="text-[#000000] text-[1vw]">{Tmodule}</h1>
                    <h5 className="text-[#016FB4] text-[0.6vw]">{estado + " " + fecha}</h5>

                </div>
            </div>

            <div className='flex'>
                <button className="bg-[#00AEEF] text-white text-[1vw] font-semibold px-2 py-2 rounded-lg ml-2 hover:bg-[#BEEDFF] hover:border-2 hover:border-[#016FB4] hover:text-[#016FB4]" onClick={onClick}>Ver</button>
                <Dropdown menu={{ items }} placement="bottomRight" arrow>
                    <img className="w-[1vw] h-[1vw] cursor-pointer" src={op} />
                </Dropdown>
            </div>



        </div>


    );
};