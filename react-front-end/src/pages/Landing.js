import React from 'react'
import TopBar from '../components/Landing/TopBar/TopBar'
import FiltersBar from '../components/Landing/FiltersBar/FiltersBar'
import Container from '../components/Landing/Container/Container'

export default function Landing() {
  return (
    <>
      <TopBar />
      <FiltersBar />
      <Container />
    </>
  );
}
