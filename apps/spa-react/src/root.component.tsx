import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs"

const initialTodos = [];

export const todos$ = new BehaviorSubject(initialTodos);


export default function Root(props) {
  const [ todos, setTodos ] = useState<any>(todos$.getValue());

  useEffect(() => {
    todos$.subscribe(v => {
      console.log(v);
      setTodos(v);
    })
  }, [])

  return <section 
      className="block"
    >
    <h1>Todo List:</h1>
    {todos.map(todo => <p>{todo}</p>)}
  </section>;
}
