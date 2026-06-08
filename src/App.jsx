import { useMemo, useState } from 'react';
import AccessWalkthroughsSection from './sections/AccessWalkthroughsSection.jsx';
import BusinessDetailsSection from './sections/BusinessDetailsSection.jsx';
import CurrentProcessesSection from './sections/CurrentProcessesSection.jsx';
import CurrentSystemsSection from './sections/CurrentSystemsSection.jsx';
import DiscoveryGoalsSection from './sections/DiscoveryGoalsSection.jsx';
import KnowledgeDocumentsSection from './sections/KnowledgeDocumentsSection.jsx';
import PainPointsSection from './sections/PainPointsSection.jsx';
import PeopleInvolvedSection from './sections/PeopleInvolvedSection.jsx';
import { initialFormData } from './formConfig.js';

// Set this to your backend/webhook URL when ready. Leave empty to use console + JSON download.
const SUBMIT_ENDPOINT = '';
const LOGO_SRC = '/elevion-logo.svg';

function buildPayload(formData) {
  return {
    submittedAt: new Date().toISOString(),
    client: 'ABC Bookkeeping WA',
    engagement: 'Elevion AI automation discovery onboarding',
    responses: formData,
  };
}

function validateBusinessDetails(business) {
  const nextErrors = {};

  if (!business.contactName.trim()) {
    nextErrors.contactName = 'Please add the best contact name.';
  }

  if (!business.email.trim()) {
    nextErrors.email = 'Please add an email so we can follow up.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(business.email.trim())) {
    nextErrors.email = 'Please enter a valid email address.';
  }

  return nextErrors;
}

function SuccessScreen({ payload, onDownload }) {
  return (
    <main className="min-h-screen bg-elevion-grey px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12">
        <img src={LOGO_SRC} alt="Elevion AI" className="mx-auto h-16 w-auto" />
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-elevion-gold">
          Submitted
        </p>
        <h1 className="mt-3 font-heading text-3xl font-semibold text-elevion-navy sm:text-4xl">
          Thanks — we&apos;ve got everything we need to prepare for your kick-off.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-elevion-charcoal">
          We&apos;ll review your responses before the session and use them to focus the conversation
          on the highest-value systems, process and people opportunities.
        </p>
        {!SUBMIT_ENDPOINT ? (
          <button
            type="button"
            onClick={onDownload}
            className="mt-8 rounded-full bg-elevion-gold px-6 py-3 font-semibold text-elevion-navy shadow-sm transition hover:brightness-95"
          >
            Download responses (JSON)
          </button>
        ) : null}
        <p className="mt-8 text-sm text-slate-600">Prepared with care by Elevion AI.</p>
        <details className="mt-6 text-left text-sm text-slate-600">
          <summary className="cursor-pointer text-center font-semibold text-elevion-navy">
            Submission reference
          </summary>
          <pre className="mt-3 max-h-60 overflow-auto rounded-2xl bg-elevion-grey p-4 text-xs">
            {JSON.stringify(
              {
                submittedAt: payload.submittedAt,
                client: payload.client,
                engagement: payload.engagement,
              },
              null,
              2,
            )}
          </pre>
        </details>
      </section>
    </main>
  );
}

export default function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submittedPayload, setSubmittedPayload] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const completionCount = useMemo(() => {
    const values = [
      formData.business.email,
      formData.goals.goodOutcome,
      formData.systems.manualMovement,
      formData.painPoints.oneThing,
      formData.access.availability,
    ];

    return values.filter((value) => value.trim()).length;
  }, [formData]);

  const updateSectionField = (section, field, value) => {
    setFormData((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [field]: value,
      },
    }));
  };

  const updateWorkflowField = (workflow, field, value) => {
    setFormData((current) => ({
      ...current,
      processes: {
        ...current.processes,
        [workflow]: {
          ...current.processes[workflow],
          [field]: value,
        },
      },
    }));
  };

  const updateTeamMember = (index, field, value) => {
    setFormData((current) => ({
      ...current,
      people: {
        ...current.people,
        teamMembers: current.people.teamMembers.map((member, memberIndex) =>
          memberIndex === index ? { ...member, [field]: value } : member,
        ),
      },
    }));
  };

  const addTeamMember = () => {
    setFormData((current) => ({
      ...current,
      people: {
        ...current.people,
        teamMembers: [...current.people.teamMembers, { name: '', role: '' }],
      },
    }));
  };

  const removeTeamMember = (index) => {
    setFormData((current) => ({
      ...current,
      people: {
        ...current.people,
        teamMembers: current.people.teamMembers.filter((_, memberIndex) => memberIndex !== index),
      },
    }));
  };

  const downloadPayload = (payload = submittedPayload) => {
    if (!payload) return;

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'abc-bookkeeping-wa-onboarding-responses.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateBusinessDetails(formData.business);
    setErrors(validationErrors);
    setSubmitError('');

    if (Object.keys(validationErrors).length > 0) {
      document.getElementById('businessName')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const payload = buildPayload(formData);
    setIsSubmitting(true);

    try {
      if (SUBMIT_ENDPOINT) {
        const response = await fetch(SUBMIT_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Submission endpoint returned an error.');
        }
      } else {
        console.info('ABC Bookkeeping WA onboarding payload:', payload);
      }

      setSubmittedPayload(payload);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Something went wrong while submitting. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedPayload) {
    return <SuccessScreen payload={submittedPayload} onDownload={downloadPayload} />;
  }

  return (
    <main className="min-h-screen bg-elevion-grey px-4 py-8 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-5xl">
        <header className="overflow-hidden rounded-t-3xl bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <img src={LOGO_SRC} alt="Elevion AI" className="h-16 w-fit" />
            <div className="rounded-full bg-elevion-grey px-4 py-2 text-sm font-semibold text-elevion-navy">
              Light onboarding before kick-off
            </div>
          </div>
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-elevion-gold">
              ABC Bookkeeping WA
            </p>
            <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight text-elevion-navy sm:text-5xl">
              Discovery Onboarding
            </h1>
            <p className="mt-5 text-lg leading-8 text-elevion-charcoal">
              This should take about 10-15 minutes. Answer what you can — we&apos;ll cover the rest
              together at kick-off.
            </p>
          </div>
          <div className="mt-8">
            <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
              <span>Helpful context added</span>
              <span>{completionCount} of 5 prompts started</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200" aria-hidden="true">
              <div
                className="h-full rounded-full bg-elevion-gold transition-all"
                style={{ width: `${(completionCount / 5) * 100}%` }}
              />
            </div>
          </div>
        </header>

        <div className="overflow-hidden rounded-b-3xl shadow-sm">
          <BusinessDetailsSection
            data={formData.business}
            errors={errors}
            onChange={(field, value) => updateSectionField('business', field, value)}
          />
          <DiscoveryGoalsSection
            data={formData.goals}
            onChange={(field, value) => updateSectionField('goals', field, value)}
          />
          <CurrentSystemsSection
            data={formData.systems}
            onChange={(field, value) => updateSectionField('systems', field, value)}
          />
          <CurrentProcessesSection
            data={formData.processes}
            onWorkflowChange={updateWorkflowField}
          />
          <PainPointsSection
            data={formData.painPoints}
            onChange={(field, value) => updateSectionField('painPoints', field, value)}
          />
          <PeopleInvolvedSection
            data={formData.people}
            onChange={(field, value) => updateSectionField('people', field, value)}
            onTeamMemberChange={updateTeamMember}
            onAddTeamMember={addTeamMember}
            onRemoveTeamMember={removeTeamMember}
          />
          <KnowledgeDocumentsSection
            data={formData.knowledge}
            onChange={(field, value) => updateSectionField('knowledge', field, value)}
          />
          <AccessWalkthroughsSection
            data={formData.access}
            onChange={(field, value) => updateSectionField('access', field, value)}
          />
        </div>

        <footer className="my-8 rounded-3xl bg-white p-5 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-heading text-xl font-semibold text-elevion-navy">
                Ready to send?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Only contact name and email are required. Everything else is there to make the
                kick-off more useful, not to create homework.
              </p>
              {submitError ? (
                <p className="mt-3 text-sm font-medium text-red-700">{submitError}</p>
              ) : null}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-elevion-gold px-7 py-3 font-semibold text-elevion-navy shadow-sm transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Submitting...' : 'Submit onboarding'}
            </button>
          </div>
        </footer>
      </form>
    </main>
  );
}
