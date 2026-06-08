import FormSection from '../components/FormSection.jsx';
import { FieldGrid, TextAreaField, TextField } from '../components/Fields.jsx';

export default function PeopleInvolvedSection({
  data,
  onChange,
  onTeamMemberChange,
  onAddTeamMember,
  onRemoveTeamMember,
}) {
  return (
    <FormSection
      number={6}
      total={8}
      title="People involved"
      description="Who performs the work, who approves things, and who we may need to speak with."
    >
      <div className="rounded-2xl border border-slate-200 bg-elevion-grey/60 p-4">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-heading text-lg font-semibold text-elevion-navy">
              Team members and roles
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Add whoever is useful. Leave blank if we should cover this together.
            </p>
          </div>
          <button
            type="button"
            onClick={onAddTeamMember}
            className="rounded-full border border-elevion-navy px-4 py-2 text-sm font-semibold text-elevion-navy transition hover:bg-elevion-navy hover:text-white"
          >
            Add person
          </button>
        </div>
        <div className="grid gap-4">
          {data.teamMembers.map((member, index) => (
            <div key={`team-member-${index}`} className="rounded-xl bg-white p-4 shadow-sm">
              <FieldGrid>
                <TextField
                  id={`team-member-name-${index}`}
                  label={`Name ${index + 1}`}
                  value={member.name}
                  onChange={(value) => onTeamMemberChange(index, 'name', value)}
                />
                <TextField
                  id={`team-member-role-${index}`}
                  label="Role"
                  value={member.role}
                  onChange={(value) => onTeamMemberChange(index, 'role', value)}
                />
              </FieldGrid>
              {data.teamMembers.length > 1 ? (
                <button
                  type="button"
                  onClick={() => onRemoveTeamMember(index)}
                  className="mt-3 text-sm font-semibold text-elevion-navy underline decoration-elevion-gold underline-offset-4"
                >
                  Remove this person
                </button>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <TextAreaField
        id="dayToDayWork"
        label="Who performs the key day-to-day work?"
        value={data.dayToDayWork}
        onChange={(value) => onChange('dayToDayWork', value)}
      />
      <TextAreaField
        id="approvals"
        label="Who approves things?"
        value={data.approvals}
        onChange={(value) => onChange('approvals', value)}
        helper="Payments, sign-offs, client work or other approvals."
      />
      <TextAreaField
        id="processOwners"
        label="Who owns the key processes?"
        value={data.processOwners}
        onChange={(value) => onChange('processOwners', value)}
      />
      <TextAreaField
        id="discoveryContacts"
        label="Who should we speak with during the discovery?"
        value={data.discoveryContacts}
        onChange={(value) => onChange('discoveryContacts', value)}
      />
      <TextAreaField
        id="singlePointFailure"
        label="Where is there a single point of failure / key-person dependency?"
        value={data.singlePointFailure}
        onChange={(value) => onChange('singlePointFailure', value)}
      />
    </FormSection>
  );
}
