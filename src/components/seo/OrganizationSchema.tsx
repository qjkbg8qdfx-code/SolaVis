import Script from 'next/script';
import { siteConfig } from '@/config/site';

const OrganizationSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteConfig.name,
        "url": siteConfig.url,
        "logo": `${siteConfig.url}${siteConfig.assets.logo}`,
        "sameAs": [
            siteConfig.linkedin,
        ].filter(Boolean),
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "areaServed": "Global",
            "availableLanguage": ["English", "Chinese"]
        }
    };

    return (
        <Script id="org-schema" type="application/ld+json" strategy="beforeInteractive">
            {JSON.stringify(schema)}
        </Script>
    );
};

export default OrganizationSchema;
