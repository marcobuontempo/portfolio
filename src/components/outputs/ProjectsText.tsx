import OutputText from "../main/OutputText"

type Props = {}

export default function ProjectsText({ }: Props) {
  return (
    <>
      <OutputText>Please note that ALL of these were created WITHOUT tutorial guidance, unless otherwise stated. Enjoy!</OutputText>

      <OutputText addExtraLine={false}>1. Flamboyance Dashboard <a href='https://github.com/marcobuontempo/flamboyance-cc/' target='_blank' referrerPolicy='no-referrer'>GitHub</a> <a href='https://www.flamboyance.cc/' target='_blank' referrerPolicy='no-referrer'>Website</a></OutputText>
      <OutputText addExtraLine={false}> - front-end dashboard for <a href='https://www.flamingo.finance/' target='_blank' referrerPolicy='no-referrer'>flamingo.finance</a>'s defi platform</OutputText>
      <OutputText addExtraLine={false}> - 1st place 'Dashboard-Athon' winner, as solo dev (including ~AUD$3k prize money)! </OutputText>
      <OutputText addExtraLine={true}> - tech stack: React (TypeScript) and Tailwind CSS</OutputText>

      <OutputText addExtraLine={false}>2. FOSS Front Row <a href='https://github.com/marcobuontempo/foss-front-row' target='_blank' referrerPolicy='no-referrer'>GitHub</a> <a href='https://foss-front-row.marcobuontempo.com/' target='_blank' referrerPolicy='no-referrer'>Website</a></OutputText>
      <OutputText addExtraLine={false}> - a proof-of-concept project for an event ticketing system</OutputText>
      <OutputText addExtraLine={false}> - full CRUD application for event management</OutputText>
      <OutputText addExtraLine={false}> - integrates QR code generation and scanning for event tickets</OutputText>
      <OutputText addExtraLine={true}> - tech stack: full MERN stack (MongoDB, Express, React, Nodejs), JWT Auth, Redux, and Admin/User roles</OutputText>

      <OutputText addExtraLine={false}>3. Portfolio <a href='https://github.com/marcobuontempo/portfolio' target='_blank' referrerPolicy='no-referrer'>GitHub</a> <a href='https://www.marcobuontempo.com/' target='_blank' referrerPolicy='no-referrer'>Website</a></OutputText>
      <OutputText addExtraLine={false}> - the current website you're on, entirely and uniquely built by me</OutputText>
      <OutputText addExtraLine={true}> - tech stack: React (TypeScript)</OutputText>

      <OutputText addExtraLine={false}>4. Museum of CSS Art <a href='https://github.com/marcobuontempo/mocssa' target='_blank' referrerPolicy='no-referrer'>GitHub</a> <a href='https://mocssa.marcobuontempo.com/' target='_blank' referrerPolicy='no-referrer'>Website</a></OutputText>
      <OutputText addExtraLine={false}> - a creative project, exclusively using CSS style rules for art</OutputText>
      <OutputText addExtraLine={false}> - many pieces are created with a single HTML &lt;div&gt; element, requiring out-of-the-box thinking, resourcefulness, and creativity</OutputText>
      <OutputText addExtraLine={false}> - serves no functional purpose, just enjoy :)</OutputText>
      <OutputText addExtraLine={true}> - tech stack: you guessed it... CSS!</OutputText>

      <OutputText addExtraLine={false}>5. Task Planner JWD <a href='https://github.com/marcobuontempo/Task-Planner-JWD' target='_blank' referrerPolicy='no-referrer'>GitHub</a> <a href='https://marcobuontempo.github.io/Task-Planner-JWD/' target='_blank' referrerPolicy='no-referrer'>Website</a></OutputText>
      <OutputText addExtraLine={false}> - my first ever proper web project - a simple task planner!</OutputText>
      <OutputText addExtraLine={false}> - created collaboratively during Generation Australia's bootcamp, with instructor guidance and training</OutputText>
      <OutputText addExtraLine={true}> - tech stack: vanilla JavaScript and CSS</OutputText>

    </>
  )
}