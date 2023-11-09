import React from 'react'
import { Todo } from '../types/todo'

const TodoItem= ({ todo }:{ todo: Todo}) => {
  return (
    <div className='todo-item'>{ todo.text }</div>
  )
}

export default TodoItem;