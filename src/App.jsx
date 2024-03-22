import "./App.css";
import ReuseableForm from "./components/ResueableForm/ReuseableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import SimpleForm from "./components/SimppleFrom/SimpleForm";
// import StatefullFrom from "./components/statefulForm/StatefullFrom";

function App() {
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
  };
  const handleUpdateProfile = (e) => {
    e.preventDefault();
  };

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
        handleSubmit={handleSignUpSubmit}
      ></ReuseableForm>
      <ReuseableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
      ></ReuseableForm>
    </>
  );
}

export default App;
