import { tv } from "tailwind-variants"

const base = tv({
  base: [
    "border-2", "w-[120px]", "h-[40px]",
    "hover:bg-slate-100", "transition-colors"
  ]
})

export function ClearInput({ onClick, disabled }: {
  onClick?: () => void
  disabled: boolean
}) {
  return (
    <button className={base()} onClick={onClick} disabled={disabled}>全てクリア</button>
  )
}

export function Backspace({ onClick, disabled }: {
  onClick?: () => void
  disabled: boolean
}) {
  const button = tv({
    extend: base,
    base: ["mr-2", "w-[70px]"]
  })
  return (
    <button className={button()} onClick={onClick} disabled={disabled}>←</button>
  )
}