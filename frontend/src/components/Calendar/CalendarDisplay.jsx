import React, { useState, useEffect } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomEvents from "./CustomEvents";
import CustomToolbar from "./CustomToolbar";
import { getAppointment, createAppointment, updateAppointment, deleteAppointment } from "../../services/AppointmentService";
import CalendarModal from "./CalendarModal";
import CalendarDetailModal from "./CalendarDetailModal";
import { reservationMockup } from "../../constants/resevationMockup";

const localizer = dayjsLocalizer(dayjs);
/*
  NOTE: CRUD completed for appointments
  TODO: Click to see each day's appointments or show more with popup
*/
export default function CalendarDisplay() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [detailsModalIsOpen, setDetailsModalIsOpen] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const response = await getAppointment();
    setAppointments(response.data.map(appointment => ({ ...appointment, start: new Date(appointment.date), end: new Date(appointment.date) })));
  };

  const handleSelectSlot = ({ start }) => {
    setSelectedAppointment({ date: start });
    setModalIsOpen(true);
  };

  const handleSelectAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setDetailsModalIsOpen(true);
  };

  const handleEditAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setDetailsModalIsOpen(false);
    setModalIsOpen(true);
  };

  const handleSaveAppointment = async (appointment) => {
    if (selectedAppointment.id) {
      await updateAppointment(selectedAppointment.id, appointment);
    } else {
      await createAppointment(appointment);
    }
    fetchAppointments();
    setModalIsOpen(false);
  };

  const handleDeleteAppointment = async (appointment) => {
    await deleteAppointment(appointment.id);
    fetchAppointments();
    setDetailsModalIsOpen(false);
  };
  return (
    <>
      {/* <button onClick={addEvent}>Add Event</button> */}
      <div className="p-6">
        <Calendar
          localizer={localizer}
          events={reservationMockup}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "75vh" }}
          components={{
            event: CustomEvents,
            toolbar: CustomToolbar,
          }}
          selectable
          // onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectAppointment}
        />
        <CalendarModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          onSave={handleSaveAppointment}
          appointment={selectedAppointment}
        />
        <CalendarDetailModal
          isOpen={detailsModalIsOpen}
          onRequestClose={() => setDetailsModalIsOpen(false)}
          appointment={selectedAppointment}
          onEdit={handleEditAppointment}
          onDelete={handleDeleteAppointment}
        />
      </div>
    </>
  );
}
