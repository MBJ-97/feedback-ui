import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  //calculate rating avg
  let avg = feedback.reduce((acc, cur) => {
    return acc + cur.rating / feedback.length;
  }, 0);

  avg = avg.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} reviews</h4>
      <h4>Avg rating : {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}

export default FeedbackStats;
