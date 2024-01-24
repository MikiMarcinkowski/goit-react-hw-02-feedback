

const Statistics = ({ title, good, neutral, bad, total, positivePercent }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercent }</p>
    </div>
  );
};


export default Statistics;