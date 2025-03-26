import { MoziSelector } from "./components/MoziSelector";
import Result from "./components/output/Result";
import { useSelectMode } from "./components/output/Mode";
import { Backspace, ClearInput } from "./components/output/ClearInput";
import { useMozies } from "./hooks/mozies";
import { MoziModalOpen } from "./components/output/InputText";
import { useIsShownRuby } from "./components/output/IsShownRuby";

function App() {
  const { mozies, ...controlMozi } = useMozies()
  const { selectMode, selectModeToggle } = useSelectMode()
  const { isShownRuby, isShownRubyToggle } = useIsShownRuby()

  return (
    <main className="px-10 py-7 w-screen bg-slate-50">
      <div className="flex gap-x-7 w-full">
        <div>
          <MoziSelector mode={selectMode} onInput={controlMozi.push} />
        </div>
        <div className="w-full relative">
          <h1 className="font-bold text-3xl pb-5 pt-3 text-slate-700">ハンター文字変換サイト</h1>
          <p className="pb-6 text-slate-700">ようこそ。</p>
          {selectModeToggle}
          <div className="mt-10 px-6 mb-14">
            <Result isShownRuby={isShownRuby} mode={selectMode}>{mozies}</Result>
          </div>
          <div className="sticky top-[70vh]">
            <h3 className="mt-5 font-bold text-slate-700 text-lg">操作</h3>
            <div className="mt-2 flex gap-x-3 items-center">
              <MoziModalOpen mode={selectMode} mozies={mozies} setMozies={controlMozi.set} />
              <ClearInput disabled={mozies.length === 0} onClick={controlMozi.clear} />
              <Backspace disabled={mozies.length === 0} onClick={controlMozi.shift} />
            </div>
            <h3 className="mt-6 font-bold text-slate-700 text-lg">設定</h3>
            <div className="mt-2">
              {isShownRubyToggle}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
