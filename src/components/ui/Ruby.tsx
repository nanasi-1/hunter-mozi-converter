import { tv } from "tailwind-variants"

export function Ruby({ children, ruby, containerClass, rtClass }: {
  children: React.ReactNode
  ruby: React.ReactNode
  containerClass?: string
  rtClass?: string
}) {
  const rt = tv({
    base: "text-slate-400 text-sm select-none"
  })
  return (
    <ruby className={containerClass}>
      {children}
      <rp>###</rp>
      <rt className={rt({ className: rtClass })}>{ruby}</rt>
      <rp>###</rp>
    </ruby>
  )
}