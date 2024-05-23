import { range } from "./utils";

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(numRows).map(() => (
        <div className="row">
          {range(numCols).map(() => (
            <div className="cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
