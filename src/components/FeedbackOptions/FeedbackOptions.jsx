const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <div>
        {options.map(option => (
          <button type="button" key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedbackOptions;
