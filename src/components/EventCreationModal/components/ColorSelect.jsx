import { Select } from "antd";
import { COLORS } from "../../../constants";

const ColorSelect = ({ value, onChange }) => {
  const colorOption = (color) => ({
    label: (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "4px",
            backgroundColor: color.value,
            border: "1px solid #d9d9d9",
          }}
        />
        <span>{color.name}</span>
      </div>
    ),
    value: color.value,
  });

  return (
    <Select
      value={value}
      onChange={onChange}
      style={{ width: 200 }}
      placeholder="Select a color"
      options={COLORS.map(colorOption)}
      optionLabelProp="label"
      optionRender={(option) => option.label}
    />
  );
};

export default ColorSelect;
