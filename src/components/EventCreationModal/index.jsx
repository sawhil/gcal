/* eslint-disable react/prop-types */
import { Checkbox, DatePicker, Input, Modal } from "antd";
import moment from "moment";
import ColorSelect from "./components/ColorSelect";
import { ModalContainer } from "./StyledComponents";
import useEventCreationService from "../../hooks/useEventCreationService";

const EventCreationModal = ({ isModalOpen, setIsModalOpen, selectInfo }) => {
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
        <div className="row">
          <Checkbox checked={allDay} onChange={() => setAllDay(!allDay)}>
            All Day
          </Checkbox>
        </div>
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
        <div className="row">
          <span className="label">Color</span>
          <ColorSelect value={color} onChange={(color) => setColor(color)} />
        </div>
      </ModalContainer>
    </Modal>
  );
};

export default EventCreationModal;
