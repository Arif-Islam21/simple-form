const ReuseableForm = ({
  formTitle,
  handleSubmit,
  SubmitBtnText = "Submit",
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>{formTitle}</h2>
      <form onSubmit={handleSubmit}>
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
