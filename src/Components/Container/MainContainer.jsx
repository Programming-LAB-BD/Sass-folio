export default function Container({ children }) {
  return (
    <div className="max-w-screen min-h-screen bg-gradient-to-r from-primary dark:from-dark_primary to-secondary dark:to-dark_secondary pt-18 md:pt-20">
      {children}
    </div>
  );
}
