import OutputText from "../main/OutputText";

type Props = {
  command: string;
}

export default function ErrorText({
  command
}: Props) {
  return (
    <OutputText>
      invalid command '{command}'. type 'help' for list of commands.
    </OutputText>
  )
}