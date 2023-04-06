import { Notepad } from '@phosphor-icons/react';

import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.empty}>
      <Notepad  size={56} />
      <span>Você ainda não tem tarefas cadastradas</span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}