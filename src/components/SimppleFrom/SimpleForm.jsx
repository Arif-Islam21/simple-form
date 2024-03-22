const SimpleForm = () => {
  const handleSubmit = (e) => {
    console.log("form submited");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <br />
        {/* <button onSubmit={handleSubmit}>Submit</button>
         */}
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
