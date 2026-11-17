export const brand = {
 name: 'Jalber',
 tagline: 'El estilo permanece.',
 about: 'Creemos en una forma de vestir que no necesita levantar la voz. En las siluetas sencillas, los tonos que conviven y las piezas que se vuelven parte de tu historia. Jalber nace como una exploración del estilo clásico, con una mirada propia.',
 hero: `${import.meta.env.BASE_URL}images/hero.jpg`,
 editorial: `${import.meta.env.BASE_URL}images/editorial.jpg`,
 instagram: '', contactEmail: '',
};
export const sizes = ['XS', 'S', 'M', 'L', 'XL'];
export const products = [
 {id:'grand-hotel',name:'Grand Hôtel',category:'Playeras',price:590,colors:[{name:'Negro',hex:'#272724'}],image:`${import.meta.env.BASE_URL}images/grand-hotel.png`,fallback:`${import.meta.env.BASE_URL}images/tee-black.svg`,composite:true,description:'Playera negra con monograma Jab al frente. La espalda presenta el diseño Grand Hôtel: equipaje vintage, una llave y una etiqueta en tonos dorados y cuero. Composición y medidas por confirmar.'},
 {id:'court-society',name:'Court Society',category:'Playeras',price:590,colors:[{name:'Blanco hueso',hex:'#e9e5d9'}],image:`${import.meta.env.BASE_URL}images/court-society.png`,fallback:`${import.meta.env.BASE_URL}images/tee-ivory.svg`,composite:true,description:'Playera blanco hueso con monograma Jab al frente. Diseño Court Society en la espalda: raquetas clásicas, cancha y casa de club, con detalles verde oscuro y dorado. Composición y medidas por confirmar.'},
 {id:'sail-club',name:'The Sail Club',category:'Playeras',price:590,colors:[{name:'Blanco hueso',hex:'#e9e5d9'}],image:`${import.meta.env.BASE_URL}images/sail-club.png`,fallback:`${import.meta.env.BASE_URL}images/tee-ivory.svg`,composite:true,description:'Playera blanco hueso con monograma Jab al frente. En la espalda, The Sail Club reúne un velero clásico, el mar y una brújula en una ilustración de inspiración náutica. Composición y medidas por confirmar.'},
 {id:'polo-forest',name:'Polo Club',category:'Polos',price:990,colors:[{name:'Verde bosque',hex:'#294536'},{name:'Blanco hueso',hex:'#e9e5d9'}],image:`${import.meta.env.BASE_URL}images/polo-forest.svg`,description:'Cuello clásico, líneas sobrias y una presencia discreta. Inspirado en los códigos del guardarropa de club. Diseño y materiales por definir.'},
 {id:'sweat-ivory',name:'Sudadera Heritage',category:'Sudaderas',price:1290,colors:[{name:'Avena',hex:'#c5b8a1'},{name:'Verde bosque',hex:'#294536'}],image:`${import.meta.env.BASE_URL}images/sweat-ivory.svg`,description:'Volumen cómodo y un aire deportivo de otra época. Una propuesta para los días que invitan a bajar el ritmo. Diseño y materiales por definir.'},
];
export const money = value => new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(value);
