export default function FormSection({ number, total, title, description, children }) {
  return (
    <section
      aria-labelledby={`section-${number}-heading`}
      className="scroll-mt-6 border-t border-slate-200 bg-white px-5 py-8 first:border-t-0 sm:px-8"
    >
      <div className="mb-7">
        <p className="mb-2 text-sm font-semibold text-elevion-gold">
          Section {number} of {total}
        </p>
        <h2
          id={`section-${number}-heading`}
          className="font-heading text-2xl font-semibold text-elevion-navy"
        >
          {title}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-elevion-charcoal sm:text-base">
          {description}
        </p>
      </div>
      <div className="grid gap-5">{children}</div>
    </section>
  );
}
