import { SelectMode } from "@/utils"
import { Mozi } from "../HunterMozi"
import { Ruby } from "../ui/Ruby"

function TextAreaMozi({ children, mode, isShownRuby }: {
  children: string
  mode: SelectMode
  isShownRuby: boolean
}) {
  const inline = <Mozi className="text-3xl block text-slate-700" hunter={mode === "to-hunter-mozi"}>{children}</Mozi>
  return (
    <div>
      { isShownRuby 
        ? <Ruby ruby={<Mozi hunter={mode === "to-hiragana"}>{children}</Mozi>}>{inline}</Ruby>
        : inline
      }
    </div>
  )
}

export default function Result({ children, mode, isShownRuby }: {
  children: readonly string[]
  mode: SelectMode
  isShownRuby: boolean
}) {
  return (
    <div className="flex w-full flex-wrap gap-x-3 gap-y-5 justify-center">
      {children.map((mozi, i) => 
        <TextAreaMozi key={i} isShownRuby={isShownRuby} mode={mode}>{mozi}</TextAreaMozi>
      )}
    </div>
  )
}
