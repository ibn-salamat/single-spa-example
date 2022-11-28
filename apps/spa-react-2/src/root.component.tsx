import { useState } from "react";

export default function Root(props) {
  const [titleTodo, setTitleTodo] = useState("");

  function createTodo(){
    if(!titleTodo.trim()) return;

    console.log("Create todo")
  }

  return <section className="block">

    <h1>Input Todo</h1>

    <input value={titleTodo} onChange={({target: {value}}) => {
      setTitleTodo(value);
    }}/>

    <button onClick={createTodo}>Create</button>
  </section>;
}
