import FormSection from '../components/FormSection.jsx';
import { FieldGrid, MultiSelectField, TextAreaField, TextField } from '../components/Fields.jsx';
import { serviceOptions } from '../formConfig.js';

export default function BusinessDetailsSection({ data, errors, onChange }) {
  return (
    <FormSection
      number={1}
      total={8}
      title="Business details"
      description="Basic contact details, team size, services and key business information."
    >
      <FieldGrid>
        <TextField
          id="businessName"
          label="Business name"
          value={data.businessName}
          onChange={(value) => onChange('businessName', value)}
        />
        <TextField
          id="contactName"
          label="Primary contact name"
          value={data.contactName}
          onChange={(value) => onChange('contactName', value)}
          autoComplete="name"
          required
          error={errors.contactName}
        />
        <TextField
          id="role"
          label="Role / title"
          value={data.role}
          onChange={(value) => onChange('role', value)}
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          value={data.email}
          onChange={(value) => onChange('email', value)}
          autoComplete="email"
          required
          error={errors.email}
        />
        <TextField
          id="phone"
          label="Phone"
          type="tel"
          value={data.phone}
          onChange={(value) => onChange('phone', value)}
          autoComplete="tel"
        />
        <TextField
          id="website"
          label="Website"
          value={data.website}
          onChange={(value) => onChange('website', value)}
          autoComplete="url"
        />
        <TextField
          id="location"
          label="Location / area served"
          value={data.location}
          onChange={(value) => onChange('location', value)}
        />
        <TextField
          id="yearsInOperation"
          label="Years in operation"
          value={data.yearsInOperation}
          onChange={(value) => onChange('yearsInOperation', value)}
        />
        <TextField
          id="teamSize"
          label="Team size"
          value={data.teamSize}
          onChange={(value) => onChange('teamSize', value)}
          helper="Staff and/or contractors is enough."
        />
      </FieldGrid>
      <MultiSelectField
        id="services"
        label="Services offered"
        selected={data.services}
        onChange={(value) => onChange('services', value)}
        options={serviceOptions}
      />
      {data.services.includes('Other') ? (
        <TextField
          id="servicesOther"
          label="Other services"
          value={data.servicesOther}
          onChange={(value) => onChange('servicesOther', value)}
        />
      ) : null}
      <TextAreaField
        id="clientTypes"
        label="Types of clients / industries served"
        value={data.clientTypes}
        onChange={(value) => onChange('clientTypes', value)}
        rows={3}
      />
      <TextAreaField
        id="seasonality"
        label="Busy periods or seasonality"
        value={data.seasonality}
        onChange={(value) => onChange('seasonality', value)}
        helper="For example: BAS quarters, EOFY, payroll deadlines or client reporting cycles."
        rows={3}
      />
    </FormSection>
  );
}
