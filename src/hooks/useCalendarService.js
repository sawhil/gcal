import { useAtom } from "jotai";
import { useState } from "react";
import {
  dragEventAtom,
  selectedColorAtom,
  selectedEventAtom,
  getFilteredEventsAtom,
} from "../store";

const useCalendarService = () => {
  // State management
  const [selectInfo, setSelectInfo] = useState(null);
  const [isEventCreationModalOpen, setIsEventCreationModalOpen] =
    useState(false);
  const [isEventPreviewModalOpen, setIsEventPreviewModalOpen] = useState(false);

  // Atoms
  const [filteredEvents] = useAtom(getFilteredEventsAtom);
  const [, dragEvent] = useAtom(dragEventAtom);
  const [, setSelectedEventId] = useAtom(selectedEventAtom);
  const [selectedColor, setSelectedColor] = useAtom(selectedColorAtom);

  // Event handlers
  const handleDateSelect = (selectInfo) => {
    setSelectInfo(selectInfo);
    setIsEventCreationModalOpen(true);
  };

  const handleEventClick = (selectInfo) => {
    const eventId = selectInfo.event.id;
    setSelectedEventId(eventId);
    setIsEventPreviewModalOpen(true);
  };

  return {
    // State
    selectInfo,
    isEventCreationModalOpen,
    setIsEventCreationModalOpen,
    isEventPreviewModalOpen,
    setIsEventPreviewModalOpen,

    // Atom values
    filteredEvents,
    dragEvent,
    selectedColor,
    setSelectedColor,

    // Handlers
    handleDateSelect,
    handleEventClick,
  };
};

export default useCalendarService;
