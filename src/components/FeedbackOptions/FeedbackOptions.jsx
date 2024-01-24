 const FeedbackOptions = ({ options }) => {
  return (
    <div>
      <div>
        {options.map(option => (
          <button type="button" key={option}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedbackOptions