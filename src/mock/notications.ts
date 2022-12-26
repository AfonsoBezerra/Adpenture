import { iNotificationItem } from "interfaces/iNoticationItem";

export const noticationMock:iNotificationItem[] = [
  { 
    id: 1,
    title: 'Juliano Marques',
    subtitle: 'Juliano Marques aceitou seu pedido de amizade',
    link: 'google.com',
    img: './fakes/fake1.jpg',
  },
  {
    id: 2,
    title: 'Luiz Antonio',
    subtitle: 'Luiz Antonio aceitou seu pedido de amizade',
    link: 'google.com', 
    img: './fakes/fake2.jpg'
  },
  {
    id: 3,
    title: 'Thainara Camargo',
    subtitle: 'Enviou um pedido de amizade',
    link: 'google.com',
    img: './fakes/fake3.jpg'
  },
  {
    id: 4,
    title: 'Novo Destino',
    subtitle: 'Meire te convidou para um evento',
    link: 'google.com',
    img: './fakes/fake4.jpg'
  }
]