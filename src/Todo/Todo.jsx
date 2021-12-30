import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { v4 as uuid } from "uuid";

function Todo() {
  const [data, setData] = useState(() => {
    return new Array(2).fill(0).map((_, i) => ({
      id: i,
      title: `${i}th element`,
      status: false
    }));
  });
  const handleAdd = (title) => {
    setData([
      ...data,
      {
        id: uuid(),
        title: title,
        status: false
      }
    ]);
  };
  console.log(data);
  return (
    <div>
      <TodoInput onAdd={handleAdd} />
      {data?.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          status={item.status}
        />
      ))}
    </div>
  );
}

export default Todo;
