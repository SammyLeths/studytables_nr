import { studyTwoData } from "./data";
import MiniTable from "./MiniTable";

import "./App.css";

function App() {
  return (
    <div className="table_container pt-2">
      <div className="title text-center pb-4 pt-2">
        <h1 className="text-5xl">Smart Finance</h1>
        <h3 className="text-base font-medium -mt-3">
          Stacked DataTable With Expandable Rows
        </h3>
      </div>
      <div className="table_wrapper p-3 bg-gray-300 overflow-x-auto">
        <table className="w-full table-auto border border-collapse border-slate-200">
          <tbody className="text-left">
            {studyTwoData.map((data, index) => (
              <MiniTable data={data} key={data.symbol + index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
