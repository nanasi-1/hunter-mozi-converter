import { MoziSelector } from "./components/MoziSelector";
import Result from "./components/output/Result";
import { useSelectMode } from "./components/output/Mode";
import { Backspace, ClearInput } from "./components/output/ClearInput";
import { useMozies } from "./hooks/mozies";
import { MoziModalOpen } from "./components/output/InputText";
import { useIsShownRuby } from "./components/output/IsShownRuby";

function Layout({ children: [leftMiddle, rightTop, rightBottom] }: {
  children: React.ReactNode[]
}) {
  const isPC = window.innerWidth > 768
  if (isPC) {
    return (
      <div className="flex gap-x-7 w-full">
        {leftMiddle}
        <div className="w-full relative">
          {rightTop}
          {rightBottom}
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col">
        {rightTop}
        {leftMiddle}
        {rightBottom}
      </div>
    )
  }
}

function App() {
  const { mozies, ...controlMozi } = useMozies()
  const { selectMode, selectModeToggle } = useSelectMode()
  const { isShownRuby, isShownRubyToggle } = useIsShownRuby()

  return (
    <main className="px-6 md:px-10 py-7 w-screen bg-slate-50">
      <Layout>
        <div>
          <MoziSelector mode={selectMode} onInput={controlMozi.push} />
        </div>
        <div>
          <h1 className="font-bold text-3xl pb-5 pt-3 text-slate-700 text-center md:text-start">ハンター文字変換サイト</h1>
          <p className="pb-6 text-slate-700">ようこそ。</p>
          {selectModeToggle}
          <div className="mt-10 px-6 mb-14">
            <Result isShownRuby={isShownRuby} mode={selectMode}>{mozies}</Result>
          </div>
        </div>
        <div className="sticky top-[70vh]">
          <h3 className="mt-5 font-bold text-slate-700 text-lg">操作</h3>
          <div className="mt-2 flex gap-x-3 items-center flex-wrap gap-y-3 md:flex-row-reverse md:justify-end">
            <Backspace disabled={mozies.length === 0} onClick={controlMozi.shift} />
            <ClearInput disabled={mozies.length === 0} onClick={controlMozi.clear} />
            <MoziModalOpen mode={selectMode} mozies={mozies} setMozies={controlMozi.set} />
          </div>
          <h3 className="mt-6 font-bold text-slate-700 text-lg">設定</h3>
          <div className="mt-2">
            {isShownRubyToggle}
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default App;
