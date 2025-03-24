import { HunterMozi } from "./components/HunterMozi";
import { MoziSelector } from "./components/MoziSelector";

function App () {
  return (
    <main>
      <h1>ハンター文字変換機</h1>
      <HunterMozi>あ</HunterMozi>
      <div className="px-10">
        <MoziSelector mode="to-hunter-mozi" onInput={h => console.log(h)} />
      </div>
    </main>
  );
};

export default App;
