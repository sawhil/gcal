/* eslint-disable react/prop-types */
import { v4 as uuid } from "uuid";
import { isValidEvent } from "../../utils";
import { useAtom } from "jotai";
import { addNewEventAtom } from "../../store";
import { Modal, Input, DatePicker, Checkbox } from "antd";
import { useState } from "react";
import { ModalContainer } from "./StyledComponents";
import moment from "moment";
import { useEffect } from "react";

const EventCreationModal = ({
  isModalOpen,
  selectInfo,
  handleOk,
  handleCancel,
}) => {
  const [, setAddNewEvent] = useAtom(addNewEventAtom);
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState(
    moment(selectInfo?.startStr) || "",
  );
  const [endTime, setEndTime] = useState(moment(selectInfo?.endStr) || "");
  const [allDay, setAllDay] = useState(selectInfo?.allDay || false);

  const onOk = () => {
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
    const newEventObject = {
      ...selectInfo,
      id: uuid(),
      title: title,
      startStr: moment(startTime).format(),
      endStr: moment(endTime).format(),
      allDay,
    };
    if (isValidEvent(newEventObject)) {
      setAddNewEvent(newEventObject); // adds the new event to the events array
    }
    setTitle("");
    handleOk();
  };

  useEffect(() => {
    setStartTime(moment(selectInfo?.startStr) || "");
    setEndTime(moment(selectInfo?.endStr) || "");
    setAllDay(selectInfo?.allDay || false);
  }, [selectInfo]);
  return (
    <Modal
      title="Create Event"
      open={isModalOpen}
      onOk={onOk}
      onCancel={handleCancel}
      okText="Create event"
      cancelText="Close"
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
      </ModalContainer>
    </Modal>
  );
};

export default EventCreationModal;
