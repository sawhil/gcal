import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useAtom } from "jotai";
import { useState } from "react";
import EventCreationModal from "./components/EventCreationModal";
import EventPreviewModal from "./components/EventPreviewModal";
import {
  dragEventAtom,
  eventsAtom,
  selectedColorAtom,
  selectedEventAtom,
  getFilteredEventsAtom,
} from "./store";
import { COLOR_SELECTION_OPTIONS } from "./constants";
import { Select } from "antd";

function App() {
  const [selectInfo, setSelectInfo] = useState(null);
  const [events] = useAtom(eventsAtom);
  const [filteredEvents] = useAtom(getFilteredEventsAtom);
  const [, dragEvent] = useAtom(dragEventAtom);
  const [, setSelectedEventId] = useAtom(selectedEventAtom);
  const [selectedColor, setSelectedColor] = useAtom(selectedColorAtom);
  const [isEventCreationModalOpen, setIsEventCreationModalOpen] =
    useState(false);

  const [isEventPreviewModalOpen, setIsEventPreviewModalOpen] = useState(false);

  function handleDateSelect(selectInfo) {
    setSelectInfo(selectInfo);
    setIsEventCreationModalOpen(true);
  }

  const handleEventClick = (selectInfo) => {
    const eventId = selectInfo.event.id;
    setSelectedEventId(eventId);
    setIsEventPreviewModalOpen(true);
  };

  return (
    <div className="App">
      <label>Select Event Color to filter them out : </label>
      <Select
        showSearch
        value={selectedColor}
        optionFilterProp="label"
        onChange={(color) => setSelectedColor(color)}
        options={COLOR_SELECTION_OPTIONS}
      />
      {isEventCreationModalOpen && (
        <EventCreationModal
          selectInfo={selectInfo}
          isModalOpen={isEventCreationModalOpen}
          setIsModalOpen={setIsEventCreationModalOpen}
        />
      )}
      {isEventPreviewModalOpen && (
        <EventPreviewModal
          isModalOpen={isEventPreviewModalOpen}
          setIsModalOpen={setIsEventPreviewModalOpen}
        />
      )}
      <div className="full-calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          select={handleDateSelect}
          eventClick={handleEventClick}
          editable
          selectable
          dayMaxEvents={true}
          events={filteredEvents}
          eventDrop={dragEvent} // Called when event dragged and dropped
          eventResize={dragEvent} // Called when event resized
        />
      </div>
    </div>
  );
}

export default App;
