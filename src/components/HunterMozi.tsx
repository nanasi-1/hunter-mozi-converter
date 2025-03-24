export function HunterMozi({ children, className }: { 
  children: string 
  className?: string
}) {
  // const url = getImageUrl(`/hunter-mozi/${children}.svg`)
  // return (
  //   <img src={url} alt={children} width={textSize} height={textSize} />
  // )
  return <span className="font-[hunter-mozi]">{children}</span>
}