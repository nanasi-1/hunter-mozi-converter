import { useState } from "react"
import Toggle from "../ui/Toggle"

function ShowRubyToggle({ isShown, onChange }: {
  isShown: boolean
  onChange: (isShown: boolean) => void
}) {
  return (
    <div className="flex gap-x-3 items-center">
      <p className="text-slate-700">結果にルビを表示</p>
      <Toggle onOff value={isShown} onChange={onChange} />
    </div>
  )
}

export function useIsShownRuby() {
  const [isShownRuby, setIsShownRuby] = useState(true)
  const isShownRubyToggle = <ShowRubyToggle isShown={isShownRuby} onChange={setIsShownRuby} />
  return { isShownRubyToggle, isShownRuby }
}