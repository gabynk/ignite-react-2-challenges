import { useMemo } from 'react';
import { Trash } from '@phosphor-icons/react';

import { Checkbox } from './Checkbox';
import { Empty } from './Empty';

import styles from './ToDoList.module.css';

export interface todoProps {
  id: string;
  description: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todoList: todoProps[];
  onDeleteTodo: (id: string) => void;
  onChangeCheckbox: (id: string) => void;
}

export function ToDoList({ todoList, onDeleteTodo, onChangeCheckbox }: TodoListProps) {
  function handleChangeCheckbox(id: string) {
    onChangeCheckbox(id);
  }

  function handleDeleteTodo(id: string) {
    onDeleteTodo(id);
  }

  const todoCompletedCount = useMemo(() => {
    const completedCount = todoList.reduce((completed, todo) => {
      if (todo.isCompleted === true) {
        completed++;
      }

      return completed;
    }, 0);

    return completedCount;
  }, [todoList])

  const todoCount = todoList.length;

  return (
    <div className={styles.todoList}>
      <header>
        <div>
          <span className={styles.createdTask}>Tarefas criadas</span>
          <span className={styles.count}>{todoCount}</span>
        </div>
        <div>
          <span className={styles.finishedTask}>Concluídas</span>
          <span className={styles.count}>
            {todoCompletedCount} de {todoCount}
          </span>
        </div>
      </header>
      {todoList.length <= 0
        ? <Empty />
        : (
          todoList.map(todo => {
            return (
              <div key={todo.id} className={styles.toDoCard}>
                <Checkbox
                  id={todo.id}
                  value={todo.isCompleted}
                  onChange={() => handleChangeCheckbox(todo.id)}
                />
                <span
                  className={todo.isCompleted ? styles.isCompleted : styles.isNotCompleted}
                >
                  {todo.description}
                </span>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  <Trash size={22} />
                </button>
              </div>
            )
          })
        )}
    </div>
  )
}