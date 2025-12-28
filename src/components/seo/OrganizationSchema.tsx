import Script from 'next/script';

const OrganizationSchema = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'SolvoVis',
        url: 'https://solvovis.com',
        logo: 'https://solvovis.com/images/solvovis-logo-main.png',
        sameAs: ['https://www.linkedin.com/company/solvovis'],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            areaServed: 'Global',
            availableLanguage: ['English', 'Chinese'],
        },
    };

    return (
        <Script id="org-schema" type="application/ld+json" strategy="beforeInteractive">
            {JSON.stringify(schema)}
        </Script>
    );
};

export default OrganizationSchema;
