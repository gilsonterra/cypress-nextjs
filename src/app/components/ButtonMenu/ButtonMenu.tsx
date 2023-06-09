type ButtonMenuProps = {
  category: string;
  selected?: boolean;
  onClick: () => void;
};

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  category,
  onClick,
  selected = false
}) => {
  return (
    <button
      className={`py-2 px-4 text-white rounded-sm hover:bg-pink-900 cursor-pointer ${
        selected ? 'bg-pink-950 font-bold' : 'bg-pink-500'
      }`}
      key={category}
      onClick={onClick}
    >
      {category?.replace('-', ' ').toUpperCase()}
    </button>
  );
};

export default ButtonMenu;
