use('optica');

db.proveidor.drop();

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
    }
},
{ '_id': 2, 'nom': 'Montura Tura', 'telefon': 122356789, 'fax': 987664321, 'NIF': '441932233W', 'adress': { 'carrer': 'Canuda', 'numero': 66, 'pis': 7, 'porta': 3, 'ciutat': 'Barcelona', 'CP': 08024, 'pais': 'ES' } },
{ '_id': 3, 'nom': 'Ojo que mojo', 'telefon': 123456173, 'fax': 998054321, 'NIF': '440191133W', 'adress': { 'carrer': 'Carrossers', 'numero': 23, 'pis': 8, 'porta': 3, 'ciutat': 'Barcelona', 'CP': 08001, 'pais': 'ES' } }
]);

db.client.drop();

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
    }
},
{ '_id': 2, 'nom': 'Marta Morales', 'e_mail': 'martita@hotmail.com', 'telefon': 123454234, 'data_registre': '2019-06-23', 'id_client_recomana': 4, 'adress': { 'carrer': 'Diagonal', 'numero': 2, 'pis': 4, 'porta': 2, 'ciutat': 'El Prat', 'CP': 09221, 'pais': 'ES' } },
{ '_id': 3, 'nom': 'Antonio Martines', 'e_mail': 'itsme@gmail.com', 'telefon': 123342345, 'data_registre': '2019-03-12', 'id_client_recomana': 4, 'adress': { 'carrer': 'Bemoll', 'numero': 132, 'pis': 1, 'porta': 1, 'ciutat': 'Centelles', 'CP': 08540, 'pais': 'FR' } },
{ '_id': 4, 'nom': 'Mònica Randall`', 'e_mail': 'monica@gmail.com', 'telefon': 123412345, 'data_registre': '2021-05-13', 'adress': { 'carrer': 'Fabra', 'numero': 22, 'pis': 4, 'porta': 2, 'ciutat': 'Lleida', 'CP': 08021, 'pais': 'ES' } },
{ '_id': 5, 'nom': 'Eloi Martí`', 'e_mail': 'ieloi@gmail.com', 'telefon': 127712345, 'data_registre': '2020-02-03', 'id_client_recomana': 2, 'adress': { 'carrer': 'Martí', 'numero': 62, 'pis': 4, 'porta': 2, 'ciutat': 'Lleida', 'CP': 08021, 'pais': 'ES' } }
]);

db.comanda_ulleres.drop();

db.comanda_ulleres.insertMany([{
    '_id': 1,
    'id_proveidor': 2,
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
    }
},
{ '_id': 2, 'id_proveidor': 2, 'ulleres': { '_id': 2, 'marca': 'Rolex', 'montura': { 'tipus_montura': 'flotant', 'color': 'negre' }, 'vidres': { 'graduacio_D': '1.5', 'graduacio_E': '0.5', 'color': 'transparent' } } },
{ '_id': 3, 'id_proveidor': 1, 'ulleres': { '_id': 3, 'marca': 'Rayban', 'montura': { 'tipus_montura': 'flotant', 'color': 'negre' }, 'vidres': { 'graduacio_D': '0.5', 'graduacio_E': '0.5', 'color': 'blau' } } },
{ '_id': 4, 'id_proveidor': 3, 'ulleres': { '_id': 1, 'marca': 'Rayban', 'montura': { 'tipus_montura': 'pasta', 'color': 'blanc' }, 'vidres': { 'graduacio_D': '2.5', 'graduacio_E': '1.5', 'color': 'transparent' } } }
]);

db.venda_ulleres.drop();

db.venda_ulleres.insertMany([
    { '_id': 1, 'id_ulleres': 1, 'id_empleat': 2, 'data_venta': '2019-01-23' },
    { '_id': 2, 'id_ulleres': 2, 'id_empleat': 2, 'data_venta': '2021-03-13' },
    { '_id': 3, 'id_ulleres': 1, 'id_empleat': 3, 'data_venta': '2019-10-17' },
    { '_id': 4, 'id_ulleres': 2, 'id_empleat': 2, 'data_venta': '2020-01-22' }
]);