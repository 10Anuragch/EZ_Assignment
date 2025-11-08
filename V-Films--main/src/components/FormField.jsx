export default function FormField({
  label,
  id,
  type = "text",
  register,
  error,
  placeholder,
  disabled,
  testId,
}) {
  const base =
    "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-[15px] text-slate-800 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm text-slate-700">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          rows={5}
          className={`${base} resize-y`}
          placeholder={placeholder}
          disabled={disabled}
          data-testid={testId}
          {...register(id)}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={base}
          placeholder={placeholder}
          disabled={disabled}
          data-testid={testId}
          {...register(id)}
        />
      )}
      {error && (
        <p className="text-sm text-red-600" data-testid={`${testId}-error`}>
          {error.message}
        </p>
      )}
    </div>
  );
}
