'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        if (!email) {
            e.preventDefault();
            setError('> Error: Email_Required');
            return;
        }
        // Proceed with submission logic (or default HTML behavior for now)
        setError('');
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

            <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8">
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
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError('');
                        }}
                        className={`w-full rounded-lg border bg-black/60 px-4 py-3 ${error ? 'border-red-500' : 'border-gray-700'} font-mono text-gray-100 placeholder-gray-600 outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
                        placeholder="name@company.com"
                    />
                    {error && (
                        <p className="mt-2 animate-pulse font-mono text-xs text-red-500">{error}</p>
                    )}
                </div>
                <div>
                    <label
                        htmlFor="objective"
                        className="mb-1.5 ml-1 block font-mono text-xs text-gray-400"
                    >
                        $ define_objective:
                    </label>
                    <select
                        id="objective"
                        className="w-full appearance-none rounded-lg border border-gray-700 bg-black/60 px-4 py-3 font-mono text-gray-100 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        <option>Cost_Reduction</option>
                        <option>Process_Automation</option>
                        <option>Data_Cleaning</option>
                        <option>Other</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-green-500 py-4 font-mono font-bold uppercase tracking-wider text-black shadow-lg outline-none transition-colors hover:bg-green-400 hover:shadow-green-500/20 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-[0.98]"
                >
                    &gt; Execute_Audit_Sequence
                </button>

                <div className="text-center">
                    <p className="font-mono text-[10px] text-gray-600">
                        * Encryption: AES-256 Enabled.
                    </p>
                </div>
            </form>
        </div>
    );
}
