// Required imports for event creation functionality
import { isValidEvent } from "../utils";
import { v4 as uuid } from "uuid";
import moment from "moment";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { addNewEventAtom } from "../store";

// Custom hook for handling calendar event creation
const useEventCreationService = (selectInfo, setIsModalOpen) => {
  // Jotai atom for adding new events
  const [, addNewEvent] = useAtom(addNewEventAtom);

  // State management for event properties
  const [title, setTitle] = useState("");
  const [allDay, setAllDay] = useState(selectInfo?.allDay || false);
  const [color, setColor] = useState(selectInfo?.color || "#ff0000");
  const [startTime, setStartTime] = useState(moment(selectInfo?.start) || "");
  const [endTime, setEndTime] = useState(moment(selectInfo?.end) || "");
  const [isCreateEventButtonDisabled, setIsCreateEventButtonDisabled] =
    useState(false);

  // Handler for event creation confirmation
  const onOk = () => {
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    // Construct new event object with all required properties
    const newEventObject = {
      ...selectInfo,
      id: uuid(),
      title: title,
      startStr: moment(startTime).format(),
      endStr: moment(endTime).format(),
      allDay,
      backgroundColor: color,
      borderColor: color,
    };

    // Add event if it passes validation
    if (isValidEvent(newEventObject)) {
      addNewEvent(newEventObject); // adds the new event to the events array
    }

    // Reset form and close modal
    setTitle("");
    setIsModalOpen(false);
  };

  // Effect to update event time and display properties when selection changes
  useEffect(() => {
    setStartTime(moment(selectInfo?.startStr) || "");
    setEndTime(moment(selectInfo?.endStr) || "");
    setAllDay(selectInfo?.allDay || false);
    setColor(selectInfo?.color || "#3788d8");
  }, [selectInfo]);

  // Effect to validate event data and control submit button state
  useEffect(() => {
    setIsCreateEventButtonDisabled(
      !isValidEvent({ title, start: startTime, end: endTime, allDay }),
    );
  }, [title, startTime, endTime, allDay]);

  // Return all necessary state and handlers
  return {
    title,
    setTitle,
    allDay,
    setAllDay,
    color,
    setColor,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    isCreateEventButtonDisabled,
    onOk,
  };
};

export default useEventCreationService;
