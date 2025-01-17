import axios from "lib/axios";
import { APISponsor } from "models/api/sponsor";
import { getErrorMessage } from "api";

export function signIn(id: string, password: string): Promise<void> {
  return new Promise((resolve, reject) => {
    axios
      .get<APISponsor[]>("/login")
      .then((response) => {
        resolve();
      })
      .catch((error) => {
        console.error(error);
        reject(getErrorMessage(error));
      });
  });
}
