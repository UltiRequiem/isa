export default function isGeneratorFunction(value: unknown) {
  if (typeof value !== "function") return false;

  return (
    (value.constructor && value.constructor.name === "GeneratorFunction") ||
    Object.prototype.toString.call(value) === "[object GeneratorFunction]"
  );
}
