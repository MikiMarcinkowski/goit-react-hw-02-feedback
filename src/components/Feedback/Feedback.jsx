import { Children, Component } from 'react';
import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const Statistics = ({ title, good, neutral, bad }) => {
      return (
        <div>
          <h2>{title}</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
      );
    };

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} />
        </Section>
        <Statistics title="Statistics" {...this.state} ></Statistics>
      </div>
    );
  }
}

export default Feedback;
//
