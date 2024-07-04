export default function TextArea({ paragraph, span }) {
  return (
    <p className="text-lg mb-8">
      {paragraph}
      <span className="hidden md:inline-block">{span}</span>
    </p>
  );
}
