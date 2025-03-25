import { MoziSelector } from "./components/MoziSelector";
import Result from "./components/output/Result";
import { useSelectMode } from "./components/output/Mode";
import { Backspace, ClearInput } from "./components/output/ClearInput";
import { useMozies } from "./hooks/mozies";

function App() {
  const { mozies, ...controlMozi } = useMozies()
  const { selectMode, selectModeToggle } = useSelectMode()

  return (
    <main className="p-10 w-screen">
      <div className="flex gap-x-7 w-full">
        <div>
          <MoziSelector mode={selectMode} onInput={controlMozi.push} />
        </div>
        <div className="w-full">
          <h1 className="font-bold text-3xl pb-5">ハンター文字変換機</h1>
          <p className="pb-6">ようこそ。</p>
          {selectModeToggle}
          <div className="mt-10 px-6">
            <Result mozies={mozies} mode={selectMode} />
          </div>
          <Backspace disabled={mozies.length === 0} onClick={controlMozi.shift} />
          <ClearInput disabled={mozies.length === 0} onClick={controlMozi.clear} />
        </div>
      </div>
    </main>
  );
};

export default App;
