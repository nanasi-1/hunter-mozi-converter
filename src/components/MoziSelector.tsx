import { HIRAGANA_LIST } from "@/features/data";
import { Mozi } from "./HunterMozi";
import { SelectMode } from "@/utils";
import { Ruby } from "./ui/Ruby";

export function MoziSelector({ onInput, mode }: {
  onInput?: (hiragana: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  mode: SelectMode
}) {
  return (
    <div className="border-slate-200 bg-white border-t-2 border-r-2 grid grid-cols-5 md:grid-cols-[repeat(5,100px)] md:w-[500px] box-content">
      {HIRAGANA_LIST.map((hiragana, i) => (
        <SelectButton 
          key={i} 
          onClick={hiragana ? e => onInput?.(hiragana, e) : void 0}
          disabled={hiragana === null}
        >
          {hiragana ? <>
            <Ruby ruby={<SelectButtonRuby mode={mode} children={hiragana} />}>
              <Mozi hunter={mode === "to-hiragana"} className="text-2xl">{hiragana}</Mozi>
            </Ruby>
          </> : null}
        </SelectButton>
      ))}
    </div>
  )
}

function SelectButtonRuby({ children, mode }: {
  children: string
  mode: SelectMode
}) {
  return <Mozi hunter={mode === "to-hunter-mozi"} className="absolute left-0 top-0 px-1 md:px-2 py-1 text-xs md:text-sm">{children}</Mozi>
}

function SelectButton({ children, onClick, disabled }: {
  children: React.ReactNode,
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled: boolean
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="cursor-pointer relative text-slate-700 border-slate-200 flex justify-center items-center border-b-2 border-l-2 min-h-[60px] hover:bg-slate-100 transition-colors"
    >
      {children}
    </button>
  )
}