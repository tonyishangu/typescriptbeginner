import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then( res => {
  const todo = res.data
  const id = todo.id
  const title = todo.title
  const finished = todo.finished

  console.log(`
    Todo id: ${id}
    Todo Title: ${title}
    Todo Status: ${finished}
  `)
})