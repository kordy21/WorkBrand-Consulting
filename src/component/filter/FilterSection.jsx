function FilterSection({ label, children, isOpen, onToggle, id }) {
  return (
    <section className="mb-6" aria-labelledby={id}>
      <button
        className="w-full flex items-center justify-between font-semibold mb-2 focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        id={id}
        onClick={onToggle}
        type="button"
      >
        <span>{label}</span>
        <span className="ml-2">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        id={`${id}-panel`}
        className={`${isOpen ? "block" : "hidden"}`}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </section>
  );
}
export default FilterSection;
