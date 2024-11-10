/* eslint-disable react/prop-types */
// Import required components and libraries
import { Checkbox, DatePicker, Input, Modal } from "antd";
import moment from "moment";
import ColorSelect from "./components/ColorSelect";
import { ModalContainer } from "./StyledComponents";
import useEventCreationService from "../../hooks/useEventCreationService";

/**
 * Modal component for creating calendar events
 * @param {boolean} isModalOpen - Controls modal visibility
 * @param {function} setIsModalOpen - Function to update modal visibility
 * @param {object} selectInfo - Information about the selected calendar slot
 */
const EventCreationModal = ({ isModalOpen, setIsModalOpen, selectInfo }) => {
  // Get event creation state and handlers from custom hook
  const {
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
  } = useEventCreationService(selectInfo, setIsModalOpen);

  return (
    <Modal
      title="Create Event"
      open={isModalOpen}
      onOk={onOk}
      onCancel={() => setIsModalOpen(false)}
      okText="Create event"
      cancelText="Close"
      okButtonProps={{ disabled: isCreateEventButtonDisabled }}
    >
      <ModalContainer>
        {/* Event name input */}
        <div className="row">
          <span className="label">Event Name</span>
          <Input
            placeholder="Event Title"
            value={title}
            allowClear
            onChange={(evt) => {
              setTitle(evt.target.value);
            }}
          />
        </div>

        {/* All day event toggle */}
        <div className="row">
          <Checkbox checked={allDay} onChange={() => setAllDay(!allDay)}>
            All Day
          </Checkbox>
        </div>

        {/* Date/time pickers shown only for non-all-day events */}
        {!allDay && (
          <>
            <div className="row">
              <span className="label">Event Start</span>
              <DatePicker
                format="YYYY-MM-DD HH:mm a"
                showTime
                onChange={(date) => {
                  if (date) {
                    setStartTime(moment(date.valueOf()).format());
                  }
                }}
              />
            </div>
            <div className="row">
              <span className="label">Event End</span>
              <DatePicker
                format="YYYY-MM-DD HH:mm a"
                showTime
                onChange={(date) => {
                  if (date) {
                    setEndTime(moment(date.valueOf()).format());
                  }
                }}
              />
            </div>
          </>
        )}

        {/* Event color selector */}
        <div className="row">
          <span className="label">Color</span>
          <ColorSelect value={color} onChange={(color) => setColor(color)} />
        </div>
      </ModalContainer>
    </Modal>
  );
};

export default EventCreationModal;
