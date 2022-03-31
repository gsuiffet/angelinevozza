// https://github.com/react-hook-form/react-hook-form/issues/4099
// Todo use Submit type
type Submit<T extends Record<string, any>> = (
  data: import("react-hook-form").UnpackNestedValue<T>,
  target: HTMLFormElement,
) => any | Promise<any>;

interface BaseInputProps {
  label?: string;
  name: string;
}
