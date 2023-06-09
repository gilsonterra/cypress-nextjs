type LabelProps = {
  text: string;
};

const Label: React.FC<LabelProps> = ({ text }) => {
  return (
    <label className="block text-black text-sm font-bold mb-1">{text}</label>
  );
};

export default Label;
