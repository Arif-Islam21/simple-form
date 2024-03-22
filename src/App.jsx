import "./App.css";
import ReuseableForm from "./components/ResueableForm/ReuseableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import SimpleForm from "./components/SimppleFrom/SimpleForm";
// import StatefullFrom from "./components/statefulForm/StatefullFrom";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullFrom></StatefullFrom> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm
        formTitle={"Sign Up"}
        SubmitBtnText="Sign Up"
      ></ReuseableForm>
      <ReuseableForm formTitle={"Profile Update"}></ReuseableForm>
    </>
  );
}

export default App;
