import {
  cloneElement,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./styles.module.css";
import OutputText from "../OutputText";
import HelpText from "../../outputs/HelpText";
import ErrorText from "../../outputs/ErrorText";
import AboutText from "../../outputs/AboutText";
import ProjectsText from "../../outputs/ProjectsText";
import SkillsText from "../../outputs/SkillsText";
import ExperienceText from "../../outputs/ExperienceText";
import EducationText from "../../outputs/EducationText";
import ContactText from "../../outputs/ContactText";
import JourneyText from "../../outputs/JourneyText";

const themes = ["light", "dark", "neo", "solarized"];

const prefixMessage = (
  <OutputText className={styles["input-prefix-upper"]} addExtraLine={false}>
    marco@portfolio{" "}
    <span className={styles["input-prefix-upper-secondary"]}>~</span>
  </OutputText>
);

const initialOutput = (
  <>
    {prefixMessage}
    <OutputText>
      Hey! Welcome to Marco Buontempo's portfolio. Thanks for visiting, let's
      explore! :)
    </OutputText>
    <HelpText />
  </>
);

const emptyOutputStack = [prefixMessage];

export default function Terminal() {
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [outputStack, setOutputStack] = useState([initialOutput]);
  const [inputStack, setInputStack] = useState([""]);
  const [inputStackIndex, setInputStackIndex] = useState(0);
  const [inputText, setInputText] = useState("");

  const enterInput = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleInputCommand(inputText);
      setInputStack(["", inputText, ...inputStack.slice(1)]);
      setInputStackIndex(0);
      setInputText("");
      focusInput(true);
    } else if (e.key === "ArrowUp") {
      const idx = Math.min(inputStackIndex + 1, inputStack.length - 1);
      setInputStackIndex(idx);
      setInputText(inputStack[idx]);
    } else if (e.key === "ArrowDown") {
      const idx = Math.max(inputStackIndex - 1, 0);
      setInputStackIndex(idx);
      setInputText(inputStack[idx]);
    }
  };

  const changeTheme = (themename: string) => {
    // Remove any existing class names with the string 'theme-' from the body element
    document.body.className = document.body.className
      .split(" ")
      .filter((className) => !className.startsWith("theme-"))
      .join(" ");

    // Add the new theme class to the body
    document.body.classList.add(`theme-${themename}`);

    // Update local storage with the new theme name
    localStorage.setItem("theme", themename);
  };

  const getOutputText = (command: string) => {
    switch (command) {
      case "hello world":
        return <OutputText>hello there :)</OutputText>;
      case "theme":
        return (
          <OutputText>
            Wrong usage of command 'theme'. Please use 'theme -c
            &lt;themename&gt;'. Refer to 'help' command for list of available
            themes.
          </OutputText>
        );
      case "about":
        return <AboutText />;
      case "journey":
        return <JourneyText />;
      case "skills":
        return <SkillsText />;
      case "experience":
        return <ExperienceText />;
      case "education":
        return <EducationText />;
      case "projects":
        return <ProjectsText />;
      case "contact":
        return <ContactText />;
      case "help":
        return <HelpText />;
      default:
        return <ErrorText command={command} />;
    }
  };

  const handleInputCommand = (command: string) => {
    const args = command.toLowerCase().split(" ");
    command = args[0];

    if (command === "clear") {
      setOutputStack(emptyOutputStack);
      return;
    }

    if (command === "theme" && args[1] === "-c" && themes.includes(args[2])) {
      changeTheme(args[2]);
      return;
    }

    if (command === "hello" && args[1] === "world") {
      command = "hello world";
    }

    const input = (
      <OutputText addExtraLine={false}>
        <span className={styles["output-prefix"]}>$</span> {command}
      </OutputText>
    );
    const output = getOutputText(command);
    setOutputStack([...outputStack, input, output, prefixMessage]);
  };

  const focusInput = (scrollTo: boolean) => {
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: !scrollTo });
    }
  };

  useEffect(() => {
    focusInput(true);
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [outputStack]);

  return (
    <main className={styles["terminal"]} onClick={() => focusInput(false)}>
      <div className={styles["toolbar"]}>terminal - marco@portfolio ~</div>
      <div className={styles["output"]} ref={outputRef}>
        {outputStack.map((element, index) =>
          cloneElement(element, { key: index })
        )}{" "}
        <div>
          <div className={styles["input-container"]}>
            <span className={styles["input-prefix-lower"]}>$ </span>
            <input
              type="text"
              className={styles["input"]}
              ref={inputRef}
              onKeyDown={enterInput}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
