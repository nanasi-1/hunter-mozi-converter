import './toggle.css'

export default function Toggle({ value, onChange }: {
  value: boolean
  onChange: (v: boolean) => void
}) {
  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked)
  }
  return (
    <label className="toggle-button-1">
      <input type="checkbox" checked={value} onChange={_onChange} />
    </label>
  )
}

export function ToggleRuby({ children }: {
  children: React.ReactNode
}) {
  return <span className="text-sm text-slate-800">{children}</span>
}