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
  selectedEventAtom,
} from "./store";
import { useState } from "react";
import { Layout } from "antd";
const { Content, Sider } = Layout;
import EventCreationModal from "./components/EventCreationModal";
import EventPreviewModal from "./components/EventPreviewModal";

function App() {
  const [selectInfo, setSelectInfo] = useState(null);
  const [events] = useAtom(eventsAtom);
  const [, updateEvent] = useAtom(updateEventAtom);
  const [, dragEvent] = useAtom(dragEventAtom);
  const [, deleteEvent] = useAtom(deleteEventAtom);
  const [, setSelectedEventId] = useAtom(selectedEventAtom);

  const [isEventCreationModalOpen, setIsEventCreationModalOpen] =
    useState(false);

  const [isEventPreviewModalOpen, setIsEventPreviewModalOpen] = useState(false);

  const showEventCreationModal = () => {
    setIsEventCreationModalOpen(true);
  };
  const handleEventCreationModalOk = () => {
    setIsEventCreationModalOpen(false);
  };
  const handleEventCreationModalCancel = () => {
    setIsEventCreationModalOpen(false);
  };

  function handleDateSelect(selectInfo) {
    setSelectInfo(selectInfo);
    showEventCreationModal();
  }

  const handleEventClick = (selectInfo) => {
    const eventId = selectInfo.event.id;
    setSelectedEventId(eventId);
    setIsEventPreviewModalOpen(true);
    // deleteEvent(eventId);
  };

  return (
    <Layout hasSider>
      <Sider>
        <div className="demo-logo-vertical" />
      </Sider>
      <Layout
        style={{
          marginInlineStart: 200,
        }}
      >
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div className="App">
            {isEventCreationModalOpen && (
              <EventCreationModal
                selectInfo={selectInfo}
                isModalOpen={isEventCreationModalOpen}
                handleOk={handleEventCreationModalOk}
                handleCancel={handleEventCreationModalCancel}
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
                events={events}
                // eventDrop={function(){}}     // Called when event dragged and dropped
                // eventResize={function(){}}   // Called when event resized
              />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
