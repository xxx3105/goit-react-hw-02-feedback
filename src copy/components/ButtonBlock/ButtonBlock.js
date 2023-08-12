import { TitleOfBlocks } from 'styles/GlobalStyle';
import { ButtonBlockPos, ButtonsStyle } from './ButtonBlock.styled';

export const ButtonBlock = ({ onIncrGood, onIncrNeutr, onIncrBad }) => {
  return (
    <div>
      <TitleOfBlocks>Please leave feedback</TitleOfBlocks>
      <ButtonBlockPos>
        <ButtonsStyle onClick={onIncrGood}> Good</ButtonsStyle>
        <ButtonsStyle onClick={onIncrNeutr}> Neutral</ButtonsStyle>
        <ButtonsStyle onClick={onIncrBad}> Bad</ButtonsStyle>
      </ButtonBlockPos>
    </div>
  );
};
