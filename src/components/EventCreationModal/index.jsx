/* eslint-disable react/prop-types */
import { v4 as uuid } from "uuid";
import { isValidEvent } from "../../utils";
import { useAtom } from "jotai";
import { addNewEventAtom } from "../../store";
import { Modal, Input } from "antd";
import { useState } from "react";

const EventCreationModal = ({
  isModalOpen,
  selectInfo,
  handleOk,
  handleCancel,
}) => {
  const [, setAddNewEvent] = useAtom(addNewEventAtom);
  const [title, setTitle] = useState("");

  const onOk = () => {
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
    const newEventObject = { ...selectInfo, id: uuid(), title: title };
    if (isValidEvent(newEventObject)) {
      setAddNewEvent(newEventObject); // adds the new event to the events array
    }
    setTitle("");
    handleOk();
  };
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={onOk}
      onCancel={handleCancel}
    >
      <Input
        placeholder="Event Title"
        value={title}
        allowClear
        onChange={(evt) => {
          setTitle(evt.target.value);
        }}
      />
    </Modal>
  );
};

export default EventCreationModal;
