export default function Textarea({ classes, placeholderText }) {
  return (
    <textarea
      type="text"
      className={classes}
      placeholder={placeholderText}
    ></textarea>
  );
}
