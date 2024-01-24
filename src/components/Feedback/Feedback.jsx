import { Component } from 'react';
import React from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const Section = ({ title, children }) => {
      return (
        <section>
          <h2>{title}</h2>
          {children}
        </section>
      );
    };

    // const options = Object.keys(this.state);
    // console.log(options);
    
    const FeedbackOptions = ({ options }) => {
      return (<div>
        <div>
   
         {options.map(option => (
       
          <button type="button" key={option}>
            {option}
          </button>
        )
      )}</div>

 </div>)
    };




console.log(FeedbackOptions)
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} />
        </Section>
      </div>
    );
  }
}

export default Feedback;
// 