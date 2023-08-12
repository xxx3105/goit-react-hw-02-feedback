import { TitleOfBlocks } from 'styles/GlobalStyle';
import { ResultDesign, StatisticBlockPos } from './StatisticBlock.styled';

export const StatisticBlock = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticBlockPos>
      <TitleOfBlocks>Statistics</TitleOfBlocks>
      <ResultDesign>Good: {good}</ResultDesign>
      <ResultDesign>Neutral: {neutral}</ResultDesign>
      <ResultDesign>Bad: {bad}</ResultDesign>
      <ResultDesign>Total: {total}</ResultDesign>
      <ResultDesign>Positive feedback: {positivePercentage}%</ResultDesign>
    </StatisticBlockPos>
  );
};
