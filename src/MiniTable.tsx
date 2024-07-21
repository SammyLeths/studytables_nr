import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import RangeCell from "./RangeCell";
import { checkSign, checkColor, numberFormatter } from "./lib/utils";

interface MiniTableProps {
  data: {
    symbol: string;
    name: string;
    price: number;
    change: number;
    percent_change: number;
    volume: number;
    average_volume: number;
    market_cap: number;
    pe_ratio: number;
    week_range: {
      position: string;
      lower: number;
      upper: number;
    };
  };
}

const MiniTable = ({ data }: MiniTableProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRow = () => {
    setIsOpen(!isOpen);
  };

  const [activeCells, setActiveCells] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleActive = (cellKey: string) => {
    setActiveCells((prev) => ({ ...prev, [cellKey]: !prev[cellKey] }));
  };

  return (
    <tr key={data.symbol} className="odd:bg-white even:bg-slate-100">
      <td>
        <table className="w-full table-auto border border-collapse border-slate-200">
          <tbody>
            <tr className="h-10">
              <th className="w-[10%] px-3 border border-slate-200 text-center">
                <input
                  type="checkbox"
                  className="form-checkbox rounded border-slate-300"
                  aria-label="Select All"
                />
              </th>
              <th className="w-[42%] px-4 border border-slate-200">Symbol</th>
              <td className="m-0 p-0 border border-slate-200 h-10 cursor-pointer">
                <div className="flex justify-between items-center h-[100%]">
                  <div
                    className={`flex items-center h-[100%] w-[100%] px-4 text-blue-700 font-semibold ${
                      activeCells["symbol"] && `bg-gray-300`
                    }`}
                    onClick={() => toggleActive("symbol")}
                  >
                    {data.symbol}
                  </div>
                  <div className="px-3" onClick={toggleRow}>
                    {isOpen ? (
                      <ChevronUpIcon className="size-7" />
                    ) : (
                      <ChevronDownIcon className="size-7" />
                    )}
                  </div>
                </div>
              </td>
            </tr>
            {isOpen && (
              <>
                <tr className="h-10">
                  <th rowSpan={9}></th>
                  <th className="px-4 border border-slate-200">Name</th>
                  <td
                    className={`px-4 border border-slate-200 cursor-pointer ${
                      activeCells["name"] && `bg-gray-300`
                    }`}
                    onClick={() => toggleActive("name")}
                  >
                    {data.name}
                  </td>
                </tr>
                <tr className="h-10">
                  <th className="px-4 border border-slate-200">
                    Price (Intraday)
                  </th>
                  <td
                    className={`px-4 border border-slate-200 font-semibold cursor-pointer ${
                      activeCells["price"] && `bg-gray-300`
                    }`}
                    onClick={() => toggleActive("price")}
                  >
                    {data.price}
                  </td>
                </tr>
                <tr className="h-10">
                  <th className="px-4 border border-slate-200">Change</th>
                  <td
                    className={`px-4 border border-slate-200 font-semibold cursor-pointer ${checkColor(
                      data.change
                    )} ${activeCells["change"] && `bg-gray-300`}`}
                    onClick={() => toggleActive("change")}
                  >
                    {checkSign(data.change)}
                  </td>
                </tr>
                <tr className="h-10">
                  <th className="px-4 border border-slate-200">% Change</th>
                  <td
                    className={`px-4 border border-slate-200 font-semibold cursor-pointer ${checkColor(
                      data.percent_change
                    )} ${activeCells["percent_change"] && `bg-gray-300`}`}
                    onClick={() => toggleActive("percent_change")}
                  >
                    {checkSign(data.percent_change) + "%"}
                  </td>
                </tr>
                <tr className="h-10">
                  <th className="px-4 border border-slate-200">Volume</th>
                  <td
                    className={`px-4 border border-slate-200 cursor-pointer ${
                      activeCells["volume"] && `bg-gray-300`
                    }`}
                    onClick={() => toggleActive("volume")}
                  >
                    {numberFormatter(data.volume)}
                  </td>
                </tr>
                <tr className="h-10">
                  <th className="px-4 border border-slate-200">
                    Avg Vol (3 months)
                  </th>
                  <td
                    className={`px-4 border border-slate-200 cursor-pointer ${
                      activeCells["average_volume"] && `bg-gray-300`
                    }`}
                    onClick={() => toggleActive("average_volume")}
                  >
                    {numberFormatter(data.average_volume)}
                  </td>
                </tr>
                <tr className="h-10">
                  <th className="px-4 border border-slate-200">Market Cap</th>
                  <td
                    className={`px-4 border border-slate-200 cursor-pointer ${
                      activeCells["market_cap"] && `bg-gray-300`
                    }`}
                    onClick={() => toggleActive("market_cap")}
                  >
                    {numberFormatter(data.market_cap)}
                  </td>
                </tr>
                <tr className="h-10">
                  <th className="px-4 border border-slate-200">
                    PE Ratio (TTM)
                  </th>
                  <td
                    className={`px-4 border border-slate-200 cursor-pointer ${
                      activeCells["pe_ratio"] && `bg-gray-300`
                    }`}
                    onClick={() => toggleActive("pe_ratio")}
                  >
                    {numberFormatter(data.pe_ratio)}
                  </td>
                </tr>
                <tr className="h-10">
                  <th className="px-4 border border-slate-200">
                    52 Week Range
                  </th>
                  <RangeCell
                    week_range={data.week_range}
                    isActive={activeCells["week_range"]}
                    toggleActive={() => toggleActive("week_range")}
                  />
                </tr>
              </>
            )}
          </tbody>
        </table>
      </td>
    </tr>
  );
};

export default MiniTable;
