import { useState } from "react";
import { todos$ } from "@single-spa/spa-react"


export default function Root(props) {
  const [titleTodo, setTitleTodo] = useState("");

  function createTodo(){
    if(!titleTodo.trim()) return;

    todos$.next([...todos$.getValue(), titleTodo]);
    setTitleTodo("")
  }


  return <section className="block">

    <h1>Input Todo</h1>

    <input value={titleTodo} onChange={({target: {value}}) => {
      setTitleTodo(value);
    }}/>

    <button onClick={createTodo}>Create</button>
  </section>;
}
