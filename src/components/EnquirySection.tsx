import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2Icon, ChevronDownIcon, Loader2Icon, MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { featuredService, services } from '../data/services';
import { contact } from '../data/site';
import { isValidEmail, isValidUkPhone } from '../utils/validation';

type Fields = {name: string;company: string;email: string;phone: string;service: string;details: string;};
type Errors = Partial<Record<keyof Fields, string>>;

const initial: Fields = { name: '', company: '', email: '', phone: '', service: featuredService.name, details: '' };

const inputClass = (err?: string) =>
`w-full rounded-lg border bg-white px-3.5 text-[15px] text-ink placeholder:text-muted/70 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-signal/30 ${
err ? 'border-plum' : 'border-line focus:border-signal'}`;


export function EnquirySection() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
  setFields((f) => ({ ...f, [key]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!fields.name.trim()) next.name = 'Please enter your name';
    if (!isValidEmail(fields.email)) next.email = 'Please enter a valid email';
    if (!isValidUkPhone(fields.phone)) next.phone = 'Please enter a UK phone number';
    if (fields.details.trim().length < 10) next.details = 'Tell us a little about the job';
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 1000);
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-paper pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid overflow-hidden rounded-3xl bg-white ring-1 ring-line lg:grid-cols-12">
          <div className="flex flex-col bg-plum p-8 text-white sm:p-10 lg:col-span-5">
            <h2 id="contact-title" className="font-display text-4xl font-extrabold leading-[1.05]">
              Tell us what needs moving.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Send the details and we’ll come back with a fixed price — usually within 15 minutes.
            </p>

            <ul className="mt-10 space-y-5">
              <li>
                <a href={contact.phoneHref} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                    <PhoneIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-white/70">Office</span>
                    <span className="block text-lg font-semibold">{contact.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                    <MessageCircleIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-white/70">Mobile & WhatsApp</span>
                    <span className="block text-lg font-semibold">{contact.mobile}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={contact.emailHref} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                    <MailIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-white/70">Email</span>
                    <span className="block text-lg font-semibold">{contact.email}</span>
                  </span>
                </a>
              </li>
            </ul>

            <p className="mt-auto pt-10 text-sm text-white/70">
              Competitive prices · Above & beyond service · 7+ years in business
            </p>
          </div>

          <div className="p-6 sm:p-10 lg:col-span-7">
            <AnimatePresence mode="wait" initial={false}>
              {status === 'success' ?
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                className="flex h-full flex-col items-start justify-center py-10"
                role="status">
                
                  <CheckCircle2Icon className="h-10 w-10 text-signal" aria-hidden />
                  <p className="mt-5 font-display text-3xl font-bold">Thanks, {fields.name.split(' ')[0]}.</p>
                  <p className="mt-2 max-w-md text-[15px] text-muted">
                    Your {fields.service.toLowerCase()} enquiry is with our team. We’ll be in touch on {fields.phone}{' '}
                    shortly with your quote.
                  </p>
                  <button
                  type="button"
                  onClick={() => {
                    setFields(initial);
                    setStatus('idle');
                  }}
                  className="mt-8 rounded-full border border-line px-5 py-3 text-sm font-semibold transition-colors duration-150 hover:border-ink">
                  
                    Send another enquiry
                  </button>
                </motion.div> :

              <motion.form key="form" onSubmit={handleSubmit} noValidate exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="e-name" label="Full name" error={errors.name}>
                      <input id="e-name" value={fields.name} onChange={update('name')} autoComplete="name" className={`${inputClass(errors.name)} h-12`} />
                    </Field>
                    <Field id="e-company" label="Company (optional)">
                      <input id="e-company" value={fields.company} onChange={update('company')} autoComplete="organization" className={`${inputClass()} h-12`} />
                    </Field>
                    <Field id="e-email" label="Email" error={errors.email}>
                      <input id="e-email" type="email" value={fields.email} onChange={update('email')} autoComplete="email" className={`${inputClass(errors.email)} h-12`} />
                    </Field>
                    <Field id="e-phone" label="Phone" error={errors.phone}>
                      <input id="e-phone" type="tel" value={fields.phone} onChange={update('phone')} autoComplete="tel" className={`${inputClass(errors.phone)} h-12`} />
                    </Field>
                    <div className="sm:col-span-2">
                      <Field id="e-service" label="Service">
                        <div className="relative">
                          <select id="e-service" value={fields.service} onChange={update('service')} className={`${inputClass()} h-12 appearance-none pr-10`}>
                            {[featuredService, ...services].map((s) =>
                          <option key={s.slug}>{s.name}</option>
                          )}
                            <option>Regular business transport</option>
                            <option>Something else</option>
                          </select>
                          <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden />
                        </div>
                      </Field>
                    </div>
                    <div className="sm:col-span-2">
                      <Field id="e-details" label="Job details" error={errors.details}>
                        <textarea
                        id="e-details"
                        rows={4}
                        value={fields.details}
                        onChange={update('details')}
                        placeholder="What’s being moved, collection & delivery postcodes, preferred date…"
                        className={`${inputClass(errors.details)} resize-none py-3`} />
                      
                      </Field>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[13px] text-muted">We only use your details to respond to this enquiry.</p>
                    <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ink px-7 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-plum disabled:opacity-80">
                    
                      {status === 'submitting' && <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden />}
                      {status === 'submitting' ? 'Sending…' : 'Request my quote'}
                    </button>
                  </div>
                </motion.form>
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}

function Field({ id, label, error, children }: {id: string;label: string;error?: string;children: React.ReactNode;}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-medium text-muted">
        {label}
      </label>
      {children}
      {error &&
      <p className="mt-1.5 text-[13px] text-plum" role="alert">
          {error}
        </p>
      }
    </div>);

}