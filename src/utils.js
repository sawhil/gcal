export const addEvent = (events, event) => {
  return [
    ...events,
    {
      id: event.id,
      title: event.title,
      description: event.description,
      start: event.startStr,
      end: event.endStr,
      allDay: event.allDay,
    },
  ];
};

export const updateEvent = (events, eventId, newEventData) => {
  const findIndex = events.findIndex((e) => e.id === eventId);
  if (findIndex === -1) return;
  const updatedEvents = [...events];
  const findEvent = events.find((e) => e.id === eventId);
  if (!findEvent) return;
  updatedEvents[findIndex] = { ...findEvent, ...newEventData };
  return updatedEvents;
};

export const dragEvent = (events, changeInfo) => {
  const { oldEvent, event } = changeInfo;
  const { id } = oldEvent;
  const findIndex = events.findIndex((e) => e.id === id);
  if (findIndex === -1) return;
  const updatedEvents = [...events];
  const findEvent = events.find((e) => e.id === id);
  if (!findEvent) return;
  updatedEvents[findIndex] = { ...findEvent, ...event };
  return updatedEvents;
};

export const deleteEvent = (events, deleteEventId) => {
  const findIndex = events.findIndex((e) => e.id === deleteEventId);
  if (findIndex === -1) return;
  const updatedEvents = [...events];
  updatedEvents.splice(findIndex, 1);
  return updatedEvents;
};

export const isValidEvent = (event) => {
  return true;
};
