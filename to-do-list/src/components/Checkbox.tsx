import styles from './Checkbox.module.css';

interface CheckboxProps {
  id: string;
  value: boolean;
  onChange: () => void;
}

export function Checkbox({ id, value, onChange }: CheckboxProps) {
  return (
    <div className={styles.checkbox}>
      <div className={styles.round}>
        <input
          type="checkbox"
          id={id}
          name={id}
          checked={value}
          onChange={onChange}
        />
        <label htmlFor={id} />
      </div>
    </div>
  )
}