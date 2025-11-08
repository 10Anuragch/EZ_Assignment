import axios from "axios";

const ENDPOINT = "https://vernanbackend.ezlab.in/api/contact-us/";

export async function submitContact(payload) {
  try {
    const res = await axios.post(ENDPOINT, payload, {
      headers: { "Content-Type": "application/json" },
      timeout: 15000,
    });
    return { ok: res.status >= 200 && res.status < 300, status: res.status, data: res.data };
  } catch (error) {
    if (error.response) {
      return { ok: false, status: error.response.status, error: error.response.data };
    }
    return { ok: false, status: 0, error: { message: "Network error" } };
  }
}
