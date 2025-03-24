import React, { useState } from "react";
import { MoziSelector } from "./components/MoziSelector";

function App () {
  const [mozies, setMozies] = useState<string[]>([])
  // const [selectMode, setSelectMode] = useState(false)

  const onSelect = (mozi: string) => setMozies(array => [...array, mozi])

  return (
    <main className="p-10 w-screen">
      <h1 className="font-bold text-3xl pb-5">ハンター文字変換機</h1>
      <div className="flex gap-x-7 w-full"> 
        <div>
          <Header2>モード</Header2>
          <Header2>文字</Header2>
          <MoziSelector mode="to-hiragana" onInput={onSelect} />
        </div>
        {/* <div className="flex gap-x-3">
          {mozies.map(mozi => <HunterMozi textSize={30} children={mozi} />)}
        </div> */}
        <div>
          <div className="flex gap-x-3 w-full flex-wrap justify-center">
            {mozies.map((mozi, i) => <div key={i} className="text-2xl h-10" children={mozi} />)}
          </div> 
        </div>
      </div>
    </main>
  );
};

function Header2({ children }: {
  children: React.ReactNode
}) {
  return <h2 className="font-bold text-xl pb-5">{children}</h2>
}

export default App;
