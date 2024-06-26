import { listUrl } from "./GetListPlayer";
import { savePlayerName } from "../LocalStorage/LocalStorage";

export async function addRank(result) {
  savePlayerName({ name: result.name ? result.name : "" });

  const response = await fetch(listUrl, {
    method: "POST",
    body: JSON.stringify({
      name: result.name,
      time: result.time,
    }),
  });

  if (!response.status === 400) {
    alert("данные не в формате JSON");
    throw new Error("данные не в формате JSON");
  }

  const data = await response.json();
  return data;
}
