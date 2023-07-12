import { Buttons, Button } from "./FeedbackOptions.styled";
export const FeedbackOptions = ({ options, counter }) => (
  <Buttons>
    {options.map(option => {
      return (
        <Button type="button" key={option} onClick={() => counter(option)}>
          {option}
        </Button>
      );
    })}
  </Buttons>
);