import { getImageUrl } from "@/utils";

export function HunterMozi({ children, textSize = 20 }: { 
  children: string 
  textSize?: number
}) {
  const url = getImageUrl(`/hunter-mozi/${children}.svg`)
  return (
    <img src={url} alt={children} width={textSize} height={textSize} />
  )
}