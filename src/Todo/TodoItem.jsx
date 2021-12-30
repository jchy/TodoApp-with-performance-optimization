// blocking code, sync code
const delay = (time) => {
  const start = Date.now();
  while (Date.now() - start < time) {
    continue;
  }
  return start;
};

function TodoItem({ id, title, status }) {
  // const time = delay(200);
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
      <div>{title}</div>
      <div>{status}</div>
      {/* <div>{time}</div> */}
    </div>
  );
}

export default TodoItem;
