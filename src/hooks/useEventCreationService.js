import { isValidEvent } from "../utils";
import { v4 as uuid } from "uuid";
import moment from "moment";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { addNewEventAtom } from "../store";
const useEventCreationService = (selectInfo, setIsModalOpen) => {
  const [, addNewEvent] = useAtom(addNewEventAtom);
  const [title, setTitle] = useState("");
  const [allDay, setAllDay] = useState(selectInfo?.allDay || false);
  const [color, setColor] = useState(selectInfo?.color || "#ff0000");
  const [startTime, setStartTime] = useState(moment(selectInfo?.start) || "");
  const [endTime, setEndTime] = useState(moment(selectInfo?.end) || "");
  const [isCreateEventButtonDisabled, setIsCreateEventButtonDisabled] =
    useState(false);

  const onOk = () => {
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
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
    if (isValidEvent(newEventObject)) {
      addNewEvent(newEventObject); // adds the new event to the events array
    }
    setTitle("");
    setIsModalOpen(false);
  };

  useEffect(() => {
    setStartTime(moment(selectInfo?.startStr) || "");
    setEndTime(moment(selectInfo?.endStr) || "");
    setAllDay(selectInfo?.allDay || false);
    setColor(selectInfo?.color || "#3788d8");
  }, [selectInfo]);

  useEffect(() => {
    setIsCreateEventButtonDisabled(
      !isValidEvent({ title, start: startTime, end: endTime, allDay }),
    );
  }, [title, startTime, endTime, allDay]);

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
