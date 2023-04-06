import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { ToDoList, todoProps } from './components/ToDoList';

import styles from './App.module.css';
import './global.css';

export function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState<todoProps[]>([]);

  function handleChangeNewTodo(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  function handleSubmitNewTodo(event: FormEvent) {
    event.preventDefault();

    if (newTodo.trim().length === 0) {
      return
    }

    const formatedNewTodo = {
      id: uuidv4(),
      description: newTodo,
      isCompleted: false,
    }

    setTodoList([...todoList, formatedNewTodo]);
    setNewTodo('');
  }

  function onDeleteTodo(id: string) {
    const filteredTodoList = todoList.filter(todo => todo.id !== id);

    setTodoList(filteredTodoList);
  }

  function onChangeCheckbox(id: string) {
    const filteredTodoList = todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo;
    })

    setTodoList(filteredTodoList);
  }

  const isNewTodoEmpty = newTodo.length === 0;

  return (
    <div>
      <Header />

      <div className={styles.app}>
        <form onSubmit={handleSubmitNewTodo} className={styles.form}>
          <input
            name="todoText"
            value={newTodo}
            onChange={handleChangeNewTodo}
            placeholder="Adicione uma nova tarefa"
          />
          <button type="submit" disabled={isNewTodoEmpty}>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>

        <ToDoList
          todoList={todoList}
          onDeleteTodo={onDeleteTodo}
          onChangeCheckbox={onChangeCheckbox}
        />
      </div>
    </div>
  )
}
