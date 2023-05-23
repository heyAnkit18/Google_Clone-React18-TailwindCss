import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyDlnNb1jTSpd79r52SrG5OChqdcgJjikrQ",
  cx: "45649a15580584224",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
