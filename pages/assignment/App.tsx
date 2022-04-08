import React from "react";

import Todo from "./Todo";

// rework this into regular api call, feel free to use any open api

// better to use block-scoped const
// should be tested
var todos = (): Promise<{ id: string; title: string }[]> =>
  new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: "1",
          title: "Go shopping",
        },
        {
          id: "2",
          title: "Job interview",
        },
        {
          id: "3",
          title: "Prepare homework",
        },
      ]);
    }, 100);
  });

function App() {
  const [state, setState] = React.useState<{ id: string; title: string }[]>([]);

  // useEffect is missing triggers
  React.useEffect(() => {
    (async () => {
      // this approach to create state/states makes no sense, will cause performance issues + for, why?
      var awaitedTodos = await todos();
      for (var i = 0; i < awaitedTodos.length; i++) {
        setState([...state, awaitedTodos[i]]);
      }
    })();
  });

  return (
    <div>
      {/* Todo components should be mapped with key identificators, done - key={todo.id}*/}
      {state.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default App;
