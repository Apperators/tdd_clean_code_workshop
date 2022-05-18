import { getLukeAPI } from "./SWAPI";

export const getLuke = () => {
  return getLukeAPI();
};

export const callingCallMe = (callMe: () => void) => {
  return callMe();
};
