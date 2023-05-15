import { atom } from "recoil";
import ContainerData from 'data/containers.json';
import { Containers } from "types/containers";

export default atom<Containers>({
  key: "containers",
  default: ContainerData
});
