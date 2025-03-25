import { useState } from "react";
import { MoziSelector } from "./components/MoziSelector";
import Result from "./components/output/Result";
import { useSelectMode } from "./components/output/Mode";

function App() {
  const [mozies, setMozies] = useState<string[]>([])
  const onSelect = (mozi: string) => setMozies(array => [...array, mozi])
  const { selectMode, selectModeToggle } = useSelectMode()

  return (
    <main className="p-10 w-screen">
      <div className="flex gap-x-7 w-full">
        <div>
          <MoziSelector mode={selectMode} onInput={onSelect} />
        </div>
        <div className="w-full">
          <h1 className="font-bold text-3xl pb-5">ハンター文字変換機</h1>
          <p className="pb-6">ようこそ。</p>
          {selectModeToggle}
          <div className="mt-10 px-6">
            <Result mozies={mozies} mode={selectMode} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
