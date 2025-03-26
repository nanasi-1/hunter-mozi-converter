import { HunterMozi } from "./HunterMozi"

function Anchor(props
  : React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
) {
  return <a className="text-slate-700 underline hover:text-slate-600" {...props} />
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 text-slate-500 text-center">
      <ul className="flex justify-center gap-x-2">
        <li>Links:</li>
        <li><Anchor href="https://github.com/nanasi-1/hunter-mozi-converter" target="_blank">GitHub</Anchor></li>
        <li><Anchor href="https://x.com/n1_code" target="_blank">X(@n1_code)</Anchor></li>
      </ul>
      <p className="mt-1">
        Credits to <Anchor href="https://half-a.net/sozai-page4" target="_blank">ハンター文字フォント | Half Adder</Anchor>
      </p>
      <p className="mt-5 text-slate-700">
        <HunterMozi>これもおしかつ</HunterMozi>？
      </p>
    </footer>
  )
}