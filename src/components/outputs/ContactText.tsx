import OutputText from "../main/OutputText"

type Props = {}

export default function ContactText({ }: Props) {
  return (
    <>
      <OutputText>Email: <a href='mailto:marcobuontempo96@gmail.com' target='_blank' referrerPolicy='no-referrer'>marcobuontempo96@gmail.com</a></OutputText>
      <OutputText>GitHub: <a href='https://github.com/marcobuontempo/' target='_blank' referrerPolicy='no-referrer'>/marcobuontempo</a></OutputText>
      <OutputText>LinkedIn: <a href='https://www.linkedin.com/in/marcobuontempo/' target='_blank' referrerPolicy='no-referrer'>/in/marcobuontempo</a></OutputText>
    </>
  )
}