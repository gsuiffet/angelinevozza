import regexifyString from "regexify-string";
import { Title } from "types/model";

interface EmphasisProps {
  title: Title;
}

const Emphasis = ({ title }: EmphasisProps) => {
  if (typeof title === "string") {
    return title;
  }

  return (
    <>
      {regexifyString({
        pattern: new RegExp(title.emphasis.join("|"), "gi"),
        decorator: (match, index) => <em key={`${match}${index}`}>{match}</em>,
        input: title.text,
      })}
    </>
  );
};

export default Emphasis;
