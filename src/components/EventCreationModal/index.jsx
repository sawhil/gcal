/* eslint-disable react/prop-types */
import { Checkbox, DatePicker, Input, Modal } from "antd";
import { useAtom } from "jotai";
import moment from "moment";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { addNewEventAtom } from "../../store";
import { isValidEvent } from "../../utils";
import ColorSelect from "./components/ColorSelect";
import { ModalContainer } from "./StyledComponents";

const EventCreationModal = ({ isModalOpen, setIsModalOpen, selectInfo }) => {
  const [, addNewEvent] = useAtom(addNewEventAtom);
  const [title, setTitle] = useState("");
  const [allDay, setAllDay] = useState(selectInfo?.allDay || false);
  const [color, setColor] = useState(selectInfo?.color || "#ff0000");
  const [startTime, setStartTime] = useState(moment(selectInfo?.start) || "");
  const [endTime, setEndTime] = useState(moment(selectInfo?.end) || "");
  const [isCreateEventButtonDisabled, setIsCreateEventButtonDisabled] =
    useState(false);

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
      backgroundColor: color,
      borderColor: color,
    };
    if (isValidEvent(newEventObject)) {
      addNewEvent(newEventObject); // adds the new event to the events array
    }
    setTitle("");
    setIsModalOpen(false);
  };

  useEffect(() => {
    setStartTime(moment(selectInfo?.startStr) || "");
    setEndTime(moment(selectInfo?.endStr) || "");
    setAllDay(selectInfo?.allDay || false);
    setColor(selectInfo?.color || "#3788d8");
  }, [selectInfo]);

  useEffect(() => {
    setIsCreateEventButtonDisabled(
      !isValidEvent({ title, start: startTime, end: endTime, allDay }),
    );
  }, [title, startTime, endTime, allDay]);

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
