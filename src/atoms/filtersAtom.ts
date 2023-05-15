import { atom } from "recoil";

export default atom({
  key: "filters",
  default: {
    color: '',
    condition: ''
  }
});
