import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateBars } from "../../actions";
import Bar from "../Bar/bar";
import "./barsContainer.css";

const BarsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateBars(5));
  }, [dispatch]);

  const allIds = useSelector((state) => state.bars.allIds);

  return (
    <div className="bar-container">
      {allIds.map((id) => (
        <Bar key={id} barId={id} />
      ))}
    </div>
  );
};

export default BarsContainer;
