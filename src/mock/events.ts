import { iEvents } from './../interfaces/iEvents';
export const EventsMock: iEvents[] = [
  {
      id: 1,
      data:'18/01/2023',
      name: 'High Tratas Festival',
      idDestination: 1,
      idFriends:[1,3,2],
      image: '/evento1.webp'
  },   
  {
    id: 2,
    data:'27/02/2023',
    name: 'Encontro Vips',
    idDestination: 3,
    idFriends:[4],
    image: '/evento2.jpg'
  },
  {
    id: 3,
    data:'15/01/2023',
    name: 'Retiro das Pedras',
    idDestination: 8,
    idFriends:[8,5,7],
    image: '/evento3.jpg'
  },
  {
    id: 4,
    data:'11/01/2023',
    name: 'Encontro Medieval',
    idDestination: 2,
    idFriends:[3,2,4],
    image: '/evento4.jpg'
  }, 
  {
    id: 5,
    data:'18/01/2023',
    name: 'Retiro das Artes',
    idDestination: 4,
    idFriends:[1,3,4,6],
    image: '/evento5.jpeg'
  }, 
  {
    id: 6,
    data:'18/01/2023',
    name: 'Refugio dos rios',
    idDestination: 6,
    idFriends:[8,2],
    image: '/evento6.jpg'
  },    
  {
    id: 7,
    data:'18/01/2023',
    name: 'Retiro das Artes',
    idDestination: 4,
    idFriends:[9],
    image: '/evento5.jpeg'
  }, 
  {
    id: 8,
    data:'18/01/2023',
    name: 'Refugio dos rios',
    idDestination: 6,
    idFriends:[],
    image: '/evento6.jpg'
  },
  {
    id: 9,
    data:'18/01/2023',
    name: 'Refugio dos rios',
    idDestination: 6,
    idFriends:[],
    image: '/evento6.jpg'
  }
]