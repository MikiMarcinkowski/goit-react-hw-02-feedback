import { Component } from 'react';
import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';



class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad; 
  }
  
  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback()
    const { good } = this.state;
    return Math.round(good / total * 100) + ' %';
   
    
  }
  
  render() {


    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} />
        </Section>
        <Statistics title="Statistics" {...this.state} total={this.countTotalFeedback()} positivePercent={this.countPositiveFeedbackPercentage()} />
      </div>
    );
  }
}

export default Feedback;
//
