import { tv } from "tailwind-variants";

export function Mozi({ children, className, hunter }: { 
  children: string 
  className?: string,
  hunter: boolean
}) {
  if (hunter) {
    return <HunterMozi className={className}>{children}</HunterMozi>
  } else {
    return <span className={className}>{children}</span>
  }
}

export function HunterMozi({ children, className }: { 
  children: string 
  className?: string
}) {
  const span = tv({
    base: 'font-[hunter-mozi]'
  })
  return <span className={span({ className })}>{children}</span>
}