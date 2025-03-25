import { useMemo, useRef, useState } from "react";

export function ModalContainer({ onClose, children }: {
  children?: React.ReactNode
  onClose?: () => void
}) {
  return (
    <div onClick={e => e.stopPropagation()} className="h-screen bg-slate-50">
      <button onClick={onClose}>×</button>
      {children}
    </div>
  )
}

export function useModal() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [component, setComponent] = useState<React.ReactNode>(null)
  const dialog = useMemo(() => <dialog ref={dialogRef}>{component}</dialog>, [component])

  const open = (children: React.ReactNode) => {
    setComponent(children)
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()

  return { open, close, dialog }
}