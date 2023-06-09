type InputProps = {
  value: string;
  onChange: (value: string) => void;
  hasError?: boolean;
};

const Input: React.FC<InputProps> = ({ value, onChange, hasError = false }) => {
  return (
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${
        hasError ? 'border-red-600 bg-red-200' : 'border-gray-700'
      } leading-tight focus:outline-none focus:shadow-outline`}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
