export default function DashboardContainer({ children, isOpen }) {
  return (
    <div
      className={`transition-all duration-500 pt-16 z-[9999] ${
        isOpen ? " pl-0 md:pl-72" : "pl-16"
      }`}
    >
      <div className="px-6 md:px-2">{children}</div>
    </div>
  );
}
