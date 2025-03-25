import { Button } from "../ui/Button"

export function ClearInput({ onClick, disabled }: {
  onClick?: () => void
  disabled: boolean
}) {
  return (
    <Button onClick={onClick} disabled={disabled}>全てクリア</Button>
  )
}

export function Backspace({ onClick, disabled }: {
  onClick?: () => void
  disabled: boolean
}) {
  return (
    <Button className="block" onClick={onClick} disabled={disabled}>←</Button>
  )
}