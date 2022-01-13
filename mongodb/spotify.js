use('spotify');

db.user.drop();

db.user.insertMany([
    {
        '_id': 1,
        'name': 'Eloi',
        'e_mail': 'eloi@eloi.com',
        'password': '12340987RRt',
        'birth_date': '1988-01-14',
        'sex': 'Non-Binary',
        'CP': 08765,
        'pais': 'FR',
        'estat': 'premium',
        'subscripcio': {
            'id_subscripcio': 1,
            'data_inici': '2016-05-18T17:30:00Z',
            'data_renovacio': '2017-05-18T17:30:00Z',
            'forma_pagament': 'targeta_credit',
            'targeta_credit': {
                'id_targeta': 2343,
                'data_caducitat': '06/23',
                'codi_segureta': 83234
            },
            'pagaments': [
                {
                    'id_pagament': 1,
                    'data_pagament': '2016-05-18T17:30:00Z',
                    'total': 10
                },
                {
                    'id_pagament': 2,
                    'data_pagament': '2016-06-18T17:30:00Z',
                    'total': 10
                }

            ]
        },
        'playlist': [
            { 'id_song': 1, 'id_user': 2, 'date': '2016-07-18T17:30:00Z' },
            { 'id_song': 11, 'id_user': 3, 'date': '2017-06-18T17:30:00Z' },
            { 'id_song': 7, 'id_user': 21, 'date': '2016-3-18T17:30:00Z' }
        ],
        'favourite_album/song_id': [
            { 'id_album/song': 334 },
            { 'id_album/song': 7896245 },
            { 'id_album/song': 87235 }
        ]
    }
]);

db.artist.drop();

db.artist.insertMany([{
    '_id': 14,
    'nom': 'Eloi el bon noi',
    'imatge': 'image.jpg',
    'album': [
        {
            'id_album': 123,
            'titol': 'Adolescencia: no superada',
            'any_publicacio': 2012,
            'imatge': 'image.jpg',
            'song': [
                {
                    'id_song': 234,
                    'titol': 'parricidi',
                    'durada': '03:33:33',
                    'reproduccions': 30000
                },
                {
                    'id_song': 235,
                    'titol': 'mort de son',
                    'durada': '04:23:33',
                    'reproduccions': 36000
                }
            ]
        }],
    'similar_artist': [
        { 'id_artist': 345 },
        { 'id_artist': 1234 },
        { 'id_artist': 123 }
    ]
}])