export default function ServicesPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <h1 className="text-hero mb-12">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card-ios h-64">Strategy & Consulting</div>
                <div className="card-ios h-64">Automation Building</div>
                <div className="card-ios h-64">Data Engineering</div>
                <div className="card-ios h-64">Workforce Training</div>
            </div>
        </div>
    )
}
