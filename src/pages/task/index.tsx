import React, { useState } from "react";
import "./index.scss";
import { Todo } from "../../types/todo";
import InputForm from "../../components/InputForm";
import TodoList from "../../components/TodoList";
import { useTranslation } from "react-i18next";

const Task: React.FC = () => {

  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState('cn')
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    setLanguage(language)
    i18n.changeLanguage(language)
    console.log(language);
  }

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAdd = (todoText: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>{ t('Task') }</h1>
        <div style={{marginLeft: '20px'}}>
          <select value={language} onChange={(e) => changeLanguage(e)}>
            <option value="cn">简</option>
            <option value="hk">繁</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
      <div className="input-container">
        <InputForm handleAdd={handleAdd} />
      </div>
      <div className="list-container">
        <TodoList todoList={todoList} />
      </div>
    </div>
  );
};

export default Task;
