import "./App.css";
import ReuseableForm from "./components/ResueableForm/ReuseableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import SimpleForm from "./components/SimppleFrom/SimpleForm";
// import StatefullFrom from "./components/statefulForm/StatefullFrom";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("sign up", data);
  };
  const handleUpdateProfile = (data) => {
    console.log("updte profile", data);
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
      >
        <div>
          <h2>Sign Up</h2>
          <p>Plese sign up to continue</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Update Profile</h2>
          <p>please update your profile </p>
        </div>
      </ReuseableForm>
    </>
  );
}

export default App;
