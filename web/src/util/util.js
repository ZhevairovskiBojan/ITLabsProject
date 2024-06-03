export const handleShow = (startDate, endDate, selectedCategory, events) => {
  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= startDate && eventDate <= endDate && event.category === selectedCategory;
  });

  return filteredEvents;
};
