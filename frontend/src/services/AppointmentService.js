import axios from 'axios';

const API_URL = 'http://localhost:8000/api/workshop_admin/getReservations';

const getAppointment = () => {
  return axios.get(API_URL);
};

const createAppointment = (appointment) => {
  return axios.post(API_URL, appointment);
};

const updateAppointment = (id, appointment) => {
  return axios.put(`${API_URL}/${id}`, appointment);
};

const deleteAppointment = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export { getAppointment, createAppointment, updateAppointment, deleteAppointment };
