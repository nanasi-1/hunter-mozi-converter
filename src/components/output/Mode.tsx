import { SelectMode } from "@/utils";
import Toggle, { ToggleRuby } from "../ui/Toggle";
import { useState } from "react";

function ModeToggle({ mode, onChange }: {
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

export function useSelectMode() {
  const [selectMode, setMode] = useState<SelectMode>("to-hiragana")
  const selectModeToggle = <ModeToggle mode={selectMode} onChange={setMode} />
  return { selectModeToggle, selectMode }
}