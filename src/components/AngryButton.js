import { useReducer } from "react";

function AngryButton(props) {
  const [ anger, dispatch ] = useReducer((anger, action) => {
    return anger > 1 ? 0 : anger + action;
  }, 0);

  return (
    <button style={{ backgroundColor: `rgba(255,0,0,${anger})` }} onClick={() => dispatch(0.1)} className="AngryButton">
      {/* If you have NOT reached the maximum: */}
      {anger < 1 && <span>Don't click me too much! </span>}
      {/* If you HAVE reached the maximum: */}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;