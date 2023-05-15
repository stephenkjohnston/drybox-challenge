import { atom } from "recoil";
import { Containers } from "types/containers";

export default atom<Containers>({
  key: "containers",
  default: []
});
