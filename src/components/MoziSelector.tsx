import { HIRAGANA_LIST } from "@/features/data";
import { Mozi } from "./HunterMozi";
import { SelectMode } from "@/utils";

export function MoziSelector({ onInput, mode }: {
  onInput?: (hiragana: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  mode: SelectMode
}) {
  return (
    <div className="border-t-2 border-r-2 grid grid-cols-[repeat(5,100px)] w-[500px]">
      {HIRAGANA_LIST.map((hiragana, i) => (
        <SelectButton key={i} onClick={hiragana ? e => onInput?.(hiragana, e) : void 0}>
          {hiragana ? <>
            <SelectButtonRuby>
              <Mozi hunter={mode === "to-hunter-mozi"}>{hiragana}</Mozi>
            </SelectButtonRuby>
            <Mozi hunter={mode === "to-hiragana"} className="text-2xl">{hiragana}</Mozi>
          </> : null}
        </SelectButton>
      ))}
    </div>
  )
}

function SelectButtonRuby({ children }: {
  children: React.ReactNode
}) {
  return <span className="absolute text-slate-400 text-sm left-0 top-0 px-2 py-1">{children}</span>
}

function SelectButton({ children, onClick }: {
  children: React.ReactNode,
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}) {
  return (
    <button
      onClick={onClick}
      className="relative flex justify-center items-center border-b-2 border-l-2 min-h-[70px] hover:bg-slate-100"
    >
      {children}
    </button>
  )
}