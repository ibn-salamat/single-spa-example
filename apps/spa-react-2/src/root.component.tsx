import { useEffect, useState } from "react";
import { Subject } from "rxjs";

export const title$ = new Subject();

export default function Root(props) {
  const [titleTodo, setTitleTodo] = useState("");

  function createTodo(){
    if(!titleTodo.trim()) return;

    console.log("Create todo")
  }

  useEffect(() => {
    title$.next(titleTodo)
  },[titleTodo])

  return <section className="block">

    <h1>Input Todo</h1>

    <input value={titleTodo} onChange={({target: {value}}) => {
      setTitleTodo(value);
    }}/>

    <button onClick={createTodo}>Create</button>
  </section>;
}
