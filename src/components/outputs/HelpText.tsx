import OutputText from '../main/OutputText'

type Props = {}

export default function HelpText({ }: Props) {
  return (
    <>
      <OutputText>marco's portfolio version {import.meta.env.VITE_APP_VERSION}</OutputText>

      <OutputText addExtraLine={false}>to navigate to a category, use one of the following commands:</OutputText>
      <OutputText addExtraLine={false}>  about                      - learn about me</OutputText>
      <OutputText addExtraLine={true}>  projects                   - showcase of projects i've created</OutputText>
      
      <OutputText addExtraLine={false}>additional commands:</OutputText>
      <OutputText addExtraLine={false}>  theme [-c] &lt;themename&gt;    - change the theme of the terminal. available themes: neo</OutputText>
      <OutputText addExtraLine={false}>  clear                      - clears the contents of the terminal</OutputText>

      <OutputText>type 'help' to see this list again.</OutputText>
    </>
  )
}