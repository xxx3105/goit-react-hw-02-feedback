import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions ';
import { Statistics } from 'components/Statistics/Statistics';
import { TitleOfBlocks } from 'styles/GlobalStyle';
import { Notification } from 'components/Notification/Notification';

export const SectionOne = ({
  titleOne,
  onIncrGood,
  onIncrNeutr,
  onIncrBad,
}) => {
  return (
    <div>
      <TitleOfBlocks> {titleOne}</TitleOfBlocks>

      <FeedbackOptions
        onIncrGood={onIncrGood}
        onIncrNeutr={onIncrNeutr}
        onIncrBad={onIncrBad}
      />
    </div>
  );
};

export const SectionTwo = ({
  titleTwo,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const hasFeedback = good + neutral + bad > 0;

  return (
    <div>
      <TitleOfBlocks>{titleTwo}</TitleOfBlocks>
      {hasFeedback ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
