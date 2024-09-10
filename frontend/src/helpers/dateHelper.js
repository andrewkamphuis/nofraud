import moment from "moment-timezone";
import { tenantFromURL } from "../api/helpers";

export const settings = () => {
  try {
    const setting = JSON.parse(
      localStorage.getItem(`setting-${tenantFromURL()}`)
    );
    if (typeof setting === "object" && setting !== null) {
      return setting;
    }
    throw Error("Settings Failed To Load From Local Storage");
  } catch (err) {
    throw Error("Settings Failed To Load From Local Storage");
  }
};

// ex 2023-06-20T01:00:00.000Z to 2023-06-19 (isoDate) or Jun 19 (short) or Jun 19, 2023 (default)
export const dateFormat = (date, format) => {
  if (!date || !moment(date).isValid()) {
    throw new Error("Invalid Date");
  }
  switch (format) {
    case "isoDate":
      return moment(date).tz(settings().timeZone).format("YYYY-MM-DD");
    case "short":
      return moment(date).tz(settings().timeZone).format("MMM D");
    default:
      return moment(date).tz(settings().timeZone).format("MMM D, YYYY");
  }
};
