import "./App.css";
import RefForm from "./components/RefForm/RefForm";
import SimpleForm from "./components/SimppleFrom/SimpleForm";
import StatefullFrom from "./components/statefulForm/StatefullFrom";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullFrom></StatefullFrom> */}
      <RefForm></RefForm>
    </>
  );
}

export default App;
