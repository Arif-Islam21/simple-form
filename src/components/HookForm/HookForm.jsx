import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("Rojni klanto");
  const emailState = useInputState("rojni@sojini.co");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", emailState.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        /> */}
        <br />
        <input {...emailState} type="email" name="email" id="12321" />
        <br />
        <input type="password" name="password" id="324" />
        <br />
        {/* <button onSubmit={handleSubmit}>Submit</button>
         */}
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;
