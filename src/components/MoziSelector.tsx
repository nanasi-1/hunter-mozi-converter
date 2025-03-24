import { HIRAGANA_LIST } from "@/features/data";
import { HunterMozi } from "./HunterMozi";

export function MoziSelector() {
  return (
    <div className="border-t-2 border-r-2 grid grid-cols-[repeat(5,100px)] w-[500px]">
      {HIRAGANA_LIST.map(hiragana => {return (
        <SelectButton key={hiragana}>
          <HunterMozi children={hiragana} />
        </SelectButton>
      )})}
    </div>
  )
}

function SelectButton({ children }: {
  children: React.ReactNode
}) {
  return (
    <button className="flex justify-center align-middle border-b-2 border-l-2 min-h-[70px] hover:bg-slate-100">
      {children}
    </button>
  )
}