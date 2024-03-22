const ReuseableForm = ({
  formTitle,
  handleSubmit,
  SubmitBtnText = "Submit",
  children,
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <div>
      <h2>{children}</h2>
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="13w" />
        <br />
        <input type="password" name="password" id="1`23" />
        <br />
        {/* <button onSubmit={handleSubmit}>Submit</button>
         */}
        <input type="submit" value={SubmitBtnText} />
      </form>
    </div>
  );
};

export default ReuseableForm;
