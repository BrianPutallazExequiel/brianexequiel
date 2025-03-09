const preferredLanguage = navigator.language.startsWith('es') ? 'es' : 'en';

if (window.location.pathname === '/') {
    window.location.href = `/${preferredLanguage}`;
}