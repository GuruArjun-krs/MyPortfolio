import React, { useState, useId } from 'react';
import {
    MailIcon,
    SendIcon,
    UserIcon,
    CheckIcon,
    CopyIcon,
    CircleCheckIcon,
    SparklesIcon,
    SquareArrowOutUpRightIcon,
    MessageSquareIcon,
    LinkedinIcon,
    GithubIcon,
} from '@animateicons/react/lucide';
import { ExternalLinks } from '../../Core/Interface';

interface ContactFormProps {
    isSection?: boolean;
}

const TOPICS = [
    'Mobile App (React Native)',
    'Full-Stack / Web Development',
    'UI/UX & Motion Engineering',
    'Job Opportunity / Hiring',
    'Consulting / Mentorship',
    'Just Saying Hi 👋',
];

const TARGET_EMAIL = 'guruarjunkrs@gmail.com';

export const ContactContent: React.FC<ContactFormProps> = ({ isSection = false }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState(TOPICS[0]);
    const [description, setDescription] = useState('');

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        description: false,
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const nameId = useId();
    const emailId = useId();
    const descriptionId = useId();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const isNameValid = name.trim().length >= 2;
    const isDescriptionValid = description.trim().length >= 10;
    const isFormValid = isNameValid && isEmailValid && isDescriptionValid;

    const showToast = (msg: string) => {
        setToastMessage(msg);
        setTimeout(() => {
            setToastMessage((prev) => (prev === msg ? null : prev));
        }, 4000);
    };

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(TARGET_EMAIL);
            setCopiedEmail(true);
            showToast('Email address copied to clipboard!');
            setTimeout(() => setCopiedEmail(false), 2500);
        } catch {
            showToast(`Could not copy. Email is ${TARGET_EMAIL}`);
        }
    };

    const handleCopyMessage = async () => {
        const fullMessage = `From: ${name} (${email})\nSubject: [${topic}]\n\n${description}`;
        try {
            await navigator.clipboard.writeText(fullMessage);
            showToast('Message details copied to clipboard!');
        } catch {
            showToast('Unable to copy message');
        }
    };

    const generateMailtoUrl = () => {
        const subject = encodeURIComponent(`Portfolio Inquiry: ${topic} from ${name}`);
        const body = encodeURIComponent(
            `Hi Guru Arjun,\n\nName: ${name}\nEmail: ${email}\nInquiry Type: ${topic}\n\nMessage:\n${description}\n\n---\nSent from Guru Arjun KRS Portfolio`
        );
        return `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
    };

    const generateGmailWebUrl = () => {
        const subject = encodeURIComponent(`Portfolio Inquiry: ${topic} from ${name}`);
        const body = encodeURIComponent(
            `Hi Guru Arjun,\n\nName: ${name}\nEmail: ${email}\nInquiry Type: ${topic}\n\nMessage:\n${description}\n\n---\nSent from Guru Arjun KRS Portfolio`
        );
        return `https://mail.google.com/mail/?view=cm&fs=1&to=${TARGET_EMAIL}&su=${subject}&body=${body}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTouched({ name: true, email: true, description: true });

        if (!isFormValid) {
            showToast('Please fill in all required fields accurately.');
            return;
        }

        setIsSending(true);

        const mailtoUrl = generateMailtoUrl();

        // Automatically trigger mail client
        window.location.href = mailtoUrl;

        // Also copy formatted text to clipboard for convenience
        const fullMessage = `From: ${name} (${email})\nInquiry: ${topic}\n\n${description}`;
        navigator.clipboard?.writeText(fullMessage).catch(() => {});

        setTimeout(() => {
            setIsSending(false);
            setIsSubmitted(true);
            showToast('Opening your mail client! Form details also copied to clipboard.');
        }, 600);
    };

    const handleReset = () => {
        setName('');
        setEmail('');
        setTopic(TOPICS[0]);
        setDescription('');
        setTouched({ name: false, email: false, description: false });
        setIsSubmitted(false);
    };

    return (
        <div className="w-full relative">
            {!isSection && (
                <div className="mb-6">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-primary font-bold text-text-secondary hover:text-primary-color uppercase tracking-wider transition-colors"
                    >
                        ← Back to Overview
                    </a>
                </div>
            )}

            {/* Floating Toast Notification */}
            {toastMessage && (
                <aside
                    aria-label="Notification"
                    className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#040303] text-white px-5 py-3 rounded-xl shadow-2xl border border-white/10 animate-fade-in transition-all text-sm font-primary"
                >
                    <SparklesIcon size={18} duration={1} color="#10b981" />
                    <span>{toastMessage}</span>
                    <button
                        onClick={() => setToastMessage(null)}
                        className="ml-2 text-white/50 hover:text-white text-xs font-bold"
                    >
                        ✕
                    </button>
                </aside>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column: Context, Availability & Socials */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A6451]/10 text-[#0A6451] font-primary font-semibold text-xs tracking-wider uppercase">
                            <span className="w-2 h-2 rounded-full bg-[#0A6451] animate-ping" />
                            <span>Available For New Projects</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-primary text-text-primary tracking-tight leading-none uppercase">
                            Let's Build Something <br />
                            <span className="text-primary-color underline decoration-wavy decoration-[#0A6451]/30">
                                Exceptional.
                            </span>
                        </h2>

                        <p className="font-primary text-text-secondary text-sm sm:text-base leading-relaxed">
                            Have an exciting mobile application, complex frontend architecture, or design system challenge? Or simply exploring engineering talent for your team? Let's connect and make it reality.
                        </p>
                    </div>

                    {/* Interactive Direct Reach Card */}
                    <div className="p-5 sm:p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs uppercase font-primary tracking-wider text-text-secondary font-bold">
                                Direct Contact
                            </span>
                            <span className="text-[11px] font-primary font-semibold text-[#0A6451] bg-[#0A6451]/10 px-2 py-0.5 rounded-full">
                                Avg. Reply &lt; 12 hrs
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-2 p-3 bg-[#EAE7DC]/40 rounded-xl border border-gray-200/80 group">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="p-2 rounded-lg bg-white text-primary-color shadow-xs shrink-0">
                                    <MailIcon size={20} duration={1} color="#0A6451" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] font-primary text-text-secondary uppercase tracking-wider">
                                        Personal Inbox
                                    </p>
                                    <a
                                        href={`mailto:${TARGET_EMAIL}`}
                                        className="font-primary font-bold text-sm text-[#040303] hover:text-primary-color transition-colors truncate block"
                                    >
                                        {TARGET_EMAIL}
                                    </a>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={handleCopyEmail}
                                title="Copy Email"
                                className="p-2 rounded-lg hover:bg-white text-text-secondary hover:text-primary-color transition-all shrink-0 cursor-pointer"
                            >
                                {copiedEmail ? (
                                    <CheckIcon size={18} duration={0.8} color="#0A6451" />
                                ) : (
                                    <CopyIcon size={18} duration={0.8} color="#777777" />
                                )}
                            </button>
                        </div>

                        {/* Location & Timezone Details */}
                        <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-primary">
                            <div className="p-3 bg-gray-50 rounded-xl">
                                <span className="text-text-secondary text-[10px] uppercase block">Location</span>
                                <span className="font-semibold text-text-primary">Chennai, India (IST)</span>
                            </div>
                            <div className="p-3 bg-gray-50 rounded-xl">
                                <span className="text-text-secondary text-[10px] uppercase block">Collaboration</span>
                                <span className="font-semibold text-text-primary">Remote / On-site</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-xs font-primary text-text-secondary font-medium">
                                Connect socially:
                            </span>
                            <div className="flex items-center gap-2">
                                {ExternalLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg border border-gray-200 hover:border-primary-color hover:text-primary-color transition-all duration-200 bg-white"
                                        title={link.title}
                                    >
                                        {link.id === 'github' ? (
                                            <GithubIcon size={18} duration={1} color="#040303" />
                                        ) : (
                                            <LinkedinIcon size={18} duration={1} color="#0A6451" />
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="lg:col-span-7">
                    <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-xl relative overflow-hidden">
                        {/* Decorative background glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A6451]/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EAE7DC]/60 rounded-full blur-3xl pointer-events-none" />

                        {isSubmitted ? (
                            /* Success State */
                            <div className="py-8 text-center space-y-6 relative z-10 animate-fade-in">
                                <div className="w-16 h-16 mx-auto rounded-full bg-[#0A6451]/10 flex items-center justify-center text-primary-color shadow-inner">
                                    <CircleCheckIcon size={36} duration={1} color="#0A6451" />
                                </div>

                                <div className="space-y-2 max-w-md mx-auto">
                                    <h3 className="font-primary font-bold text-2xl text-text-primary">
                                        Message Prepared &amp; Client Triggered!
                                    </h3>
                                    <p className="font-primary text-sm text-text-secondary leading-relaxed">
                                        Thank you, <span className="font-bold text-text-primary">{name}</span>. Your default email client was opened with your message ready for{' '}
                                        <span className="font-semibold text-primary-color">{TARGET_EMAIL}</span>.
                                    </p>
                                </div>

                                {/* Alternative dispatch buttons if default mail app is not configured */}
                                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-left space-y-3 max-w-md mx-auto">
                                    <p className="text-xs font-primary font-bold text-text-secondary uppercase tracking-wider">
                                        Didn't see your email client open?
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <a
                                            href={generateGmailWebUrl()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-primary font-semibold text-white bg-[#0A6451] rounded-xl hover:bg-[#085041] transition-colors"
                                        >
                                            <SquareArrowOutUpRightIcon size={14} duration={0.8} color="#ffffff" />
                                            Open in Gmail Web
                                        </a>
                                        <button
                                            type="button"
                                            onClick={handleCopyMessage}
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-primary font-semibold text-text-primary bg-white border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                                        >
                                            <CopyIcon size={14} duration={0.8} color="#040303" />
                                            Copy Full Message
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="text-xs font-primary font-semibold text-primary-color hover:underline cursor-pointer"
                                    >
                                        ← Send another message or modify form
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* The Form */
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                {/* Topic Selection Pills */}
                                <div className="space-y-2">
                                    <label className="block text-xs font-primary font-bold text-text-secondary uppercase tracking-wider">
                                        I'm reaching out about:
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {TOPICS.map((item) => {
                                            const active = topic === item;
                                            return (
                                                <button
                                                    type="button"
                                                    key={item}
                                                    onClick={() => setTopic(item)}
                                                    className={`px-3 py-1.5 rounded-full text-xs font-primary font-semibold transition-all duration-200 cursor-pointer ${
                                                        active
                                                            ? 'bg-primary-color text-white shadow-sm ring-2 ring-primary-color/20'
                                                            : 'bg-[#EAE7DC]/60 text-text-primary hover:bg-[#EAE7DC] border border-gray-200/50'
                                                    }`}
                                                >
                                                    {item}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Name & Email Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Name Field */}
                                    <div className="space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor={nameId}
                                                className="text-xs font-primary font-bold text-text-secondary uppercase tracking-wider"
                                            >
                                                Your Name <span className="text-red-500">*</span>
                                            </label>
                                            {touched.name && !isNameValid && (
                                                <span className="text-[10px] font-primary text-red-500 font-medium">
                                                    Required (min 2 chars)
                                                </span>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                                <UserIcon size={18} duration={1} color="#777777" />
                                            </div>
                                            <input
                                                id={nameId}
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                                                placeholder="e.g. Alex Morgan"
                                                className={`w-full pl-10 pr-4 py-3 bg-[#EAE7DC]/20 border rounded-xl text-sm font-primary text-text-primary placeholder:text-gray-400 focus:outline-none transition-all ${
                                                    touched.name && !isNameValid
                                                        ? 'border-red-400 focus:border-red-500 ring-2 ring-red-500/10'
                                                        : 'border-gray-200 focus:border-primary-color focus:bg-white ring-2 focus:ring-primary-color/10'
                                                }`}
                                            />
                                        </div>
                                    </div>

                                    {/* Email Field */}
                                    <div className="space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor={emailId}
                                                className="text-xs font-primary font-bold text-text-secondary uppercase tracking-wider"
                                            >
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            {touched.email && !isEmailValid && (
                                                <span className="text-[10px] font-primary text-red-500 font-medium">
                                                    Valid email required
                                                </span>
                                            )}
                                            {touched.email && isEmailValid && (
                                                <span className="text-[10px] font-primary text-[#0A6451] font-semibold flex items-center gap-1">
                                                    <CheckIcon size={12} duration={0.8} color="#0A6451" /> Valid
                                                </span>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                                <MailIcon size={18} duration={1} color="#777777" />
                                            </div>
                                            <input
                                                id={emailId}
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                                                placeholder="alex@company.com"
                                                className={`w-full pl-10 pr-4 py-3 bg-[#EAE7DC]/20 border rounded-xl text-sm font-primary text-text-primary placeholder:text-gray-400 focus:outline-none transition-all ${
                                                    touched.email && !isEmailValid
                                                        ? 'border-red-400 focus:border-red-500 ring-2 ring-red-500/10'
                                                        : 'border-gray-200 focus:border-primary-color focus:bg-white ring-2 focus:ring-primary-color/10'
                                                }`}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Description / Message Field */}
                                <div className="space-y-1.5">
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor={descriptionId}
                                            className="text-xs font-primary font-bold text-text-secondary uppercase tracking-wider flex items-center gap-1.5"
                                        >
                                            <MessageSquareIcon size={14} duration={1} color="#777777" />
                                            <span>Project Description / Message</span>
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <span
                                            className={`text-[10px] font-primary ${
                                                description.length < 10 && touched.description
                                                    ? 'text-red-500 font-medium'
                                                    : 'text-text-secondary'
                                            }`}
                                        >
                                            {description.length} / 1000 chars (min 10)
                                        </span>
                                    </div>
                                    <textarea
                                        id={descriptionId}
                                        rows={5}
                                        maxLength={1000}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        onBlur={() => setTouched((prev) => ({ ...prev, description: true }))}
                                        placeholder="Describe your project vision, timeline, goals, or role details..."
                                        className={`w-full p-4 bg-[#EAE7DC]/20 border rounded-xl text-sm font-primary text-text-primary placeholder:text-gray-400 focus:outline-none transition-all resize-y ${
                                            touched.description && !isDescriptionValid
                                                ? 'border-red-400 focus:border-red-500 ring-2 ring-red-500/10'
                                                : 'border-gray-200 focus:border-primary-color focus:bg-white ring-2 focus:ring-primary-color/10'
                                        }`}
                                    />
                                </div>

                                {/* Form Action Buttons */}
                                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                                    <button
                                        type="submit"
                                        disabled={isSending}
                                        className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-primary-color text-white font-primary font-bold text-sm uppercase tracking-wider hover:bg-[#085041] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
                                    >
                                        {isSending ? (
                                            <span>Preparing Dispatch...</span>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <SendIcon
                                                    size={16}
                                                    duration={1}
                                                    color="#ffffff"
                                                />
                                            </>
                                        )}
                                    </button>

                                    <a
                                        href={
                                            name && email && description
                                                ? generateGmailWebUrl()
                                                : `https://mail.google.com/mail/?view=cm&fs=1&to=${TARGET_EMAIL}`
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto py-3.5 px-5 rounded-xl border border-gray-200 hover:border-primary-color bg-gray-50/50 hover:bg-white text-text-primary hover:text-primary-color font-primary font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                                        title="Open direct compose in Gmail web"
                                    >
                                        <span>Gmail Web</span>
                                        <SquareArrowOutUpRightIcon size={14} duration={0.8} color="#777777" />
                                    </a>
                                </div>

                                <p className="text-[11px] font-primary text-text-secondary text-center sm:text-left">
                                    🔒 Your information is sent straight to Guru Arjun's personal inbox without third-party ad tracking or selling.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-[calc(100vh-80px)] pb-20 pt-28 max-w-6xl mx-auto px-4 sm:px-6">
            <ContactContent isSection={false} />
        </div>
    );
};

export default ContactPage;
