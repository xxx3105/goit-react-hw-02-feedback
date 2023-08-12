import { ResultDesign, StatisticBlockPos } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticBlockPos>
      <ResultDesign>Good: {good}</ResultDesign>
      <ResultDesign>Neutral: {neutral}</ResultDesign>
      <ResultDesign>Bad: {bad}</ResultDesign>
      <ResultDesign>Total: {total}</ResultDesign>
      <ResultDesign>Positive feedback: {positivePercentage}%</ResultDesign>
    </StatisticBlockPos>
  );
};
