export function Ruby({ children, ruby }: {
  children: React.ReactNode
  ruby: React.ReactNode
}) {
  return (
    <ruby>
      {children}
      <rp>###</rp>
      <rt className="text-slate-400 text-sm ">{ruby}</rt>
      <rp>###</rp>
    </ruby>
  )
}