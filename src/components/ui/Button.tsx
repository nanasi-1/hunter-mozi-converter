import { tv } from "tailwind-variants";

export function Button({ className, ...props }
  :React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) {
  const base = tv({
    base: [
      "rounded", "bg-slate-400", "px-5", "py-2",
      "transition-colors", "text-slate-100"
    ],
    variants: {
      disabled: {
        true: ["cursor-not-allowed", "bg-slate-300"],
        false: ["cursor-pointer", "hover:bg-slate-500"]
      }
    }
  })
  return <button className={base({ className, disabled: props.disabled })} {...props} />
}