import FormSection from '../components/FormSection.jsx';
import { FieldGrid, TextAreaField, TextField } from '../components/Fields.jsx';
import { systemFields } from '../formConfig.js';

export default function CurrentSystemsSection({ data, onChange }) {
  return (
    <FormSection
      number={3}
      total={8}
      title="Current systems"
      description="The tools ABC Bookkeeping WA uses, where information is stored, and how information moves between systems."
    >
      <FieldGrid>
        {systemFields.map(([key, label, helper]) => (
          <TextField
            key={key}
            id={key}
            label={label}
            value={data[key]}
            onChange={(value) => onChange(key, value)}
            helper={`${helper}. Not sure is completely fine.`}
            placeholder="Tool name, or Not sure"
          />
        ))}
      </FieldGrid>
      <TextAreaField
        id="manualMovement"
        label="Where do you find yourself moving information manually between systems?"
        value={data.manualMovement}
        onChange={(value) => onChange('manualMovement', value)}
        helper="This is one of the most useful questions. Think copy/paste, re-keying details, downloading/uploading files, or updating the same detail in more than one place."
        rows={5}
      />
      <TextAreaField
        id="existingAutomations"
        label="Any integrations or automations already in place?"
        value={data.existingAutomations}
        onChange={(value) => onChange('existingAutomations', value)}
        helper="For example: Zapier, Make, Xero connections, email rules or templates. Not sure is okay."
      />
    </FormSection>
  );
}
