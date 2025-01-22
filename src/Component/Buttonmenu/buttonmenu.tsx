interface ButtonMenuProps {
    img: string;  // O el tipo que corresponda, si no es una URL de imagen.
    text: string;
    isCollapsed: boolean;
    onClick: () => void;
  }
  

  export const ButtonMenu: React.FC<ButtonMenuProps> = ({ img, text, isCollapsed, onClick }) => {
    return (
      <div className="flex items-center justify-between w-full h-[5vh] gap-[1vw] cursor-pointer" onClick={onClick}>
        <img className="w-[3vw]" src={img} alt={text} />
        {!isCollapsed && <p className="text-[1.5vw] text-left w-full text-[#B9B6B6]">{text}</p>}

      </div>
    );
  };
  