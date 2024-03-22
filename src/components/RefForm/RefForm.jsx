import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input
          ref={emailRef}
          defaultValue={"rojoni.sojoni@gmail.com"}
          type="email"
          name="email"
          id=""
        />
        <br />
        <input ref={passRef} type="number" name="phone" id="" />
        <br />
        {/* <button onSubmit={handleSubmit}>Submit</button>
         */}
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default RefForm;
