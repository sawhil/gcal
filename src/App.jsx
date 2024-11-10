import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import ColorFilterContainer from "./components/ColorFilterContainer";
import EventModals from "./components/EventModal";
import useCalendarService from "./hooks/useCalendarService";

function App() {
  const {
    selectInfo,
    filteredEvents,
    dragEvent,
    selectedColor,
    setSelectedColor,
    isEventCreationModalOpen,
    setIsEventCreationModalOpen,
    isEventPreviewModalOpen,
    setIsEventPreviewModalOpen,
    handleDateSelect,
    handleEventClick,
  } = useCalendarService();

  return (
    <div className="App">
      <ColorFilterContainer
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <EventModals
        isEventCreationModalOpen={isEventCreationModalOpen}
        setIsEventCreationModalOpen={setIsEventCreationModalOpen}
        isEventPreviewModalOpen={isEventPreviewModalOpen}
        setIsEventPreviewModalOpen={setIsEventPreviewModalOpen}
        selectInfo={selectInfo}
      />
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
