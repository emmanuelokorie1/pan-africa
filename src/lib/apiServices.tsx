import { Axios } from "./Axios";

export const getAllPages = async () => {
    const { data } = await Axios.get(`api/pages/`);
    return data;
  };

