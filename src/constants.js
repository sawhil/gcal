// Default empty event object structure for initializing new events
export const EMPTY_EVENT = {
  id: null, // Unique identifier for the event
  title: "", // Event title/name
  description: "", // Event description/details
  start: "", // Event start date/time
  end: "", // Event end date/time
  allDay: false, // Whether event spans full day
  // Recurring Event Props Start - Not Implemented as of now
  startTime: "", // Start time for recurring events
  endTime: "", // End time for recurring events
  groupId: "", // Group ID for recurring event series
  daysOfWeek: [], // Days of week event recurs on
  startRecur: "", // Start date of recurring series
  endRecur: "", // End date of recurring series
  // Recurring Event Props End
  color: "", // Event color/category
};

// Array of available color options with names and hex values
export const COLORS = [
  { name: "Default", value: "#3788d8" },
  { name: "Red", value: "#990000" },
  { name: "Blue", value: "#000099" },
  { name: "Green", value: "#006600" },
  { name: "Purple", value: "#4B0082" },
  { name: "Brown", value: "#663300" },
];

// Mapping of color hex values to color names
export const COLOR_NAME_MAP = {
  "#3788d8": "Default",
  "#990000": "Red",
  "#000099": "Blue",
  "#006600": "Green",
  "#4B0082": "Purple",
  "#663300": "Brown",
};

// Mapping of color names to hex values
export const NAME_COLOR_MAP = {
  Default: "#3788d8",
  Red: "#990000",
  Blue: "#000099",
  Green: "#006600",
  Purple: "#4B0082",
  Brown: "#663300",
};

// Color selection options including 'All' for filtering
export const COLOR_SELECTION_OPTIONS = [
  { label: "All", value: "ALL" },
  { label: "Default", value: "#3788d8" },
  { label: "Red", value: "#990000" },
  { label: "Blue", value: "#000099" },
  { label: "Green", value: "#006600" },
  { label: "Purple", value: "#4B0082" },
  { label: "Brown", value: "#663300" },
];
