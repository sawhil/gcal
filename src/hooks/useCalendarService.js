/**
 * External dependencies and atom imports from store.
 */
import { useAtom } from "jotai";
import { useState } from "react";
import {
  dragEventAtom,
  selectedColorAtom,
  selectedEventAtom,
  getFilteredEventsAtom,
} from "../store";

/**
 * Custom hook to handle calendar functionality and state management.
 * @returns {Object} Calendar service methods and state
 */
const useCalendarService = () => {
  // Local state for controlling modals and selection info
  const [selectInfo, setSelectInfo] = useState(null);
  const [isEventCreationModalOpen, setIsEventCreationModalOpen] =
    useState(false);
  const [isEventPreviewModalOpen, setIsEventPreviewModalOpen] = useState(false);

  // Jotai atoms for global state management
  const [filteredEvents] = useAtom(getFilteredEventsAtom); // Events filtered by current criteria
  const [, dragEvent] = useAtom(dragEventAtom); // Handles drag & drop event state
  const [, setSelectedEventId] = useAtom(selectedEventAtom); // Currently selected event
  const [selectedColor, setSelectedColor] = useAtom(selectedColorAtom); // Selected event color

  /**
   * Handles when a date is selected on the calendar
   * @param {Object} selectInfo - Information about the selected date range
   */
  const handleDateSelect = (selectInfo) => {
    setSelectInfo(selectInfo);
    setIsEventCreationModalOpen(true);
  };

  /**
   * Handles when an existing event is clicked
   * @param {Object} selectInfo - Information about the clicked event
   */
  const handleEventClick = (selectInfo) => {
    const eventId = selectInfo.event.id;
    setSelectedEventId(eventId);
    setIsEventPreviewModalOpen(true);
  };

  return {
    // State variables and setters
    selectInfo,
    isEventCreationModalOpen,
    setIsEventCreationModalOpen,
    isEventPreviewModalOpen,
    setIsEventPreviewModalOpen,

    // Atom state values and setters
    filteredEvents,
    dragEvent,
    selectedColor,
    setSelectedColor,

    // Event handler methods
    handleDateSelect,
    handleEventClick,
  };
};

export default useCalendarService;
