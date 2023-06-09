type ErrorHintProps = {
  text?: string;
};

const ErrorHint: React.FC<ErrorHintProps> = ({ text }) => {
  return (
    <label className="block text-red-700 text-sm font-medium mb-2 py-2">
      {text}
    </label>
  );
};

export default ErrorHint;
