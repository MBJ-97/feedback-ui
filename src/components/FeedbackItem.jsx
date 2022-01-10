import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";

function FeedbackItem({ item, handleDelete }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <div>
      <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FaTimes color="purple" />
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    </div>
  );
}

export default FeedbackItem;
