/* eslint-disable react/prop-types */
// Import required components and libraries
import { Modal, Checkbox } from "antd";
import { useAtom, useAtomValue } from "jotai";
import moment from "moment";
import { deleteEventAtom, getEventAtom } from "../../store";
import { ModalContainer } from "./StyledComponents";
import { COLOR_NAME_MAP } from "../../constants";

/**
 * Modal component for previewing event details
 * @param {boolean} isModalOpen - Controls modal visibility
 * @param {function} setIsModalOpen - Function to update modal visibility
 */
const EventPreviewModal = ({ isModalOpen, setIsModalOpen }) => {
  // Get delete event function and current event data from store
  const [, deleteEvent] = useAtom(deleteEventAtom);
  const event = useAtomValue(getEventAtom);
  const { id: eventId, title, allDay, start, end, backgroundColor } = event;
  return (
    <Modal
      title="Preview Event"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      onOk={() => {
        deleteEvent(eventId);
        setIsModalOpen(false);
      }}
      okText="Delete event"
      cancelText="Close"
    >
      <ModalContainer>
        {/* Event title */}
        <div className="row">
          <span className="label">Event Name</span>
          {title}
        </div>

        {/* All day event checkbox */}
        <div className="row">
          <Checkbox disabled checked={allDay}>
            All Day
          </Checkbox>
        </div>

        {/* Show start/end times only for non-all-day events */}
        {!allDay && (
          <>
            <div className="row">
              <span className="label">Event Start</span>
              {moment(start).format("hh:mm a MMMM Do YYYY")}
            </div>
            <div className="row">
              <span className="label">Event End</span>
              {moment(end).format("hh:mm a MMMM Do YYYY")}
            </div>
          </>
        )}
        {/* Event color indicator and label */}
        <div className="row">
          <span className="label">Color</span>
          <span
            style={{
              display: "inline-block",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: backgroundColor,
              marginLeft: "8px",
            }}
          />
          {COLOR_NAME_MAP[backgroundColor]}
        </div>
      </ModalContainer>
    </Modal>
  );
};

export default EventPreviewModal;
