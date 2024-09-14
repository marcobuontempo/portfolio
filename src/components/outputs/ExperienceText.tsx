import OutputText from "../main/OutputText"

type Props = {}

export default function ExperienceText({ }: Props) {
  return (
    <>
      <OutputText addExtraLine={false}>Infosys - Technology Associate (December 2021 - August 2023)</OutputText>
      <OutputText>
        At Infosys, I was able to be exposed to the IT workforce and build up my skillset in the tech sector.
        Receiving intensive training in multiple areas, from Data Analytics, to Java Development, to MERN stack development, I was able to upskill and hone in my coding skills.
        Many of my trainings were facilitated with group capstone projects, further enabling my ability to collaborate and work with others on tech projects.
      </OutputText>

      <OutputText addExtraLine={false}>Roma Foods - Production Supervisor & OHS Coordinator (February 2018 - February 2021)</OutputText>
      <OutputText>
        My experience in food manufacturing helped me develop my key skills in the workforce, and developed my ability to work with others.
        Managing 2 production lines with multiple staff involved constant scheduling, planning, and troubleshooting.
        This demanded daily problem solving, usually only achievable by connecting with multiple departments in the business.
        Ultimately, I gained the confidence in my resourcefulness, creativity, and working in a team environment.
      </OutputText>

    </>
  )
}