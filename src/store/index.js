// Data Structure of the event
// {
//   id: 881,
//   title: "Title of Event",
//   start: "2024-11-09T10:30:00",
//   end: "2024-11-09T12:30:00",
//   allDay: false,

//   Only For Recurring Events
//   startTime: "10:30:00",
//   endTime: "12:30:00",
//   groupId: "redEvents", // recurrent events in this group move together
//   daysOfWeek: ["3", "5"],
//   startRecur: "2024-11-09",
//   endRecur: "2024-11-09",

//   color: "red",
// },

import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { EMPTY_EVENT } from "../constants";
import { addEvent, updateEvent, deleteEvent } from "../utils";

export const eventsAtom = atomWithStorage("GCAL_EVENTS", []);

export const addNewEventAtom = atom(
  () => EMPTY_EVENT,
  (get, set, eventObject) => {
    set(eventsAtom, addEvent(get(eventsAtom), eventObject));
  },
);

export const updateEventAtom = atom(
  () => EMPTY_EVENT,
  (get, set, changeInfo) => {
    set(eventsAtom, updateEvent(get(eventsAtom), changeInfo));
  },
);

export const dragEventAtom = atom(
  () => EMPTY_EVENT,
  (get, set, changeInfo) => {
    set(eventsAtom, updateEvent(get(eventsAtom), changeInfo));
  },
);

export const deleteEventAtom = atom(
  () => EMPTY_EVENT,
  (get, set, deleteEventId) => {
    set(eventsAtom, deleteEvent(get(eventsAtom), deleteEventId));
  },
);
