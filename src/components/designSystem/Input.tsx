// Input component
const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => (
  <input
    {...props}
    className="block w-full rounded-md border p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  />
);

export default Input;
