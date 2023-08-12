import { ButtonBlock } from '../ButtonBlock/ButtonBlock';
import { StatisticBlock } from '../StatisticsBlock/StatisticBlock';

export const KeyObjectHandler = ({
  good,
  neutral,
  bad,
  onIncrGood,
  onIncrNeutr,
  onIncrBad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ButtonBlock
        onIncrGood={onIncrGood}
        onIncrNeutr={onIncrNeutr}
        onIncrBad={onIncrBad}
      />
      <StatisticBlock
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </div>
  );
};

// export class FeedbackHandler extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleGoodFeedbacks = () => {
//     this.setState(prevState => {
//       return {
//         good: prevState.good + 1,
//       };
//     });
//   };

//   handleNeutralFeedbacks = () => {
//     this.setState(prevState => {
//       return {
//         neutral: prevState.neutral + 1,
//       };
//     });
//   };

//   handleBadFeedbacks = () => {
//     this.setState(prevState => {
//       return {
//         bad: prevState.bad + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const TotalFeedbacks = good + neutral + bad;
//     return TotalFeedbacks;
//   };

//   countTotalPositiveFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const percOfFeedbacks = good / ((good + neutral + bad) / 100);
//     return percOfFeedbacks.toFixed(0);
//   };

//   //countPositiveFeedbackPercentage;

//   render() {
//     return (
//       <div>
//         <ButtonBlock
//           onIncrGood={this.handleGoodFeedbacks}
//           onIncrNeutr={this.handleNeutralFeedbacks}
//           onIncrBad={this.handleBadFeedbacks}
//         />
//         <StatisticBlock
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countTotalPositiveFeedback()}
//         />
//       </div>
//     );
//   }
// }
