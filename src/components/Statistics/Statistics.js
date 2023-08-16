import { ListOfStats } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total }) => {
  const posFeedb = ((good / total) * 100).toFixed(0);
  return (
    <div>
      <ListOfStats>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {posFeedb}%</li>
      </ListOfStats>
    </div>
  );
};
