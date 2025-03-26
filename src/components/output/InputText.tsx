import { useEffect, useState } from "react"
import { Button } from "../ui/Button"
import { ModalContainer, useModal } from "@/hooks/modal"

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

  useEffect(() => setText(defaultValue), [defaultValue])

  return (
    <form onSubmit={_onSubmit}>
      <textarea
        autoFocus
        onChange={onChange}
        id="input-mozies"
        value={text}
        placeholder="ここにひらがなを入力..."
        className="text-slate-700 min-h-32 tracking-wide outline-none border-2 border-slate-400 rounded-md px-3 py-2 mb-3 resize-none bg-white w-full placeholder:text-slate-400"
      />
      <Button type="submit" className="block">OK</Button>
    </form>
  )
}

export function InputMoziModal({ mozies, setMozies, close }: {
  mozies: string[]
  setMozies: (mozies: string[]) => void
  close: () => void
}) {
  const onSubmit = (t: string) => {
    close()
    setMozies(t.split(""))
  }

  return (
    <ModalContainer onClose={close}>
      <h3 className="font-bold text-slate-600 text-lg mb-1">キーボードで入力</h3>
      <p className="mb-5 text-slate-500 leading-7">
        ここに文字を入力すると、結果にその文字が反映されます。<br />
        ※入力はひらがなのみ対応しています<br />
      </p>
      <TextArea onSubmit={onSubmit} defaultValue={mozies.join("")} />
    </ModalContainer>
  )
}

export function MoziModalOpen(props: {
  mozies: string[]
  setMozies: (mozies: string[]) => void
}) {
  const { open, dialog, close } = useModal()
  return (<>
    {dialog}
    <Button onClick={() => open(<InputMoziModal close={close} {...props} />)}>キーボードで入力</Button>
  </>)
}