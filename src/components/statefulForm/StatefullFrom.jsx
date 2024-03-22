import { useState } from "react";

const StatefullFrom = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("password must be at least 6 charecter");
    } else {
      console.log(email, name, password);
      setError("");
    }
  };

  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name" />
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="1234"
        />
        <br />
        <input
          onChange={handlePassChange}
          type="password"
          name="password"
          required
          id="2345"
        />
        <br />
        {/* <button onSubmit={handleSubmit}>Submit</button>
         */}
        <input type="submit" value="submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StatefullFrom;
