use('pizzeria');

db.comanda.drop();

db.comanda.insertMany([{
    '_id': 1,
    'date': '2016-05-18T16:00:00Z',
    'tipus': 'domicil',
    'preu': 12.76,
    'hora_lliurament': '2016-05-18T17:30:00Z',
    'id_empleat': 4,
    'id_client': 3,
    'id_botiga': 7,
    'productes': [
        {
            'id_producte': 332,
            'quantitat': 2
        },
        {
            'id_producte': 132,
            'quantitat': 1
        },
        {
            'id_producte': 332,
            'quantitat': 2
        },
        {
            'id_producte': 352,
            'quantitat': 1
        }
    ]
},
{ '_id': 2, 'date': '2016-05-18T16:05:00Z', 'tipus': 'local', 'preu': 22.76, 'hora_lliurament': '2016-05-18T17:24:32Z', 'id_empleat': 4, 'id_client': 2, 'id_botiga': 7, 'productes': [{ 'id_producte': 132, 'quantitat': 1 }, { 'id_producte': 532, 'quantitat': 2 }, { 'id_producte': 332, 'quantitat': 2 }, { 'id_producte': 152, 'quantitat': 1 }, { 'id_producte': 52, 'quantitat': 1 }] },
{ '_id': 3, 'date': '2016-05-18T16:15:00Z', 'tipus': 'local', 'preu': 31.16, 'hora_lliurament': '2016-05-18T17:34:12Z', 'id_empleat': 2, 'id_client': 4, 'id_botiga': 7, 'productes': [{ 'id_producte': 132, 'quantitat': 1 }, { 'id_producte': 332, 'quantitat': 2 }, { 'id_producte': 152, 'quantitat': 1 }, { 'id_producte': 52, 'quantitat': 1 }] },
]);

db.botiga.drop();

db.botiga.insertMany([{
    'id_botiga': 1,
    'adressa': 'Carrer Belgrado, 15',
    'CP': 08024,
    'localitat': 'Barcelona',
    'provincia': 'Barcelona',
    'empleats': [
        {
            'id_empleat': 1,
            'nom': 'Marcel',
            'cognom': 'Soley',
            'NIF': '44532778R',
            'telefon': 123456789,
            'tipus': true
        },
        {
            'id_empleat': 2,
            'nom': 'Montse',
            'cognom': 'Bruno',
            'NIF': '44532778R',
            'telefon': 127656789,
            'tipus': true
        },
        {
            'id_empleat': 3,
            'nom': 'Guillem',
            'cognom': 'Voltà',
            'NIF': '44555778U',
            'telefon': 323456789,
            'tipus': false
        }]
},
{ 'id_botiga': 2, 'adressa': 'Av Pompeu Fabra, 12', 'CP': 08124, 'localitat': 'Lleida', 'provincia': 'Lleida', 'empleats': [{ 'id_empleat': 7, 'nom': 'Biel', 'cognom': 'Cuevas', 'NIF': '44532344R', 'telefon': 123456789, 'tipus': true }, { 'id_empleat': 8, 'nom': 'Sílvia', 'cognom': 'Compte', 'NIF': '44532778R', 'telefon': 127656789, 'tipus': true }, { 'id_empleat': 9, 'nom': 'Bibiana', 'cognom': 'Andersen', 'NIF': '44555734R', 'telefon': 323456789, 'tipus': false }] }
]);

db.producte.drop();

db.producte.insertMany([{
    'id_producte': 1,
    'nom_producte': 'Pizza margarita',
    'descripcio': 'massa, tomaquet i mozzarela',
    'imatge': 'pizza.jpg',
    'preu': 12.34,
    'id_Pizza_categoria': 3
},
{ 'id_producte': 2, 'nom_producte': 'refresc cola', 'descripcio': 'refresc cola barato', 'imatge': 'refresc.jpg', 'preu': 2.4 },
{ 'id_producte': 3, 'nom_producte': 'Hamburguesa formatge', 'descripcio': 'pa, hamburguesa, formatge', 'imatge': 'hamb.jpg', 'preu': 9.35 },
{ 'id_producte': 4, 'nom_producte': 'Pizza 4 estacions', 'descripcio': 'massa, tomaquet i mozzarela champinyons', 'imatge': 'pizza2.jpg', 'preu': 11.32, 'id_Pizza_categoria': 2 }
]);

db.pizza_categoria.drop();

db.pizza_categoria.insertMany([
    { 'id_categoria': 1, 'nom_categoria': 'pizza saludable' },
    { 'id_categoria': 2, 'nom_categoria': 'pizza sense gluten' },
    { 'id_categoria': 3, 'nom_categoria': 'pizza vegetariana' },
]);

db.client.drop();

db.client.insertMany([{
    'id_client': 1,
    'nom': 'Manel',
    'cognom': 'Allende',
    'adressa': 'C/Comerç, 24',
    'CP': 09654,
    'telefon': 123456789,
    'localitat': 'Masquefa',
    'provincia': 'Barcelona'
},
{ 'id_client': 2, 'nom': 'Marina', 'cognom': 'Congost', 'adressa': 'C/Pècora, 24', 'CP': 09654, 'telefon': 123456789, 'localitat': 'Manresa', 'provincia': 'Barcelona' },
{ 'id_client': 3, 'nom': 'Carla', 'cognom': 'Cano', 'adressa': 'C/ Demòcrata, 24', 'CP': 09654, 'telefon': 123456789, 'localitat': 'Mataró', 'provincia': 'Barcelona' }
]);