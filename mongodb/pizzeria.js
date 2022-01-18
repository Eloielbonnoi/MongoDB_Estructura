db.pizzeria.drop();

use('pizzeria');

db.botiga.insertMany([{
    'id_botiga': 1, 
    'adressa': 'Carrer Belgrado, 15', 
    'CP': 08024, 
    'localitat': 'Barcelona', 
    'provincia': 'Barcelona', 
    'empleats':[
        {'id_empleat': 1, 
        'nom': 'Marcel', 
        'cognom': 'Soley', 
        'NIF': '44532778R', 
        'telefon': 123456789, 
        'tipus': true
        },
        {'id_empleat': 2, 
        'nom': 'Montse', 
        'cognom': 'Bruno', 
        'NIF': '44532778R', 
        'telefon': 127656789, 
        'tipus': true
        },
        {'id_empleat': 3, 
        'nom': 'Guillem', 
        'cognom': 'Voltà', 
        'NIF': '44555778U', 
        'telefon':323456789, 
        'tipus': false}],
    'comanda': {
        '_id': 1 ,
        'date': '2016-05-18T16:00:00Z', 
        'tipus': 'domicil', 
        'preu': 12.76, 
        'hora_lliurament': '2016-05-18T17:30:00Z', 
        'id_empleat': 4, 
        'id_client': 3, 
        'id_botiga': 7, 
        'productes': [
            {'id_producte' : 332, 
            'quantitat': 2 
            },
            {'id_producte' : 132, 
            'quantitat': 1 
            }, 
            {'id_producte' : 332, 
            'quantitat': 2 
            }, 
            {'id_producte' : 352, 
            'quantitat': 1 } 
        ]}
}]);

db.producte.insertMany([{
    'id_producte': 1, 
    'nom_producte': 'Pizza margarita', 
    'descripcio': 'massa, tomaquet i mozzarela', 
    'imatge': 'pizza.jpg', 
    'preu': 12.34, 
    'pizza_categoria':
    {'id_categoria': 1, 'nom_categoria': 'pizza saludable'}
    }
]);


db.client.insertMany([{
    'id_client': 1, 
    'nom': 'Manel', 
    'cognom': 'Allende', 
    'adressa': 'C/Comerç, 24', 
    'CP': 09654, 
    'telefon': 123456789, 
    'localitat': 'Masquefa', 
    'provincia': 'Barcelona'
    }
]);