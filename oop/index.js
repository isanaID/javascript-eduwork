import { biodata } from "./biodata.js";

const person = new biodata("isana", 16, "Male");
const app = document.getElementById("app");
person.render(app);