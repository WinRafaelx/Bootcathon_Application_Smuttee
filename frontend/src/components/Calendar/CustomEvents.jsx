const CustomEvent = ({ event }) => (
  <div className="p-2 text-white rounded">
    <strong>{event.title}</strong>
    {event.desc && `: ${event.desc}`}
  </div>
);

export default CustomEvent;
