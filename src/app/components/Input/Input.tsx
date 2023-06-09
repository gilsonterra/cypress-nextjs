type InputProps = {
  value: string;
  id: string;
  onChange: (value: string) => void;
  hasError?: boolean;
};

const Input: React.FC<InputProps> = ({
  value,
  id,
  onChange,
  hasError = false
}) => {
  return (
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${
        hasError ? 'border-red-600 bg-red-200' : 'border-gray-700'
      } leading-tight focus:outline-none focus:shadow-outline`}
      type="text"
      value={value}
      id={id}
      data-cy={id}
      onChange={(e) => onChange(e.target.value)}
      aria-autocomplete="none"
      autoComplete="none"
    />
  );
};

export default Input;
