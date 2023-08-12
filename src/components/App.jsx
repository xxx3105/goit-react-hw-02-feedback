import 'modern-normalize';
import React, { Component } from 'react';
import { Layout } from './Layout';
import { KeyObjectHandler } from './KeyObjectHandler/KeyObjectHandler';
import { Container } from 'styles/GlobalStyle';

export const App = () => {
  return (
    <Layout>
      <Container>
        <FeedbackHandler />
      </Container>
    </Layout>
  );
};

export class FeedbackHandler extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedbacks = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutralFeedbacks = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBadFeedbacks = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const TotalFeedbacks = good + neutral + bad;
    return TotalFeedbacks;
  };

  countTotalPositiveFeedback = () => {
    const { good, neutral, bad } = this.state;
    const percOfFeedbacks = good / ((good + neutral + bad) / 100);
    return percOfFeedbacks.toFixed(0);
  };

  render() {
    return (
      <div>
        <KeyObjectHandler
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          onIncrGood={this.handleGoodFeedbacks}
          onIncrNeutr={this.handleNeutralFeedbacks}
          onIncrBad={this.handleBadFeedbacks}
          total={this.countTotalFeedback()}
          positivePercentage={this.countTotalPositiveFeedback()}
        />
      </div>
    );
  }
}
