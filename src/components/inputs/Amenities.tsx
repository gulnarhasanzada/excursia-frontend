import { IconType } from 'react-icons';
import { FaWifi, FaTv } from "react-icons/fa6";
import { TbToolsKitchen3,TbGrill, TbBeach,TbFireExtinguisher } from "react-icons/tb";
import { BiSolidWasher,BiFirstAid } from "react-icons/bi";
import { IoCarOutline, IoSnowOutline } from "react-icons/io5";
import { MdOutlinePaid, MdPool, MdBalcony, MdHotTub, MdSmokeFree } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { GiFireplace } from "react-icons/gi";
import { CiDumbbell } from "react-icons/ci";
import AmenityBox from './AmenityBox';

export interface Amenity{
    icon: IconType;
    label: string;
    selected?: boolean;
}

export const amenities: Amenity[] = [
    {
      label: 'Wifi',
      icon: FaWifi
    },
    {
      label: 'TV',
      icon: FaTv,
    },
    {
      label: 'Kitchen',
      icon: TbToolsKitchen3,
    },
    {
      label: 'Washer',
      icon: BiSolidWasher,
    },
    {
      label: 'Free parking on premises',
      icon: IoCarOutline,
    },
    {
      label: 'Paid parking on premises',
      icon: MdOutlinePaid,
    },
    {
        label: 'Air conditioning',
        icon: IoSnowOutline,
    },
    {
      label: 'Dedicated workspace',
      icon: BsPersonWorkspace,
    },
    {
      label: 'Pool',
      icon: MdPool,
    },
    {
      label: 'Hot tub',
      icon: MdHotTub,
    },
    {
      label: 'Patio',
      icon: MdBalcony,
    },
    {
      label: 'BBQ grill',
      icon: TbGrill,
    },
    {
      label: 'Fire pit',
      icon: AiOutlineFire,
    },
    {
      label: 'Indoor fireplace',
      icon: GiFireplace,
    },
    {
      label: 'Exercise equipment',
      icon: CiDumbbell,
    },
    {
      label: 'Beach access',
      icon: TbBeach,
    },
    {
      label: 'Smoke alarm',
      icon: MdSmokeFree,
    },
    {
      label: 'First aid kit',
      icon: BiFirstAid,
    },
    {
      label: 'Fire extinguisher',
      icon: TbFireExtinguisher,
    }
  ]
