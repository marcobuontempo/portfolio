import { KeyboardEvent, useState } from 'react'
import styles from './styles.module.css'
import OutputText from '../OutputText'
import HelpText from '../../outputs/HelpText'
import ErrorText from '../../outputs/ErrorText'
import AboutText from '../../outputs/AboutText'
import ProjectsText from '../../outputs/ProjectsText'
import SkillsText from '../../outputs/SkillsText'
import ExperienceText from '../../outputs/ExperienceText'
import EducationText from '../../outputs/EducationText'
import ContactText from '../../outputs/ContactText'
import JourneyText from '../../outputs/JourneyText'

const prefixMessage = (
  <OutputText className={styles['input-prefix-upper']} addExtraLine={false}>marco@portfolio ~</OutputText>
)

const initialMessage = (
  <>
    {prefixMessage}
    <OutputText>Hey! Welcome to my portfolio. Let's explore!</OutputText>
    <HelpText />
  </>
)

const emptyMessageStack = [prefixMessage];

export default function Terminal() {
  const [messageStack, setMessageStack] = useState([initialMessage]);
  const [inputStack, setInputStack] = useState(['']);
  const [inputStackIndex, setInputStackIndex] = useState(0);
  const [inputText, setInputText] = useState('');

  const enterInput = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleInputCommand(inputText);
      setInputStack(['', inputText, ...inputStack.slice(1)]);
      setInputStackIndex(0);
      setInputText('');
    } else if (e.key === 'ArrowUp') {
      const idx = Math.min(inputStackIndex + 1, inputStack.length - 1);
      setInputStackIndex(idx);
      setInputText(inputStack[idx]);
    } else if (e.key === 'ArrowDown') {
      const idx = Math.max(inputStackIndex - 1, 0);
      setInputStackIndex(idx);
      setInputText(inputStack[idx]);
    }
  }

  const getOutputText = (command: string) => {
    switch (command) {
      case 'about':
        return <AboutText />;
      case 'journey':
        return <JourneyText />;
      case 'skills':
        return <SkillsText />;
      case 'experience':
        return <ExperienceText />;
      case 'education':
        return <EducationText />;
      case 'projects':
        return <ProjectsText />;
      case 'contact':
        return <ContactText />;
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