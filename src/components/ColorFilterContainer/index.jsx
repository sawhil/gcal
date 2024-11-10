// Import Select component from Ant Design library
import { Select } from "antd";
// Import color options constant
import { COLOR_SELECTION_OPTIONS } from "../../constants";

/**
 * Component that renders a color filter dropdown
 * @param {string} selectedColor - Currently selected color value
 * @param {function} setSelectedColor - Function to update selected color
 */
const ColorFilterContainer = ({ selectedColor, setSelectedColor }) => {
  return (
    <>
      <label>Select Event Color to filter them out : </label>
      <Select
        showSearch
        value={selectedColor}
        optionFilterProp="label"
        onChange={(color) => setSelectedColor(color)}
        options={COLOR_SELECTION_OPTIONS}
      />
    </>
  );
};

export default ColorFilterContainer;
