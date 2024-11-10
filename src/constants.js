export const EMPTY_EVENT = {
  id: null,
  title: "",
  description: "",
  start: "",
  end: "",
  allDay: false,
  // Recurring Event Props Start
  startTime: "",
  endTime: "",
  groupId: "",
  daysOfWeek: [],
  startRecur: "",
  endRecur: "",
  // Recurring Event Props End
  color: "",
};

export const COLORS = [
  { name: "Default", value: "#3788d8" },
  { name: "Red", value: "#990000" },
  { name: "Blue", value: "#000099" },
  { name: "Green", value: "#006600" },
  { name: "Purple", value: "#4B0082" },
  { name: "Brown", value: "#663300" },
];
export const COLOR_NAME_MAP = {
  "#3788d8": "Default",
  "#990000": "Red",
  "#000099": "Blue",
  "#006600": "Green",
  "#4B0082": "Purple",
  "#663300": "Brown",
};

export const NAME_COLOR_MAP = {
  Default: "#3788d8",
  Red: "#990000",
  Blue: "#000099",
  Green: "#006600",
  Purple: "#4B0082",
  Brown: "#663300",
};

export const COLOR_SELECTION_OPTIONS = [
  { label: "All", value: "ALL" },
  { label: "Default", value: "#3788d8" },
  { label: "Red", value: "#990000" },
  { label: "Blue", value: "#000099" },
  { label: "Green", value: "#006600" },
  { label: "Purple", value: "#4B0082" },
  { label: "Brown", value: "#663300" },
];
