'use client';

export default function CookieSettingsTrigger() {
    const handleClick = () => {
        window.dispatchEvent(new Event('reset-cookie-consent'));
    };

    return (
        <button
            onClick={handleClick}
            className="text-white transition-colors hover:text-ios-blue"
        >
            Cookie Settings
        </button>
    );
}
