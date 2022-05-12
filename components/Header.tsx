import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import React from 'react'
import Image from "next/image";
import HeaderItem from './HeaderItem';
function Header() {
  return (
    <header className="flex flex-col">
      <div className="flex items-center justify-evenly  max-w-2xl flex-grow">
      <HeaderItem title={'HOME'} Icon={HomeIcon} />
      <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
      <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
      <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
      <HeaderItem title="SEARCH" Icon={SearchIcon} />
      <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        width={100}
        height={100}
        className="object-contain"
      />

    </header>
  )
}

export default Header
