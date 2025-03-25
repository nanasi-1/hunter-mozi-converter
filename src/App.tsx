import { useState } from "react";
import { MoziSelector } from "./components/MoziSelector";
import Result from "./components/output/Result";
import { SelectMode } from "./utils";
import ModeToggle from "./components/output/Mode";

function App() {
  const [mozies, setMozies] = useState<string[]>([])
  const [selectMode, setSelectMode] = useState<SelectMode>("to-hiragana")
  const onSelect = (mozi: string) => setMozies(array => [...array, mozi])

  return (
    <main className="p-10 w-screen">
      <div className="flex gap-x-7 w-full">
        <div>
          <MoziSelector mode={selectMode} onInput={onSelect} />
        </div>
        <div className="w-full">
          <h1 className="font-bold text-3xl pb-5">ハンター文字変換機</h1>
          <p className="pb-6">ようこそ。</p>
          <ModeToggle mode={selectMode} onChange={setSelectMode} />
          <div className="mt-10 px-6">
            <Result mozies={mozies} mode={selectMode} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
