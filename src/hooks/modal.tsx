import { useMemo, useRef, useState } from "react";

export function ModalContainer({ onClose, children }: {
  children?: React.ReactNode
  onClose?: () => void
}) {
  return (
    <div className="px-10 py-10 bg-slate-50 relative border-2 border-slate-300 rounded-xl max-w-[97vw] md:min-w-[40vw] shadow-sm">
      <button className="text-slate-400 text-2xl block absolute right-4 top-1" onClick={onClose}>×</button>
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