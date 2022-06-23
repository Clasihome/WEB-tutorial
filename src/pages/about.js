import React, { useState } from "react";

const About = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setResult(name);
    setName("");
  }

  return(
    <div>
      <h1>Buenos dias {result}</h1>
      <form
        onSubmit={onSubmit}
      >
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
        <button type="submit">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default About;