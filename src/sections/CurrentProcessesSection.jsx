import FormSection from '../components/FormSection.jsx';
import { FieldGrid, TextAreaField, TextField } from '../components/Fields.jsx';
import { workflowFields } from '../formConfig.js';

export default function CurrentProcessesSection({ data, onWorkflowChange }) {
  return (
    <FormSection
      number={4}
      total={8}
      title="Current processes"
      description="The main workflows we may need to understand. Bullet points and rough estimates are perfect."
    >
      {workflowFields.map(([key, label, helper]) => (
        <div key={key} className="rounded-2xl border border-slate-200 bg-elevion-grey/60 p-4">
          <TextAreaField
            id={`${key}-description`}
            label={label}
            value={data[key].description}
            onChange={(value) => onWorkflowChange(key, 'description', value)}
            helper={helper}
            rows={3}
          />
          <FieldGrid>
            <TextField
              id={`${key}-frequency`}
              label="How often?"
              value={data[key].frequency}
              onChange={(value) => onWorkflowChange(key, 'frequency', value)}
              placeholder="e.g. daily, weekly, monthly, quarterly"
            />
            <TextField
              id={`${key}-time`}
              label="Roughly how long does it take?"
              value={data[key].timeRequired}
              onChange={(value) => onWorkflowChange(key, 'timeRequired', value)}
              placeholder="A rough estimate is fine"
            />
          </FieldGrid>
        </div>
      ))}
    </FormSection>
  );
}
