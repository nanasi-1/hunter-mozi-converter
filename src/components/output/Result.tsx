import { SelectMode } from "@/utils"
import { Mozi } from "../HunterMozi"

export default function Result({ mozies, mode }: {
  mozies: readonly string[]
  mode: SelectMode
}) {
  return (
    <div className="flex gap-x-3 w-full flex-wrap justify-center">
      {mozies.map((mozi, i) => 
        <Mozi key={i} className="text-2xl h-10" hunter={mode === "to-hunter-mozi"}>{mozi}</Mozi>
      )}
    </div> 
  )
}