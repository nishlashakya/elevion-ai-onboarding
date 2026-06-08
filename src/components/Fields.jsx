function FieldShell({ id, label, helper, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-elevion-navy">
        {label}
      </label>
      {helper ? (
        <p id={`${id}-helper`} className="mt-1 text-sm leading-5 text-slate-600">
          {helper}
        </p>
      ) : null}
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-2 text-sm font-medium text-red-700">{error}</p> : null}
    </div>
  );
}

const inputClasses =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-elevion-charcoal shadow-sm transition focus:border-elevion-navy focus:ring-2 focus:ring-elevion-gold/35';

export function TextField({
  id,
  label,
  value,
  onChange,
  helper,
  error,
  type = 'text',
  placeholder = '',
  autoComplete,
  required = false,
}) {
  return (
    <FieldShell id={id} label={label} helper={helper} error={error}>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={helper ? `${id}-helper` : undefined}
        className={inputClasses}
      />
    </FieldShell>
  );
}

export function TextAreaField({
  id,
  label,
  value,
  onChange,
  helper,
  placeholder = 'Bullet points are fine. Not sure? Leave this blank or add a quick note.',
  rows = 4,
}) {
  return (
    <FieldShell id={id} label={label} helper={helper}>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={`${inputClasses} resize-y`}
      />
    </FieldShell>
  );
}

export function SelectField({ id, label, value, onChange, options, helper }) {
  return (
    <FieldShell id={id} label={label} helper={helper}>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={inputClasses}
      >
        <option value="">Choose an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

export function MultiSelectField({ id, label, selected, onChange, options, helper }) {
  const toggleOption = (option) => {
    const nextSelected = selected.includes(option)
      ? selected.filter((item) => item !== option)
      : [...selected, option];
    onChange(nextSelected);
  };

  return (
    <fieldset className="rounded-2xl border border-slate-200 bg-elevion-grey/60 p-4">
      <legend className="px-1 text-sm font-semibold text-elevion-navy">{label}</legend>
      {helper ? <p className="mb-3 mt-1 text-sm leading-5 text-slate-600">{helper}</p> : null}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((option) => (
          <label
            key={option}
            htmlFor={`${id}-${option}`}
            className="flex items-start gap-3 rounded-xl bg-white px-3 py-3 text-sm text-elevion-charcoal shadow-sm"
          >
            <input
              id={`${id}-${option}`}
              name={id}
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => toggleOption(option)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-elevion-navy focus:ring-elevion-gold"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function FieldGrid({ children }) {
  return <div className="grid gap-5 sm:grid-cols-2">{children}</div>;
}
