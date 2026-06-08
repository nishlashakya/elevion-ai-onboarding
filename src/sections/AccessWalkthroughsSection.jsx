import FormSection from '../components/FormSection.jsx';
import { MultiSelectField, TextAreaField, TextField } from '../components/Fields.jsx';
import { systemWalkthroughOptions } from '../formConfig.js';

export default function AccessWalkthroughsSection({ data, onChange }) {
  return (
    <FormSection
      number={8}
      total={8}
      title="Access and walkthroughs"
      description="Which systems may need to be shown during kick-off or follow-up, and who can approve access."
    >
      <MultiSelectField
        id="walkthroughSystems"
        label="Which systems would be useful to walk us through at kick-off?"
        selected={data.walkthroughSystems}
        onChange={(value) => onChange('walkthroughSystems', value)}
        options={systemWalkthroughOptions}
        helper="Select what comes to mind. We can refine the list together."
      />
      {data.walkthroughSystems.includes('Other') ? (
        <TextField
          id="walkthroughSystemsOther"
          label="Other systems to walk through"
          value={data.walkthroughSystemsOther}
          onChange={(value) => onChange('walkthroughSystemsOther', value)}
        />
      ) : null}
      <TextField
        id="accessApprover"
        label="Who can approve access to these systems?"
        value={data.accessApprover}
        onChange={(value) => onChange('accessApprover', value)}
      />
      <TextAreaField
        id="securityConsiderations"
        label="Any security, privacy or confidentiality considerations we should know about?"
        value={data.securityConsiderations}
        onChange={(value) => onChange('securityConsiderations', value)}
        helper="High-level notes only. Please do not include passwords or sensitive credentials."
      />
      <TextField
        id="availability"
        label="Preferred times / availability for walkthroughs"
        value={data.availability}
        onChange={(value) => onChange('availability', value)}
        placeholder="e.g. Tuesday mornings, after payroll, flexible"
      />
    </FormSection>
  );
}
