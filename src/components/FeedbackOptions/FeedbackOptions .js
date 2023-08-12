import { ButtonBlockPos, ButtonsStyle } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onIncrGood, onIncrNeutr, onIncrBad }) => {
  return (
    <ButtonBlockPos>
      <ButtonsStyle onClick={onIncrGood}> Good</ButtonsStyle>
      <ButtonsStyle onClick={onIncrNeutr}> Neutral</ButtonsStyle>
      <ButtonsStyle onClick={onIncrBad}> Bad</ButtonsStyle>
    </ButtonBlockPos>
  );
};
