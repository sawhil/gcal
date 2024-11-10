/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { ModalContainer } from "./StyledComponents";
import { useAtom, useAtomValue } from "jotai";
import { deleteEventAtom, getEventAtom } from "../../store";
const EventPreviewModal = ({ isModalOpen, setIsModalOpen }) => {
  const [, deleteEvent] = useAtom(deleteEventAtom);
  const event = useAtomValue(getEventAtom);
  const {
    id: eventId,
    title,
    allDay,
    startStr,
    endStr,
    backgroundColor,
  } = event;
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
        <div className="row">
          <span className="label">Event Name</span>
          {title}
        </div>

        {!allDay && (
          <>
            <div className="row">
              <span className="label">Event Start</span>
              {startStr}
            </div>
            <div className="row">
              <span className="label">Event End</span>
              {endStr}
            </div>
          </>
        )}
        <div className="row">
          <span className="label">Color</span>
          {backgroundColor}
        </div>
      </ModalContainer>
    </Modal>
  );
};

export default EventPreviewModal;
