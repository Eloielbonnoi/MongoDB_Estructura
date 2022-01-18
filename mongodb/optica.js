
db.optica.drop();

use('optica');

db.proveidor.insertMany([{
    '_id': 1,
    'nom': 'Ulleres Bonavista',
    'telefon': 123456789,
    'fax': 987654321,
    'NIF': '440132233W',
    'adress': {
        'carrer': 'Blasco',
        'numero': 3, 'pis': 4,
        'porta': 3, 'ciutat':
            'Centelles',
        'CP': 08540,
        'pais': 'ES'
    },
    'comanda_ulleres': {
        'id_comanda': 2,
        'id_ulleres': [2, 3, 1, 4]
    }
}
]);

db.client.insertMany([{
    '_id': 1,
    'nom': 'Miguel Santasusana',
    'e_mail': 'santasusana@gmail.com',
    'telefon': 123412345,
    'data_registre': '2021-11-23',
    'adress': {
        'carrer': 'Escudellers',
        'numero': 32,
        'pis': 4,
        'porta': 2,
        'ciutat': 'Barcelona',
        'CP': 08021,
        'pais': 'FR'
    },
    'ulleres': {
        '_id': 1,
        'marca': 'No thi fixis',
        'montura': {
            'tipus_montura': 'pasta',
            'color': 'verd'
        },
        'vidres': {
            'graduacio_D': '1.5',
            'graduacio_E': '0.5',
            'color': 'transparent'
        }
    },
    'venda_ulleres': {
        '_id': 1,
        'id_empleat': 2,
        'data_venta': '2019-01-23'
    }
}
]);

