import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

//here we set the provider & state or value we wanna pass are going into value
export const FeedbackProvider = ({ children }) => {
  // here we simulate some data
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // loading by default

  // bring data from mock backend
  useEffect(() => {
    setTimeout(() => {
      fetchFeedback();
    }, 3000);
  }, []);

  const fetchFeedback = async () => {
    const res = await fetch("/feedback?_sort=id&_order=desc");
    const data = await res.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // Moved the *delete* (& all other functions in app state level) function to context
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure ?"))
      await fetch(`/feedback/${id}`, {
        method: "DELETE",
      });
    setFeedback(feedback.filter((i) => i.id !== id));
  };

  // Adding feedback here
  const addFeedback = async (newFeedback) => {
    const res = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await res.json();

    setFeedback([data, ...feedback]); // set the new with current that were bringed using destructuring
  };

  // edit feedback functionality
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    editMode: false,
  });

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      editMode: true,
    });
  };

  const updateFeedback = async (id, updItem) => {
    const res = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await res.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
