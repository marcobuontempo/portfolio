import { ReactNode } from 'react'
import styles from './styles.module.css'

type Props = {
  children: ReactNode;
  className?: string;
  addExtraLine?: boolean;
}

export default function OutputText({
  children,
  className,
  addExtraLine = true,
}: Props) {
  return (
    <>
      <p className={`${styles['output-text']} ${className}`}>
        {children}
      </p>
      {
        addExtraLine &&
        <br />
      }
    </>
  )
}