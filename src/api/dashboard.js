import axios from "axios";
import { BASE_URL } from "../components/constants";

export const loginMember = (email, password) =>
  axios.post(
    `${BASE_URL}/admin/login`,
    {
      email,
      password,
    },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
