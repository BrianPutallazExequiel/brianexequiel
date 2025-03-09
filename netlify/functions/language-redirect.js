// netlify/functions/language-redirect.js
exports.handler = async (event, context) => {
    // Obtener la cabecera "Accept-Language"
    const acceptLanguage = event.headers['accept-language'];

    // Determinar el idioma preferido
    let language = 'en'; // Idioma por defecto
    if (acceptLanguage && acceptLanguage.startsWith('es')) {
        language = 'es';
    }

    // Redirigir al usuario
    return {
        statusCode: 302,
        headers: {
            Location: `/${language}/`,
        },
    };
};