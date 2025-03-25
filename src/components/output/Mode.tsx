import { SelectMode } from "@/utils";
import Toggle from "../ui/Toggle";

function ToggleRuby({ children }: {
  children: React.ReactNode
}) {
  return <span className="text-sm text-slate-800">{children}</span>
}

export default function ModeToggle({ mode, onChange }: {
  mode: SelectMode
  onChange: (mode: SelectMode) => void
}) {
  const _onChange = (v: boolean) => onChange(v ? 'to-hiragana' : 'to-hunter-mozi')
  return (
    <div className="flex gap-x-3 items-center">
      <ToggleRuby>ハンター文字に変換</ToggleRuby>
      <Toggle value={mode === 'to-hiragana'} onChange={_onChange} />
      <ToggleRuby>ひらがなに変換</ToggleRuby>
    </div>
  )
}