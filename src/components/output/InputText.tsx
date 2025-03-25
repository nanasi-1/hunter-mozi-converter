import { useState } from "react"
import { Button } from "../ui/Button"

function TextArea({ onSubmit, defaultValue }: {
  onSubmit: (value: string) => void
  defaultValue: string
}) {
  const [text, setText] = useState(defaultValue)
  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => setText(e.target.value)
  const _onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    onSubmit(text)
  }

  return (
    <form onSubmit={_onSubmit}>
      <textarea
        onChange={onChange}
        id="input-mozies"
        value={text}
        className="text-slate-700 tracking-wide outline-none border-2 border-slate-500 rounded-md px-2 py-2 mb-2 resize-none bg-white w-full"
      />
      <Button type="submit" className="block">OK</Button>
    </form>
  )
}

export function InputMoziModal({ mozies, setMozies }: {
  mozies: string[]
  setMozies: (mozies: string[]) => void
}) {
  return (
    <div>
      <TextArea onSubmit={t => setMozies(t.split(""))} defaultValue={mozies.join("")} />
    </div>
  )
}