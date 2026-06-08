import FormSection from '../components/FormSection.jsx';
import { SelectField, TextAreaField } from '../components/Fields.jsx';
import { urgencyOptions } from '../formConfig.js';

export default function DiscoveryGoalsSection({ data, onChange }) {
  return (
    <FormSection
      number={2}
      total={8}
      title="Discovery goals"
      description="What Alma wants this discovery to clarify, and what a good outcome looks like."
    >
      <div className="rounded-2xl border-l-4 border-elevion-gold bg-elevion-grey px-4 py-4 text-sm leading-6 text-elevion-charcoal">
        Elevion AI will use these answers to focus the kick-off on practical AI and automation
        opportunities for ABC Bookkeeping WA across systems, processes and people. If anything is
        easier to explain in conversation, a short note is enough.
      </div>
      <TextAreaField
        id="clarify"
        label="What do you want this discovery to help you clarify?"
        value={data.clarify}
        onChange={(value) => onChange('clarify', value)}
      />
      <TextAreaField
        id="goodOutcome"
        label="What would a good outcome look like for you?"
        value={data.goodOutcome}
        onChange={(value) => onChange('goodOutcome', value)}
      />
      <TextAreaField
        id="frustrations"
        label="Top frustrations you'd most like to remove"
        value={data.frustrations}
        onChange={(value) => onChange('frustrations', value)}
      />
      <TextAreaField
        id="automationTargets"
        label="Are there specific tasks or workflows you're hoping to automate?"
        value={data.automationTargets}
        onChange={(value) => onChange('automationTargets', value)}
        helper="Examples might include information chasing, inbox triage, document handling, reporting, handovers or recurring admin."
      />
      <TextAreaField
        id="successMeasures"
        label="How would you know this was a success?"
        value={data.successMeasures}
        onChange={(value) => onChange('successMeasures', value)}
      />
      <SelectField
        id="urgency"
        label="Timeline or urgency, if any"
        value={data.urgency}
        onChange={(value) => onChange('urgency', value)}
        options={urgencyOptions}
      />
    </FormSection>
  );
}
