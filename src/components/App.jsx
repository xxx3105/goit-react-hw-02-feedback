import 'modern-normalize';
import React from 'react';
import { Layout } from './Layout';
import { Container, Message, TitleOfBlocks } from 'styles/GlobalStyle';
import { FeedbackOptionsComponent } from './FeedbackOptionsComponent/FeedbackOptionsComponent'; // Исправлен импорт
import { Statistics } from './Statistics/Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbacks = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const valuesSumm = Object.values(this.state);
    const totalFeedbacks = valuesSumm.reduce(
      (storage, existValue) => storage + existValue,
      0
    );
    return totalFeedbacks;
  };

  render() {
    return (
      <Layout>
        <Container>
          <TitleOfBlocks>Please leave feedback</TitleOfBlocks>
          <FeedbackOptionsComponent
            currentValue={this.state}
            handleFeedbacks={this.handleFeedbacks}
          />

          <TitleOfBlocks>Statistic</TitleOfBlocks>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
            />
          ) : (
            <Message>There is no feedback</Message>
          )}
        </Container>
      </Layout>
    );
  }
}
