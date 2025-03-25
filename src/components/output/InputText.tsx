import { useState } from "react"

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
      />
      <button type="submit">OK</button>
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