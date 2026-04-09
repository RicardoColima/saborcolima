import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBarsStore = defineStore('bars', () => {
  const bars = ref([
    {
      id: 1,
      name: 'El Borbollón',
      type: 'Mariscos',
      category: 'Restaurante',
      rating: 4.8,
      reviews: 324,
      price: 3,
      priceRange: '$$$',
      location: 'Colima Capital',
      latitude: 19.2435,
      longitude: -103.7248,
      address: 'Av. Constitución 123, Centro, Colima',
      description: 'El mejor marisco de la región. Famoso por sus aguachiles y ceviches. Ambiente familiar con terraza al aire libre.',
      images: [
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800'
      ],
      features: ['Terraza', 'Barra de mariscos', 'Estacionamiento', 'Aire acondicionado'],
      hours: '12:00 PM - 11:00 PM',
      phone: '(312) 123-4567'
    },
    {
      id: 2,
      name: 'La Casona',
      type: 'Mexicana',
      category: 'Restaurante-Bar',
      rating: 4.5,
      reviews: 256,
      price: 3,
      priceRange: '$$$',
      location: 'Colima Capital',
      latitude: 19.2399,
      longitude: -103.7308,
      address: 'Calle Hidalgo 456, Centro Histórico, Colima',
      description: 'Tradición colimense en cada platillo. Cocina de autor con toques modernos. Amplia selección de mezcales artesanales.',
      images: [
        'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?w=800',
        'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800',
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800'
      ],
      features: ['Barra de mezcales', 'Música en vivo', 'Reservaciones', 'Aire acondicionado'],
      hours: '1:00 PM - 2:00 AM',
      phone: '(312) 234-5678'
    },
    {
      id: 3,
      name: 'Terraza 54',
      type: 'Bar',
      category: 'Bar',
      rating: 4.7,
      reviews: 189,
      price: 2,
      priceRange: '$$',
      location: 'Colima Capital',
      latitude: 19.2511,
      longitude: -103.7156,
      address: 'Av. Revolución 54, Jardín, Colima',
      description: 'Vistas panorámicas de la ciudad desde la terraza. Cocktails creativos y ambiente relajado. Perfecto para el atardecer.',
      images: [
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800',
        'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800',
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800'
      ],
      features: ['Terraza panorámica', 'Cocktails', 'Pet-friendly', 'Happy hour'],
      hours: '5:00 PM - 2:00 AM',
      phone: '(312) 345-6789'
    },
    {
      id: 4,
      name: 'Café del Portal',
      type: 'Café',
      category: 'Cafetería',
      rating: 4.6,
      reviews: 412,
      price: 1,
      priceRange: '$',
      location: 'Colima Capital',
      latitude: 19.2442,
      longitude: -103.7273,
      address: 'Portal Morelos 12, Centro, Colima',
      description: 'Café de especialidad en el corazón de Colima. Pan artesanal y postres deliciosos. Ideal para trabajar o una cita casual.',
      images: [
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
        'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800',
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800'
      ],
      features: ['WiFi', 'Ambiente de trabajo', 'Postres', 'Desayunos'],
      hours: '7:00 AM - 9:00 PM',
      phone: '(312) 456-7890'
    },
    {
      id: 5,
      name: 'El Puerto Nuevo',
      type: 'Mariscos',
      category: 'Restaurante',
      rating: 4.9,
      reviews: 567,
      price: 2,
      priceRange: '$$',
      location: 'Manzanillo',
      latitude: 19.0542,
      longitude: -104.3189,
      address: 'Blvd. Miguel de la Madrid 789, Santiago, Manzanillo',
      description: 'Frente al mar con la mejor vista de la bahía. Mariscos frescos pescados el mismo día. Especialidad en filete de pescado zarandeado.',
      images: [
        'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800',
        'https://images.unsplash.com/photo-1544025162-d76690b56f12?w=800',
        'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?w=800'
      ],
      features: ['Vista al mar', 'Pesca del día', 'Terraza', 'Estacionamiento'],
      hours: '11:00 AM - 10:00 PM',
      phone: '(314) 123-4567'
    },
    {
      id: 6,
      name: 'Bar 7 Mares',
      type: 'Bar',
      category: 'Bar-Lounge',
      rating: 4.4,
      reviews: 145,
      price: 3,
      priceRange: '$$$',
      location: 'Manzanillo',
      latitude: 19.0475,
      longitude: -104.3243,
      address: 'Av. Lázaro Cárdenas 234, Centro, Manzanillo',
      description: 'Elegancia junto al Pacífico. Cocktails tropicales y ambiente sofisticado. Frecuentado por visitantes de yates.',
      images: [
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800',
        'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800',
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800'
      ],
      features: ['Cocktails tropicales', 'Vista al puerto', 'Música lounge', 'Reservaciones'],
      hours: '6:00 PM - 3:00 AM',
      phone: '(314) 234-5678'
    },
    {
      id: 7,
      name: 'Tacos El Güero',
      type: 'Mexicana',
      category: 'Taquería',
      rating: 4.7,
      reviews: 892,
      price: 1,
      priceRange: '$',
      location: 'Colima Capital',
      latitude: 19.2465,
      longitude: -103.7210,
      address: 'Calle Zaragoza 567, Centro, Colima',
      description: 'Auténticos tacos al pastor y de trompo. Salsas caseras picantes. El favorito de locales y estudiantes desde 1985.',
      images: [
        'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800',
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800',
        'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800'
      ],
      features: ['Tacos al pastor', 'Salsas caseras', 'Precios económicos', 'Ambiente informal'],
      hours: '6:00 PM - 2:00 AM',
      phone: '(312) 567-8901'
    },
    {
      id: 8,
      name: 'Casa Luna',
      type: 'Fine Dining',
      category: 'Restaurante',
      rating: 4.8,
      reviews: 178,
      price: 4,
      priceRange: '$$$$',
      location: 'Comala',
      latitude: 19.3287,
      longitude: -103.7595,
      address: 'Calle Morelos 89, Pueblo Mágico, Comala',
      description: 'Experiencia gastronómica de altura en el Pueblo Mágico. Menú degustación con ingredientes locales. Perfecto para ocasiones especiales.',
      images: [
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800'
      ],
      features: ['Menú degustación', 'Vino local', 'Reservación obligatoria', 'Vista al volcán'],
      hours: '2:00 PM - 11:00 PM',
      phone: '(312) 678-9012'
    },
    {
      id: 9,
      name: 'Rincón Tapatío',
      type: 'Mexicana',
      category: 'Cantina',
      rating: 4.3,
      reviews: 234,
      price: 2,
      priceRange: '$$',
      location: 'Colima Capital',
      latitude: 19.2508,
      longitude: -103.7168,
      address: 'Av. Gonzalo de Sandoval 345, Jardín, Colima',
      description: 'Cantina tradicional con botanas gratis. Mariachi los fines de semana. La cerveza más fría de la ciudad.',
      images: [
        'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800',
        'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800',
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800'
      ],
      features: ['Botanas gratis', 'Mariachi', 'Cerveza fría', 'Ambiente tradicional'],
      hours: '11:00 AM - 1:00 AM',
      phone: '(312) 789-0123'
    },
    {
      id: 10,
      name: 'Brew Station',
      type: 'Bar',
      category: 'Cervecería Artesanal',
      rating: 4.6,
      reviews: 198,
      price: 2,
      priceRange: '$$',
      location: 'Colima Capital',
      latitude: 19.2575,
      longitude: -103.7089,
      address: 'Av. Benito Juárez 678, Guayabal, Colima',
      description: 'Cervezas artesanales locales. 12 estilos diferentes y rotación constante. Hamburguesas gourmet para acompañar.',
      images: [
        'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800',
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800',
        'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800'
      ],
      features: ['Cerveza artesanal', 'Hamburguesas', 'Growlers', 'Eventos de cata'],
      hours: '4:00 PM - 12:00 AM',
      phone: '(312) 890-1234'
    },
    {
      id: 11,
      name: 'Marejada',
      type: 'Mariscos',
      category: 'Restaurante',
      rating: 4.5,
      reviews: 312,
      price: 2,
      priceRange: '$$',
      location: 'Manzanillo',
      latitude: 19.0518,
      longitude: -104.3255,
      address: 'Playa de Santiago, Blvd. Costero, Manzanillo',
      description: 'A orilla del mar con los pies en la arena. Ceviche de sierra y camarones al mojo de ajo son imperdibles.',
      images: [
        'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?w=800',
        'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800',
        'https://images.unsplash.com/photo-1544025162-d76690b56f12?w=800'
      ],
      features: ['Playa privada', 'Área de niños', 'Palapas', 'Puesta de sol'],
      hours: '10:00 AM - 8:00 PM',
      phone: '(314) 345-6789'
    },
    {
      id: 12,
      name: 'La Esquina del Sabor',
      type: 'Mexicana',
      category: 'Fonda',
      rating: 4.7,
      reviews: 445,
      price: 1,
      priceRange: '$',
      location: 'Villa de Álvarez',
      latitude: 19.2655,
      longitude: -103.7358,
      address: 'Av. Ejército Mexicano 901, Centro, Villa de Álvarez',
      description: 'Comida casera colimense como la de la abuela. Pozole los jueves, birria los domingos. Precios inmejorables.',
      images: [
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800',
        'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800',
        'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800'
      ],
      features: ['Comida corrida', 'Precios económicos', 'Ambiente familiar', 'Servicio rápido'],
      hours: '8:00 AM - 6:00 PM',
      phone: '(312) 901-2345'
    },
    {
      id: 13,
      name: 'Pizzería Napoli',
      type: 'Pizza',
      category: 'Pizzería',
      rating: 4.6,
      reviews: 312,
      price: 2,
      priceRange: '$$',
      location: 'Colima Capital',
      latitude: 19.2418,
      longitude: -103.7195,
      address: 'Av. 20 de Noviembre 234, Centro, Colima',
      description: 'Pizza al horno de leña con masa artesanal napolitana. Ingredientes importados de Italia y queso mozzarella fresco.',
      images: [
        'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800',
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800',
        'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800'
      ],
      features: ['Horno de leña', 'Pizza napolitana', 'Delivery', 'Vino italiano'],
      hours: '1:00 PM - 11:00 PM',
      phone: '(312) 234-5678'
    },
    {
      id: 14,
      name: 'Sushi Factory',
      type: 'Sushi',
      category: 'Restaurante Japonés',
      rating: 4.5,
      reviews: 245,
      price: 3,
      priceRange: '$$$',
      location: 'Colima Capital',
      latitude: 19.2502,
      longitude: -103.7175,
      address: 'Av. Gonzalo de Sandoval 567, Jardín, Colima',
      description: 'Sushi fresco y creativo rolls. Ramen casero y sake premium. Ambiente moderno con música lounge.',
      images: [
        'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800',
        'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800',
        'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800'
      ],
      features: ['Sushi bar', 'Ramen', 'Sake', 'Reservaciones'],
      hours: '1:00 PM - 10:30 PM',
      phone: '(312) 345-6789'
    },
    {
      id: 15,
      name: 'Burger House',
      type: 'Hamburguesas',
      category: 'Hamburguesería',
      rating: 4.4,
      reviews: 528,
      price: 2,
      priceRange: '$$',
      location: 'Villa de Álvarez',
      latitude: 19.2682,
      longitude: -103.7389,
      address: 'Av. Cristóbal Colón 789, Centro, Villa de Álvarez',
      description: 'Hamburguesas gourmet con carne 100% de res. Pan artesanal y salsas caseras. Malteadas espesas.',
      images: [
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
        'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800',
        'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800'
      ],
      features: ['Carne 100% res', 'Pan artesanal', 'Malteadas', 'Delivery'],
      hours: '12:00 PM - 11:00 PM',
      phone: '(312) 456-7890'
    },
    {
      id: 16,
      name: 'Trattoria Roma',
      type: 'Italiana',
      category: 'Restaurante Italiano',
      rating: 4.7,
      reviews: 189,
      price: 3,
      priceRange: '$$$',
      location: 'Manzanillo',
      latitude: 19.0558,
      longitude: -104.3203,
      address: 'Av. Lázaro Cárdenas 890, Santiago, Manzanillo',
      description: 'Auténtica cocina italiana con pasta fresca hecha en casa. Risottos y ossobuco imperdibles. Vista al mar.',
      images: [
        'https://images.unsplash.com/photo-1551183053-bf91b1d3116c?w=800',
        'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800',
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800'
      ],
      features: ['Pasta fresca', 'Vinos italianos', 'Vista al mar', 'Reservaciones'],
      hours: '2:00 PM - 11:00 PM',
      phone: '(314) 567-8901'
    },
    {
      id: 17,
      name: 'El Buen Cafe',
      type: 'Café',
      category: 'Cafetería',
      rating: 4.8,
      reviews: 634,
      price: 1,
      priceRange: '$',
      location: 'Tecomán',
      latitude: 18.9173,
      longitude: -103.8723,
      address: 'Calle Francisco I. Madero 123, Centro, Tecomán',
      description: 'Café de Veracruz tostado localmente. Chilaquiles y molletes para el desayuno. Postres caseros.',
      images: [
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
        'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800'
      ],
      features: ['Café de especialidad', 'Desayunos', 'Postres', 'Ambiente de trabajo'],
      hours: '7:00 AM - 10:00 PM',
      phone: '(313) 123-4567'
    },
    {
      id: 18,
      name: 'Asador El Argentino',
      type: 'Cortes',
      category: 'Parrilla',
      rating: 4.9,
      reviews: 278,
      price: 4,
      priceRange: '$$$$',
      location: 'Colima Capital',
      latitude: 19.2425,
      longitude: -103.7238,
      address: 'Av. Constitución 890, Centro, Colima',
      description: 'Cortes de carne argentinos a la parrilla. Chimichurri casero y vinos de Mendoza. Experiencia premium.',
      images: [
        'https://images.unsplash.com/photo-1544025162-d76690b56f12?w=800',
        'https://images.unsplash.com/photo-1504973960431-1c467e159aa4?w=800',
        'https://images.unsplash.com/photo-1558030006-450675393462?w=800'
      ],
      features: ['Cortes premium', 'Parrilla argentina', 'Vinos', 'Reservación obligatoria'],
      hours: '2:00 PM - 12:00 AM',
      phone: '(312) 678-9012'
    },
    {
      id: 19,
      name: 'El Desayunador',
      type: 'Desayunos',
      category: 'Restaurante',
      rating: 4.6,
      reviews: 445,
      price: 2,
      priceRange: '$$',
      location: 'Coquimatlán',
      latitude: 19.2018,
      longitude: -103.8018,
      address: 'Av. Juárez 234, Centro, Coquimatlán',
      description: 'El mejor lugar para desayunar en la región. Huevos rancheros, chilaquiles y pan francés. Café de olla.',
      images: [
        'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800',
        'https://images.unsplash.com/photo-1484723091169-283472f5c2c1?w=800',
        'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800'
      ],
      features: ['Desayunos todo el día', 'Café de olla', 'Pan dulce', 'Ambiente familiar'],
      hours: '7:00 AM - 2:00 PM',
      phone: '(312) 789-0123'
    },
    {
      id: 20,
      name: 'Green Garden',
      type: 'Vegana',
      category: 'Restaurante Vegano',
      rating: 4.7,
      reviews: 156,
      price: 2,
      priceRange: '$$',
      location: 'Colima Capital',
      latitude: 19.2448,
      longitude: -103.7189,
      address: 'Calle Reforma 456, Centro, Colima',
      description: 'Comida vegana creativa y nutritiva. Bowls, smoothies y postres sin azúcar. Pet-friendly con jardín.',
      images: [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800',
        'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800'
      ],
      features: ['100% vegano', 'Jardín', 'Smoothies', 'Pet-friendly'],
      hours: '9:00 AM - 9:00 PM',
      phone: '(312) 890-1234'
    },
    {
      id: 21,
      name: 'Barrio Cantina',
      type: 'Bar',
      category: 'Cantina',
      rating: 4.3,
      reviews: 298,
      price: 2,
      priceRange: '$$',
      location: 'Comala',
      latitude: 19.3275,
      longitude: -103.7578,
      address: 'Calle Morelos 123, Pueblo Mágico, Comala',
      description: 'Cantina tradicional en el Pueblo Mágico. Mezcal artesanal de la región y tacos al carbón. Ambiente rústico.',
      images: [
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800',
        'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800',
        'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800'
      ],
      features: ['Mezcal artesanal', 'Tacos al carbón', 'Música regional', 'Decoración rústica'],
      hours: '12:00 PM - 11:00 PM',
      phone: '(312) 901-2345'
    },
    {
      id: 22,
      name: 'La Cevichería',
      type: 'Mariscos',
      category: 'Cevichería',
      rating: 4.8,
      reviews: 412,
      price: 2,
      priceRange: '$$',
      location: 'Minatitlán',
      latitude: 19.0345,
      longitude: -104.0689,
      address: 'Av. Principal 567, Centro, Minatitlán',
      description: 'Especialistas en ceviches y aguachiles. Pescado del día directo de la costa. Micheladas premium.',
      images: [
        'https://images.unsplash.com/photo-1535400255456-984241443b29?w=800',
        'https://images.unsplash.com/photo-1541544537156-21c5299229d5?w=800',
        'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?w=800'
      ],
      features: ['Ceviche fresco', 'Aguachiles', 'Micheladas', 'Ambiente playero'],
      hours: '11:00 AM - 8:00 PM',
      phone: '(314) 345-6789'
    },
    {
      id: 23,
      name: 'Tacos El Carnal',
      type: 'Mexicana',
      category: 'Taquería',
      rating: 4.5,
      reviews: 789,
      price: 1,
      priceRange: '$',
      location: 'Armería',
      latitude: 18.9345,
      longitude: -103.9678,
      address: 'Calle Hidalgo 789, Centro, Armería',
      description: 'Tacos de carne asada y birria estilo Jalisco. Salsas únicas y tortillas hechas a mano. Abierto hasta tarde.',
      images: [
        'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800',
        'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800',
        'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800'
      ],
      features: ['Carne asada', 'Birria', 'Tortillas a mano', 'Abierto hasta tarde'],
      hours: '6:00 PM - 2:00 AM',
      phone: '(313) 456-7890'
    },
    {
      id: 24,
      name: 'La Brasa Chicken',
      type: 'Cortes',
      category: 'Pollería',
      rating: 4.4,
      reviews: 356,
      price: 2,
      priceRange: '$$',
      location: 'Colima Capital',
      latitude: 19.2589,
      longitude: -103.7058,
      address: 'Av. Benito Juárez 1234, Centro, Colima',
      description: 'Pollo a la brasa estilo peruano con papas fritas caseras. Ensaladas frescas y cremas variadas.',
      images: [
        'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800',
        'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800',
        'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800'
      ],
      features: ['Pollo a la brasa', 'Papas fritas', 'Ensaladas', 'Delivery'],
      hours: '11:00 AM - 10:00 PM',
      phone: '(312) 567-8901'
    }
  ])

  const searchQuery = ref('')
  const selectedType = ref('')
  const selectedLocation = ref('')
  const selectedPrice = ref('')
  const selectedRating = ref('')

  const types = ref(['Mexicana', 'Mariscos', 'Bar', 'Café', 'Fine Dining', 'Pizza', 'Sushi', 'Hamburguesas', 'Italiana', 'Cortes', 'Desayunos', 'Vegana'])
  const locations = ref(['Colima Capital', 'Manzanillo', 'Comala', 'Villa de Álvarez', 'Tecomán', 'Coquimatlán', 'Minatitlán', 'Armería'])

  const filteredBars = () => {
    return bars.value.filter(bar => {
      const matchesSearch = searchQuery.value === '' || 
        bar.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        bar.type.toLowerCase().includes(searchQuery.value.toLowerCase())
      
      const matchesType = selectedType.value === '' || bar.type === selectedType.value
      const matchesLocation = selectedLocation.value === '' || bar.location === selectedLocation.value
      const matchesPrice = selectedPrice.value === '' || bar.price <= parseInt(selectedPrice.value)
      const matchesRating = selectedRating.value === '' || bar.rating >= parseFloat(selectedRating.value)

      return matchesSearch && matchesType && matchesLocation && matchesPrice && matchesRating
    })
  }

  const getBarById = (id) => {
    return bars.value.find(bar => bar.id === parseInt(id))
  }

  return {
    bars,
    searchQuery,
    selectedType,
    selectedLocation,
    selectedPrice,
    selectedRating,
    types,
    locations,
    filteredBars,
    getBarById
  }
})
