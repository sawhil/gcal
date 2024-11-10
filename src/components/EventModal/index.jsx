/* eslint-disable react/prop-types */

import EventCreationModal from "../EventCreationModal";
import EventPreviewModal from "../EventPreviewModal";

const EventModals = ({
  isEventCreationModalOpen,
  setIsEventCreationModalOpen,
  isEventPreviewModalOpen,
  setIsEventPreviewModalOpen,
  selectInfo,
}) => {
  return (
    <>
      {isEventCreationModalOpen && (
        <EventCreationModal
          selectInfo={selectInfo}
          isModalOpen={isEventCreationModalOpen}
          setIsModalOpen={setIsEventCreationModalOpen}
        />
      )}
      {isEventPreviewModalOpen && (
        <EventPreviewModal
          isModalOpen={isEventPreviewModalOpen}
          setIsModalOpen={setIsEventPreviewModalOpen}
        />
      )}
    </>
  );
};

export default EventModals;
