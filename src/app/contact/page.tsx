import { TerminalSquare } from "lucide-react"

export const metadata = {
    title: 'Initialize Audit | SolvoVis',
    description: 'Begin the system audit sequence.',
}

export default function ContactPage() {
    return (
        <div className="max-w-xl mx-auto px-6 pt-32 pb-24">
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-xl mb-6 shadow-xl">
                    <TerminalSquare className="w-6 h-6" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">Initialize System</h1>
                <p className="text-gray-500">Secure Uplink Established.</p>
            </div>

            {/* Terminal Style Form */}
            <div className="bg-gray-900 rounded-3xl p-1 shadow-2xl border border-gray-800">
                <div className="bg-gray-800/50 rounded-t-[20px] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="ml-2 text-[10px] font-mono text-gray-400">root@solvovis-terminal: ~</div>
                </div>

                <div className="p-6 md:p-8 space-y-5">
                    <div>
                        <label className="block text-xs font-mono text-gray-400 mb-1.5 ml-1">$ enter_work_email:</label>
                        <input type="email"
                            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white font-mono placeholder-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all"
                            placeholder="name@company.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-mono text-gray-400 mb-1.5 ml-1">$ define_objective:</label>
                        <select className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white font-mono focus:border-green-500 outline-none appearance-none">
                            <option>Cost_Reduction</option>
                            <option>Process_Automation</option>
                            <option>Data_Cleaning</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <button className="w-full py-4 bg-green-500 hover:bg-green-400 text-black font-mono font-bold uppercase tracking-wider rounded-lg transition-colors shadow-lg hover:shadow-green-500/20 active:scale-[0.98]">
                        &gt; Execute_Audit_Sequence
                    </button>

                    <div className="text-center">
                        <p className="text-[10px] text-gray-600 font-mono">
                            * Encryption: AES-256 Enabled.
                        </p>
                    </div>
                </div>
            </div>

            {/* Trust Signals / Integrated Partners */}
            <div className="mt-12 text-center">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">Compatible With</p>
                <div className="flex justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Using text placeholders for logos as per prompt instruction to place logos, but I don't have images. I will use text representation styled as logos. */}
                    <span className="font-bold text-xl text-gray-800">OpenAI</span>
                    <span className="font-bold text-xl text-gray-800">AWS</span>
                    <span className="font-bold text-xl text-gray-800">HubSpot</span>
                </div>
            </div>
        </div>
    )
}
