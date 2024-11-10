/* eslint-disable react/prop-types */

// Import modal components
import EventCreationModal from "../EventCreationModal";
import EventPreviewModal from "../EventPreviewModal";

/**
 * Component that manages the display of event-related modals
 * @param {boolean} isEventCreationModalOpen - Controls visibility of event creation modal
 * @param {function} setIsEventCreationModalOpen - Sets visibility of event creation modal
 * @param {boolean} isEventPreviewModalOpen - Controls visibility of event preview modal
 * @param {function} setIsEventPreviewModalOpen - Sets visibility of event preview modal
 * @param {object} selectInfo - Information about the selected calendar slot
 */
const EventModals = ({
  isEventCreationModalOpen,
  setIsEventCreationModalOpen,
  isEventPreviewModalOpen,
  setIsEventPreviewModalOpen,
  selectInfo,
}) => {
  return (
    <>
      {/* Render event creation modal when open */}
      {isEventCreationModalOpen && (
        <EventCreationModal
          selectInfo={selectInfo}
          isModalOpen={isEventCreationModalOpen}
          setIsModalOpen={setIsEventCreationModalOpen}
        />
      )}
      {/* Render event preview modal when open */}
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
