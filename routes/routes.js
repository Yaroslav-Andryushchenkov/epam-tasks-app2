module.exports = [
    {
        pattern: '/form',
        methods: ['GET'],
        action: 'form::getAction'
    },
    {
        pattern: '/items',
        methods: ['POST'],
        action: 'items::postAction'
    },
    {
        pattern: '/items',
        methods: ['DELETE'],
        action: 'items::deleteAllAction'
    },
    {
        pattern: '/items',
        methods: ['GET'],
        action: 'items::getAction'
    },
    {
        pattern: '/front/.*',
        methods: ['GET'],
        action: 'front::getFile'
    },
    {
        pattern: '/cats-clicker/.*',
        methods: ['GET'],
        action: 'catsClicker::getFile'
    },
    {
        pattern: '/cats-clicker-api',
        methods: ['POST'],
        action: 'catsClicker::postAction'
    },
    {
        pattern: '/cats-clicker-api',
        methods: ['DELETE'],
        action: 'catsClicker::deleteAllAction'
    },
    {
        pattern: '/cats-clicker-api',
        methods: ['GET'],
        action: 'icatsClicker::getAction'
    },
];
