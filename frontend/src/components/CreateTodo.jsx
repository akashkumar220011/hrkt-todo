

const CreateTodo = () => {
  return (
    <div>
      <input style={{
        padding: 20,
        margin: 10,
      }} type="text" placeholder="title"></input>
      <input style={{
        padding: 20,
        margin: 10,
      }} type="text" placeholder="Description"></input>
      <button>Add a todo</button>
    </div>
  )
}

export default CreateTodo
 