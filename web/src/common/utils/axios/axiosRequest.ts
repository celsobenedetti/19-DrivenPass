import axios, { AxiosError, AxiosRequestHeaders } from "axios";

interface TokenHeader extends AxiosRequestHeaders {
  authorization: string;
}

const API_URL = process.env.VUE_APP_API_URL;
let waiting = false;

export const postData = async (
  endpoint: string,
  payload: any,
  headers?: TokenHeader
) => {
  let data: any, error: any;
  if (!waiting) {
    waiting = true;

    try {
      const { data: responseData } = await axios.post(
        `${API_URL}/${endpoint}`,
        payload,
        { headers }
      );
      data = responseData;
    } catch (err) {
      error = err;
      if (err instanceof AxiosError) {
        const { response } = err;
        const { data: errorData } = response;
        err.message = errorData.response;
      }
    } finally {
      waiting = false;
    }
  }
  return { data, error };
};
