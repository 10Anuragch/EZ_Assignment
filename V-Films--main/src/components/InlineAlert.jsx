export default function InlineAlert({ type = "success", children, testId }) {
  const isSuccess = type === "success";
  return (
    <div
      className={`mt-3 flex items-center gap-2 rounded-md border px-3 py-2 text-sm ${
        isSuccess
          ? "border-green-200 bg-green-50 text-green-800"
          : "border-red-200 bg-red-50 text-red-800"
      }`}
      role="alert"
      data-testid={testId}
    >
      <span>{isSuccess ? "✓" : "✕"}</span>
      <span>{children}</span>
    </div>
  );
}
