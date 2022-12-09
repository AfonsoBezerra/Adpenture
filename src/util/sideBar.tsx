import { iSideItem } from "../interfaces/iSideItems";
import { ContentSettingsIcon, HomeIcon, MapIcon, PeopleListIcon, PaymentIcon, WorldIcon } from "../styles/components/icons";

export const SideItems: iSideItem[] = [
  {
    id: 1,
    label: 'Home',
    ref: '/',
    icon: <HomeIcon />,
  },  
  {
    id: 2,
    label: 'Navigation',
    icon: <MapIcon />,
    ref: '/navigation',
  },
  {
    id: 3,
    label: 'Friend List',
    icon: <PeopleListIcon />,
    ref: '/friendlist',
  },
  {
    id: 4,
    label: 'Destination',
    icon: <WorldIcon />,
    ref: '/destination',
  },
  {
    id: 5,
    label: 'Transaction',
    icon: <PaymentIcon />,
    ref: '/transaction',
  },
  {
    id: 6,
    label: 'Settings',
    icon: <ContentSettingsIcon />,
    ref: '/settings',
  }
]