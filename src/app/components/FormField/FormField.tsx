type FormFieldProps = {
  children: JSX.Element | JSX.Element[];
};

const FormField: React.FC<FormFieldProps> = ({ children }) => {
  return <div className="flex flex-col">{children}</div>;
};

export default FormField;
