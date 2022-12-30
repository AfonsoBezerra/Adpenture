import styled  from 'styled-components';
import {Home} from '@styled-icons/boxicons-regular/Home'
import {MapPin} from '@styled-icons/boxicons-regular/MapPin'
import {PeopleList} from '@styled-icons/fluentui-system-filled/PeopleList'
import {World} from '@styled-icons/boxicons-regular/World'
import {Payment} from '@styled-icons/fluentui-system-regular/Payment'
import {ContentSettings} from '@styled-icons/fluentui-system-filled/ContentSettings'
import {RightArrowAlt} from '@styled-icons/boxicons-regular/RightArrowAlt'
import {LogOut} from '@styled-icons/boxicons-regular/LogOut'
import {ArrowIosBackOutline} from '@styled-icons/evaicons-outline/ArrowIosBackOutline'
import {Search} from '@styled-icons/bootstrap/Search'
import {Menu} from '@styled-icons/boxicons-regular/Menu'
import {Notifications} from '@styled-icons/ionicons-outline/Notifications'
import {MenuUnfold} from '@styled-icons/remix-fill/MenuUnfold'
import {VipCrown} from '@styled-icons/remix-line/VipCrown'
import {InformationCircle} from '@styled-icons/heroicons-outline/InformationCircle'
import {PinOutline} from '@styled-icons/evaicons-outline/PinOutline'
import {StarS} from '@styled-icons/remix-fill/StarS'

export const HomeIcon  = styled(Home)`
  width: 30px;
  height: 30px;
  color: rgba(0,0,0,0.4);
  transition: all .5s;
  &.active{
    fill: yellow;
  }
`

export const MapIcon = styled(MapPin)`
  width: 30px;
  height: 30px;
  color: rgba(0,0,0,0.4);
  transition: all .5s;
  &.active{
    fill: yellow;
  }
`

export const PeopleListIcon = styled(PeopleList)`
  width: 30px;
  height: 30px;
  transition: all .5s;
  color: rgba(0,0,0,0.4);
  &.active{
    fill: yellow;
  }
`
export const WorldIcon = styled(World)`
  width: 30px;
  height: 30px;
  color: rgba(0,0,0,0.4);
  transition: all .5s;
  &.active{
    fill: yellow;
  }
`
export const PaymentIcon = styled(Payment)`
  width: 30px;
  height: 30px;
  color: rgba(0,0,0,0.4);
  transition: all .5s;
  &.active{
    fill: yellow;
  }
`
export const ContentSettingsIcon = styled(ContentSettings)`
  width: 30px;
  height: 30px;
  color: rgba(0,0,0,0.4);
  transition: all .5s;
  &.active{
    fill: yellow;
  }
`

export const RightArrowAltIcon = styled(RightArrowAlt)`
  width: 30px;
  height: 30px;
  color: rgba(0,0,0,0.7);
`

export const LogOutIcon = styled(LogOut)`
  width: 35px;
  height: 35px;
  color: rgba(211,0,0,0.7);
  transition: all .5s;
`
export const ArrowIcon = styled(ArrowIosBackOutline)`
  width: 30px;
  height: 30px;
  color: rgba(0,0,0,0.2);
  transition: all .5s;
  cursor: pointer;
`
export const MenuUnfoldIcon = styled(MenuUnfold)`
  width: 20px;
  height: 20px;
  color: rgba(0,0,0,0.6);
  transition: all .5s;
`

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;
  color: rgba(0,0,0,0.5);
`

export const MenuIcon = styled(Menu)`
  width: 25px;
  height: 25px;
  color: rgba(0,0,0,0.5);
`

export const NotificationsIcon = styled(Notifications)`
  width: 25px;
  height: 25px;
  color: rgba(0,0,0,0.7);
`

export const VipCrownIcon = styled(VipCrown)`
  width: 20px;
  height: 20px;
  color: #FECA05;
`

export const InformationCircleIcon = styled(InformationCircle)`
  width: 15px;
  height: 15px;
  color: rgba(0,0,0,.8);
`;

export const PinOutlineIcon = styled(PinOutline)`
  width: 12px;
  height: 12px;
  color:#ED3D00;
`;

export const StarSIcon = styled(StarS)`
  width: 14px;
  height: 14px;
  color: #FECA05;
`;