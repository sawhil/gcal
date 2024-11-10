// Import required components and constants
import { Select } from "antd";
import { COLORS } from "../../../constants";

// ColorSelect component that renders a dropdown color picker
// Props: value (selected color), onChange (handler for color selection changes)
const ColorSelect = ({ value, onChange }) => {
  // Helper function to format each color option with a preview swatch and label
  const colorOption = (color) => ({
    label: (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* Color swatch preview */}
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "100%",
            backgroundColor: color.value,
            border: "1px solid #d9d9d9",
          }}
        />
        {/* Color name */}
        <span>{color.name}</span>
      </div>
    ),
    value: color.value,
  });

  // Render the Select component with formatted color options
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
