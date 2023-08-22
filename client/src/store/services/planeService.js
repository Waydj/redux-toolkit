import axios from "axios";

const getPlanes = async () => {
  const planes = await axios.get("http://localhost:8000/api/planes");
  return planes.data;
};

const getPlane = async (id) => {
  const plane = await axios.get(`http://localhost:8000/api/planes/${id}`);
  return plane.data;
};

const createPlane = async (planeData) => {
  const plane = await axios.post(`http://localhost:8000/api/planes`, planeData);
  return plane.data;
};

const planesService = {
  getPlanes,
  getPlane,
  createPlane,
};

export default planesService;
