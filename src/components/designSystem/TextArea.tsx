const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (
  props,
) => (
  <textarea
    {...props}
    className="block w-full rounded-md border p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  />
);

export default Textarea;
