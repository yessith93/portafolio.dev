export function onRequest ({ locals, request }, next) {
    // intercept data from a request
    // optionally, modify the properties in `locals`
    locals.navItems =  [
            {
            "title": "Inicio",
            "label": "home",
            "url": "/#home"
            },
            {
            "title": "Experiencia",
            "label": "workExperience",
            "url": "/#workExperience"
            },
            {
            "title": "Trabajos",
            "label": "works",
            "url": "/#works"
            },
            {
            "title": "Sobre mí",
            "label": "aboutMe",
            "url": "/#aboutMe"
            },
        
        ];

    // return a Response or the result of calling `next()`
    return next();
};