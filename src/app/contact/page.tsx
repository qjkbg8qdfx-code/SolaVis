export default function ContactPage() {
    return (
        <div className="max-w-xl mx-auto px-6 py-24">
            <h1 className="text-hero mb-8 text-center">Start the Audit</h1>
            <div className="card-ios space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2 pl-1">Work Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ios-blue outline-none transition-colors bg-gray-50" placeholder="name@company.com" />
                </div>
                <button className="w-full btn-primary">Continue</button>
            </div>
        </div>
    )
}
