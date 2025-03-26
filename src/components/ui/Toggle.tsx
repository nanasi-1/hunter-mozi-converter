import { tv } from 'tailwind-variants'
import './toggle.css'

export default function Toggle({ value, onChange, onOff }: {
  value: boolean
  onChange: (v: boolean) => void
  onOff?: boolean // false | voidならmodeになる
}) {
  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked)
  }

  const label = tv({
    base: "toggle-button-1",
    variants: { // 設計むずい
      onOff: {
        "on": "bg-slate-400",
      },
      mode: {
        true: "bg-slate-400"
      }
    },
  })

  return (
    <label className={label({ 
      onOff: (onOff && value) ? "on" : void 0, 
      mode: !onOff
    })}>
      <input type="checkbox" checked={value} onChange={_onChange} />
    </label>
  )
}

export function ToggleRuby({ children }: {
  children: React.ReactNode
}) {
  return <span className="text-sm text-slate-700">{children}</span>
}