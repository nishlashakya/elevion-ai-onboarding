import FormSection from '../components/FormSection.jsx';
import { SelectField, TextAreaField, TextField } from '../components/Fields.jsx';
import { documentationOptions, shareExamplesOptions } from '../formConfig.js';

export default function KnowledgeDocumentsSection({ data, onChange }) {
  return (
    <FormSection
      number={7}
      total={8}
      title="Knowledge and documents"
      description="Where SOPs, templates, FAQs, checklists, client instructions and process notes live."
    >
      <SelectField
        id="sopStatus"
        label="Do you have documented processes (SOPs)?"
        value={data.sopStatus}
        onChange={(value) => onChange('sopStatus', value)}
        options={documentationOptions}
      />
      <TextField
        id="sopLocation"
        label="Where are SOPs / process notes stored?"
        value={data.sopLocation}
        onChange={(value) => onChange('sopLocation', value)}
        placeholder="e.g. Google Drive, SharePoint, Notion, spreadsheets"
      />
      <TextField
        id="templatesLocation"
        label="Templates — where are they kept?"
        value={data.templatesLocation}
        onChange={(value) => onChange('templatesLocation', value)}
        helper="Emails, documents, spreadsheets or other reusable materials."
      />
      <TextAreaField
        id="checklistsFaqs"
        label="Checklists or FAQs?"
        value={data.checklistsFaqs}
        onChange={(value) => onChange('checklistsFaqs', value)}
        rows={3}
      />
      <TextAreaField
        id="clientInstructions"
        label="Client instructions or standing notes?"
        value={data.clientInstructions}
        onChange={(value) => onChange('clientInstructions', value)}
        rows={3}
      />
      <SelectField
        id="shareExamples"
        label="Are you able to share a few examples with us?"
        value={data.shareExamples}
        onChange={(value) => onChange('shareExamples', value)}
        options={shareExamplesOptions}
        helper="No need to upload anything here. This just helps us plan the kick-off."
      />
    </FormSection>
  );
}
