import OutputText from '../main/OutputText'

type Props = {}

export default function HelpText({ }: Props) {
  return (
    <>
      <OutputText addExtraLine={false}>to navigate to a category, use one of the following commands:</OutputText>
      <OutputText addExtraLine={false}>  about                      - learn about me</OutputText>
      <OutputText addExtraLine={false}>  journey                    - my journey into tech</OutputText>
      <OutputText addExtraLine={false}>  skills                     - my most comfortable technologies</OutputText>
      <OutputText addExtraLine={false}>  experience                 - my background experience</OutputText>
      <OutputText addExtraLine={false}>  education                  - my education and studies</OutputText>
      <OutputText addExtraLine={false}>  projects                   - showcase of projects i've created</OutputText>
      <OutputText addExtraLine={true}>  contact                    - my details. get in touch with me!</OutputText>

      <OutputText addExtraLine={false}>additional commands:</OutputText>
      <OutputText addExtraLine={false}>  theme [-c] &lt;themename&gt;    - change the theme of the terminal. available themes: neo</OutputText>
      <OutputText addExtraLine={true}>  clear                     - clears the contents of the terminal</OutputText>

      <OutputText>type 'help' to see this list again.</OutputText>
    </>
  )
}