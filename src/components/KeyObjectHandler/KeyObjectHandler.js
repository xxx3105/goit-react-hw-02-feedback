import { SectionOne, SectionTwo } from 'components/Section/Section';

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
      <SectionOne
        titleOne="Please leave feedback"
        onIncrGood={onIncrGood}
        onIncrNeutr={onIncrNeutr}
        onIncrBad={onIncrBad}
      />

      <SectionTwo
        titleTwo="Statistic"
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      ></SectionTwo>
    </div>
  );
};
