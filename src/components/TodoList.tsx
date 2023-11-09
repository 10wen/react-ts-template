import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../types/todo'

type Props = {
  todoList: Todo[]
}

const TodoList: React.FC<Props> = ({ todoList }) => {
  return (
    <div className="todo-list">
      {
        todoList.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />
        })
      }
    </div>
  )
}

export default TodoList