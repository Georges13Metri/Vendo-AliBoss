import React from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  rows?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  pattern,
  rows,
}) => (
  <div className={rows ? "col-span-1" : ""}>
    <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2"
        placeholder={placeholder}
        required={required}
        rows={rows}
      ></textarea>
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2"
        placeholder={placeholder}
        required={required}
        pattern={pattern}
      />
    )}
  </div>
);

export default FormField;
