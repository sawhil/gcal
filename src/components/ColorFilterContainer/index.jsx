import { Select } from "antd";
import { COLOR_SELECTION_OPTIONS } from "../../constants";
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
