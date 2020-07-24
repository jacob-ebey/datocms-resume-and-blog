import SkillCard from './skill-card'

export default function SkillList({ skills }) {
  return (
    <div className="mb-40 grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map(({ id, name, details, image }) => (
        <SkillCard
          key={id}
          name={name}
          details={details}
          image={image}
        />
      ))}
    </div>
  )
}
