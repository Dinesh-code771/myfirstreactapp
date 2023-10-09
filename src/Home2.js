import React from 'react'
import Details from './Details'
import { useState } from 'react';
export default function Home2() {
  const [searchValue, setSearchValue] =useState("");
  return (
    <div>Home2

        <Details />
    </div>
  )
}
