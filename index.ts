import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then( res => {
  const todo = res.data as Todo

  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  logTodos(id, title, completed)
  
})

const logTodos = (id: number, title: string, completed: boolean) => {
  console.log(`
    Todo id: ${id}
    Todo Title: ${title}
    Todo Status: ${completed}
  `)
}

// type
      // =>easy way to refer to the different properties + function a value has