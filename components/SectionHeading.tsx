interface SectionHeadingProps {
  label?: string
  title: string
  className?: string
}

export default function SectionHeading({ label, title, className }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-16 ${className || ''}`}>
      {label && <p className="section-label">{label}</p>}
      <h2 className="heading-serif text-4xl md:text-5xl font-light tracking-wide">
        {title}
      </h2>
      <div className="mx-auto mt-6 h-px w-16 bg-champagne" />
    </div>
  )
}