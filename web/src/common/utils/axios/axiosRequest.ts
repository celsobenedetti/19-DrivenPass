import axios, { AxiosError } from "axios";

const API_URL = process.env.VUE_APP_API_URL;
let waiting = false;

export const postData = async (endpoint: string, payload: any) => {
  let data: any, error: any;
  if (!waiting) {
    waiting = true;

    try {
      const { data: responseData } = await axios.post(
        `${API_URL}/${endpoint}`,
        payload
      );
      data = responseData;
      console.log({ data });
    } catch (err) {
      error = err;
      if (err instanceof AxiosError) {
        const { response } = err;
        const { data: errorData } = response;
        err.message = errorData.response;
      }
      console.log({ error });
    } finally {
      waiting = false;
    }
  }
  return { data, error };
};
