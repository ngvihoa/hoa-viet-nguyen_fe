import api from "configs/axios.config";

const getTokenList = () => {
  return api.get(`/prices`);
};

export { getTokenList };
