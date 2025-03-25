import { tv } from "tailwind-variants"

const base = tv({
  base: [
    "rounded", "bg-slate-400", "w-[120px]", "h-[40px]",
    "transition-colors", "text-slate-100"
  ],
  variants: {
    disabled: {
      true: ["cursor-not-allowed", "bg-slate-300"],
      false: ["cursor-pointer", "hover:bg-slate-500"]
    }
  }
})

export function ClearInput({ onClick, disabled }: {
  onClick?: () => void
  disabled: boolean
}) {
  return (
    <button className={base({ disabled })} onClick={onClick} disabled={disabled}>全てクリア</button>
  )
}

export function Backspace({ onClick, disabled }: {
  onClick?: () => void
  disabled: boolean
}) {
  const button = tv({
    extend: base,
    base: ["w-[70px]", "block"]
  })
  return (
    <button className={button({ disabled })} onClick={onClick} disabled={disabled}>←</button>
  )
}