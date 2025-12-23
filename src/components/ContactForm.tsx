'use client';

import { useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface ApiResponse {
    success: boolean;
    message?: string;
    error?: string;
}

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Client-side validation
        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus('error');
            setErrorMessage('> Error: All_Fields_Required');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);

            const response = await fetch('/api/submit', {
                method: 'POST',
                body: formData,
            });

            const data: ApiResponse = await response.json();

            if (data.success) {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
                setErrorMessage(`> Error: ${data.error || 'Submission_Failed'}`);
            }
        } catch {
            setStatus('error');
            setErrorMessage('> Error: Network_Error');
        }
    };

    return (
        <div className="rounded-3xl border border-gray-800 bg-gray-900 p-1 shadow-2xl">
            <div className="flex items-center gap-2 rounded-t-[20px] border-b border-white/5 bg-gray-800/50 px-4 py-2">
                <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-2 font-mono text-[10px] text-gray-400">
                    root@solvovis-terminal: ~
                </div>
            </div>

            {status === 'success' ? (
                <div className="space-y-4 p-6 md:p-8 text-center">
                    <div className="text-green-500 font-mono text-4xl">✓</div>
                    <p className="font-mono text-green-400">{'>'} Message_Transmitted_Successfully</p>
                    <p className="font-mono text-sm text-gray-400">We&apos;ll respond within 24 hours.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="mt-4 font-mono text-sm text-gray-500 underline hover:text-gray-300"
                    >
                        {'>'} Send_Another_Message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8">
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-1.5 ml-1 block font-mono text-xs text-gray-400"
                        >
                            $ enter_name:
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={status === 'loading'}
                            className="w-full rounded-lg border border-gray-700 bg-black/60 px-4 py-3 font-mono text-gray-100 placeholder-gray-600 outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="mb-1.5 ml-1 block font-mono text-xs text-gray-400"
                        >
                            $ enter_work_email:
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'loading'}
                            className="w-full rounded-lg border border-gray-700 bg-black/60 px-4 py-3 font-mono text-gray-100 placeholder-gray-600 outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50"
                            placeholder="name@company.com"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="mb-1.5 ml-1 block font-mono text-xs text-gray-400"
                        >
                            $ define_objective:
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={status === 'loading'}
                            rows={4}
                            className="w-full resize-none rounded-lg border border-gray-700 bg-black/60 px-4 py-3 font-mono text-gray-100 placeholder-gray-600 outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50"
                            placeholder="Describe your project or challenge..."
                        />
                    </div>

                    {status === 'error' && (
                        <p className="animate-pulse font-mono text-xs text-red-500">
                            {errorMessage}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full rounded-lg bg-green-500 py-4 font-mono font-bold uppercase tracking-wider text-black shadow-lg outline-none transition-colors hover:bg-green-400 hover:shadow-green-500/20 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {status === 'loading' ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent"></span>
                                Transmitting...
                            </span>
                        ) : (
                            '> Execute_Contact_Sequence'
                        )}
                    </button>

                    <div className="text-center">
                        <p className="font-mono text-[10px] text-gray-600">
                            * Encryption: AES-256 Enabled.
                        </p>
                    </div>
                </form>
            )}
        </div>
    );
}
