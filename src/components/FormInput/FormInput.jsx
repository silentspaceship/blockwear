import { FormInputLabel, Group, Input } from "./FormInput.style.jsx";

export default function FormInput({ label, ...props }) {
  return (
    <Group>
      <Input {...props} />
      {label && (
        <FormInputLabel shrink={props.value.length}>{label}</FormInputLabel>
      )}
    </Group>
  );
}
