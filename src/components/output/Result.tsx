import { SelectMode } from "@/utils"
import { Mozi } from "../HunterMozi"
import { Ruby } from "../ui/Ruby"

function TextAreaMozi({ children, mode }: {
  children: string
  mode: SelectMode
}) {
  return (
    <div>
      <Ruby ruby={<Mozi hunter={mode === "to-hiragana"}>{children}</Mozi>}>
        <Mozi className="text-3xl block" hunter={mode === "to-hunter-mozi"}>{children}</Mozi>
      </Ruby>
    </div>
  )
}

function TextAreaInner({ children, mode }: {
  children: readonly string[]
  mode: SelectMode
}) {
  return (
    <div className="flex w-full flex-wrap gap-x-3 gap-y-5 justify-center">
      {children.map((mozi, i) => <TextAreaMozi key={i} mode={mode}>{mozi}</TextAreaMozi>)}
    </div>
  )
}

export default function Result({ mozies, mode }: {
  mozies: readonly string[]
  mode: SelectMode
}) {
  return (
    <TextAreaInner mode={mode} children={mozies} />
  )
}