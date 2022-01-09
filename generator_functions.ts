// deno-lint-ignore no-explicit-any
export default function isGeneratorFunction(value: any) {
  if (typeof value !== "function") return false;

  return (
    (value.constructor && value.constructor.name === "GeneratorFunction") ||
    Object.prototype.toString.call(value) === "[object GeneratorFunction]"
  );
}
