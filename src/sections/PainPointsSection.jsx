import FormSection from '../components/FormSection.jsx';
import { TextAreaField, TextField } from '../components/Fields.jsx';

export default function PainPointsSection({ data, onChange }) {
  return (
    <FormSection
      number={5}
      total={8}
      title="Pain points and friction"
      description="Where work is slow, manual, duplicated, inconsistent or too dependent on one person."
    >
      <TextAreaField
        id="manualWork"
        label="Where is work slow or heavily manual?"
        value={data.manualWork}
        onChange={(value) => onChange('manualWork', value)}
      />
      <TextAreaField
        id="duplication"
        label="What gets done twice or duplicated?"
        value={data.duplication}
        onChange={(value) => onChange('duplication', value)}
      />
      <TextAreaField
        id="inconsistentWork"
        label="Where are things inconsistent or error-prone?"
        value={data.inconsistentWork}
        onChange={(value) => onChange('inconsistentWork', value)}
      />
      <TextAreaField
        id="keyPersonReliance"
        label="What relies heavily on Alma specifically, or on one person?"
        value={data.keyPersonReliance}
        onChange={(value) => onChange('keyPersonReliance', value)}
      />
      <TextAreaField
        id="busyPeriodStress"
        label="What tends to break or cause stress during busy periods?"
        value={data.busyPeriodStress}
        onChange={(value) => onChange('busyPeriodStress', value)}
      />
      <TextField
        id="oneThing"
        label="If you could fix one thing tomorrow, what would it be?"
        value={data.oneThing}
        onChange={(value) => onChange('oneThing', value)}
      />
    </FormSection>
  );
}
