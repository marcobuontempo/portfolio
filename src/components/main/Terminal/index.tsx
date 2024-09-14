import { KeyboardEvent, useState } from 'react'
import styles from './styles.module.css'
import OutputText from '../OutputText'
import HelpText from '../../outputs/HelpText'
import ErrorText from '../../outputs/ErrorText'
import AboutText from '../../outputs/AboutText'

const prefixMessage = (
  <OutputText className={styles['input-prefix-upper']} addExtraLine={false}>marco@portfolio ~</OutputText>
)

const emptyMessageStack = [prefixMessage];

export default function Terminal() {
  const [messageStack, setMessageStack] = useState(emptyMessageStack);
  const [inputText, setInputText] = useState('');

  const enterInput = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleInputCommand(inputText);
      setInputText('');
    }
  }

  const getOutputText = (command: string) => {
    switch (command) {
      case 'about':
        return <AboutText />;
      case 'help':
        return <HelpText />;
      default:
        return <ErrorText command={command} />;
    }
  }

  const handleInputCommand = (command: string) => {
    command = command.toLowerCase();
    if (command === 'clear') {
      setMessageStack(emptyMessageStack);
    } else {
      const input = <OutputText addExtraLine={false}>$ {command}</OutputText>
      const output = getOutputText(command);
      setMessageStack([...messageStack, input, output, prefixMessage]);
    }
  }

  return (
    <main className={styles['terminal']}>
      <div className={styles['toolbar']}></div>
      <div className={styles['output']}>
        {messageStack}
        <div>
          <div className={styles['input-container']}>
            <span className={styles['input-prefix-lower']}>$ </span>
            <input type='text' className={styles['input']} onKeyDown={enterInput} value={inputText} onChange={(e) => setInputText(e.target.value)} />
          </div>
        </div>
      </div>
    </main>
  )
}