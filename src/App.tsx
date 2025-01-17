import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import { api } from "./services/api";

import "./styles/global.scss";

export function App() {
  return (
    <>
      <Content />
      <SideBar />
    </>
  );
}
