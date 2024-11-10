// Data Structure of the event
// {
//   id: 881,                              // Unique identifier for the event
//   title: "Title of Event",              // Display name of the event
//   start: "2024-11-09T10:30:00",        // Start date and time
//   end: "2024-11-09T12:30:00",          // End date and time
//   allDay: false,                        // Whether event spans full day

//   Only For Recurring Events
//   startTime: "10:30:00",               // Start time for recurring events
//   endTime: "12:30:00",                 // End time for recurring events
//   groupId: "redEvents",                // Groups related recurring events
//   daysOfWeek: ["3", "5"],             // Days when event repeats (0=Sunday)
//   startRecur: "2024-11-09",           // Date to start recurring
//   endRecur: "2024-11-09",             // Date to end recurring

//   color: "red",                        // Event color for display
// },

import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { EMPTY_EVENT } from "../constants";
import { addEvent, updateEvent, deleteEvent, dragEvent } from "../utils";

// Main atom to store all calendar events with persistence
export const eventsAtom = atomWithStorage("GCAL_EVENTS", []);

// Atom to handle adding new events to the calendar
export const addNewEventAtom = atom(
  () => EMPTY_EVENT,
  (get, set, eventObject) => {
    set(eventsAtom, addEvent(get(eventsAtom), eventObject));
  },
);

// Atoms to track currently selected event and color filter
export const selectedEventAtom = atom(null);
export const selectedColorAtom = atom("ALL");

// Atom to retrieve a specific event by its ID
export const getEventAtom = atom((get) => {
  const events = get(eventsAtom);
  const selectedId = get(selectedEventAtom);
  return selectedId
    ? events.find((event) => event.id === selectedId) || null
    : null;
});

// Atom to filter events based on their background color
export const getFilteredEventsAtom = atom((get) => {
  const events = get(eventsAtom);
  const selectedColor = get(selectedColorAtom);
  if (selectedColor === "ALL") return events;
  return (
    events.filter((event) => event.backgroundColor === selectedColor) || []
  );
});

// Atom to handle updating existing events
// Used when editing events through the EventCreationModal - Not Implemented
export const updateEventAtom = atom(
  () => EMPTY_EVENT,
  (get, set, changeInfo) => {
    set(eventsAtom, updateEvent(get(eventsAtom), changeInfo));
  },
);

// Atom to handle drag-and-drop event updates
export const dragEventAtom = atom(
  () => EMPTY_EVENT,
  (get, set, changeInfo) => {
    set(eventsAtom, dragEvent(get(eventsAtom), changeInfo));
  },
);

// Atom to handle event deletion
export const deleteEventAtom = atom(
  () => EMPTY_EVENT,
  (get, set, deleteEventId) => {
    set(eventsAtom, deleteEvent(get(eventsAtom), deleteEventId));
  },
);
