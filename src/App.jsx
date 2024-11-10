import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useAtom } from "jotai";
import {
  eventsAtom,
  updateEventAtom,
  dragEventAtom,
  deleteEventAtom,
} from "./store";
import { useState } from "react";
import EventCreationModal from "./components/EventCreationModal";

function App() {
  const [selectInfo, setSelectInfo] = useState(null);
  const [events] = useAtom(eventsAtom);
  const [, updateEvent] = useAtom(updateEventAtom);
  const [, dragEvent] = useAtom(dragEventAtom);
  const [, deleteEvent] = useAtom(deleteEventAtom);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function handleDateSelect(selectInfo) {
    setSelectInfo(selectInfo);
    showModal();
  }

  const handleEventClick = (selectInfo) => {
    // let eventObj = selectInfo.view.calendar.getEventById(selectInfo.event.id);
    // eventObj.remove(); - Delete the event
    // eventObj.setProp("backgroundColor", "green"); // setProp will update the non date related properties
    const eventId = selectInfo.event.id;
    deleteEvent(eventId);
  };

  return (
    <div className="App">
      <EventCreationModal
        selectInfo={selectInfo}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
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
          events={events}
          eventChange={(changeInfo) => {
            console.log("uncaught eventChange", {
              oldColor: changeInfo.oldEvent.toPlainObject(),
              newColor: changeInfo.event.toPlainObject(),
            });
          }}
          // eventDrop={function(){}}     // Called when event dropped
          // eventResize={function(){}}   // Called when event resized
        />
      </div>
    </div>
  );
}

export default App;
