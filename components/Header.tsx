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
import HuluIcon from "./HuluIcon";
import GithubCorner from "./GithubCorner";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row  m-5 justify-between items-center">
      <div className="flex items-center justify-evenly  max-w-2xl flex-grow">
        <HeaderItem title={'HOME'} Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
     {/* HULU icon */}
     <HuluIcon/>
     {/* Github corner */}
     <GithubCorner/>
    </header>
  )
}

export default Header
