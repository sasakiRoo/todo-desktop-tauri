import { createApp } from "vue";
import App from "./App.vue";
import "./assets/assets.css";

import NotesTaking from "./components/notes_taking/NotesTaking.vue";
import Planning from "./components/planning/Planning.vue";

const app = createApp(App);
app.component("NotesTaking", NotesTaking);
app.component("Planning", Planning);

app.mount("#app");
