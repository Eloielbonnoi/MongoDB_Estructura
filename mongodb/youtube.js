use('youtube');

db.use.drop();

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
        'canal': {
            'id_canal': 1,
            'nom_canal': 'Mis gatitos',
            'descripcio': 'molts gats',
            'data_creacio': '2016-05-18T17:30:00Z',
            'subscriptors': [
                { 'id_user': 23 },
                { 'id_user': 3 },
                { 'id_user': 13 }
            ]
        }
        , 'playlist': [{
            'id_playlist': 1,
            'nom': 'hard_techno',
            'data_creacio': '2016-05-18T17:30:00Z',
            'estat': 'publica',
            'videos': [
                { 'id_video': 1 },
                { 'id_video': 45 },
                { 'id_video': 125 },
                { 'id_video': 17 }
            ]
        }]
    },
    { '_id': 2, 'name': 'Marcelo', 'e_mail': 'marcelo@eloi.com', 'password': '12340987RRt', 'birth_date': '1988-01-14', 'sex': 'Male', 'CP': 08765, 'pais': 'Es', 'canal': { 'id_canal': 2, 'nom_canal': 'Mis bricolages', 'descripcio': 'clau anglesa', 'data_creacio': '2016-05-18T17:30:00Z', 'subscriptors': [{ 'id_user': 23 }, { 'id_user': 3 }] } }
]);



db.video.insertMany([{
    '_id': 1,
    'titol': 'Yo cayéndome',
    'descripcio': 'me caigo y te ries',
    'tamany': 256,
    'nom_arxiu': 'teries.avi',
    'durada': '03:05:33',
    'thumbnail': 'image.jpg',
    'reproduccions': 300,
    'likes': 300,
    'dislikes': 2,
    'estat': true,
    'etiquetes': {
        'id_etiqueta': 1,
        'nom_etiqueta': 'et_1',
        'id_creador': 1,
        'hora': '2016-05-18T17:30:00Z',
    },
    'likes': [
        { 'id_user': 1, 'data': '2016-05-18T17:30:00Z' },
        { 'id_user': 31, 'data': '2016-05-18T17:30:00Z' },
        { 'id_user': 4, 'data': '2016-05-18T17:30:00Z' }
    ],
    'dislikes': [
        { 'id_user': 2, 'data': '2016-05-18T17:30:00Z' },
        { 'id_user': 6, 'data': '2016-05-18T17:30:00Z' }
    ],
    'comentaris': [
        {
            'id_comentari': 1,
            'comentari': 'video molt maco',
            'data': '2016-05-18T17:30:00Z',
            'likes': [
                { 'id_user': 15, 'data': '2016-05-18T17:30:00Z' },
                { 'id_user': 3, 'data': '2016-05-18T17:30:00Z' },
                { 'id_user': 44, 'data': '2016-05-18T17:30:00Z' }
            ],
            'dislikes': [
                { 'id_user': 65, 'data': '2016-05-18T17:30:00Z' }
            ]
        },
        {
            'id_comentari': 2,
            'comentari': 'molt educatiu',
            'data': '2016-05-18T17:30:00Z',
            'likes': [
                { 'id_user': 15, 'data': '2016-05-18T17:30:00Z' },
                { 'id_user': 3, 'data': '2016-05-18T17:30:00Z' }
            ]
        }
    ]
},
{
    '_id': 2, 'titol': 'Iron Maiden', 'descripcio': 'Como molan', 'tamany': 156, 'nom_arxiu': 'teries.avi', 'durada': '03:05:33', 'thumbnail': 'image.jpg', 'reproduccions': 6666, 'likes': 30000, 'dislikes': 4, 'estat': true, 'etiquetes': { 'id_etiqueta': 2, 'nom_etiqueta': 'et_1', 'id_creador': 16, 'hora': '2016-05-18T17:30:00Z' }, 'likes': [{ 'id_user': 1, 'data': '2016-05-18T17:30:00Z' }, { 'id_user': 31, 'data': '2016-05-18T17:30:00Z' }, { 'id_user': 4, 'data': '2016-05-18T17:30:00Z' }], 'dislikes': [{ 'id_user': 2, 'data': '2016-05-18T17:30:00Z' }, { 'id_user': 6, 'data': '2016-05-18T17:30:00Z' }], 'comentaris': [{ 'id_comentari': 1, 'comentari': 'menuda mierda de grupo', 'data': '2016-05-18T17:30:00Z', 'likes': [{ 'id_user': 15, 'data': '2016-05-18T17:30:00Z' }, { 'id_user': 3, 'data': '2016-05-18T17:30:00Z' }, { 'id_user': 44, 'data': '2016-05-18T17:30:00Z' }], 'dislikes': [{ 'id_user': 65, 'data': '2016-05-18T17:30:00Z' }] }, { 'id_comentari': 2, 'comentari': 'molt educatiu', 'data': '2016-05-18T17:30:00Z', 'likes': [{ 'id_user': 15, 'data': '2016-05-18T17:30:00Z' }, { 'id_user': 3, 'data': '2016-05-18T17:30:00Z' }] }]
}
]);