import React from 'react';
import { ButtonsStyle } from './FeedbackOptionsComponent.styled';

export const FeedbackOptionsComponent = ({ handleFeedbacks, currentValue }) => {
  const options = Object.keys(currentValue);

  return (
    <div>
      {options.map((option, index) => (
        <ButtonsStyle key={index} onClick={() => handleFeedbacks(option)}>
          {option}
        </ButtonsStyle>
      ))}
    </div>
  );
};
