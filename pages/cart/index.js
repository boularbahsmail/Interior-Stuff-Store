import React from 'react';
import Head from "next/head";

// Components
import Navbar from '../../components/Navbar';

const Cart = () => {
  return (
    <div className="p-3">
    <Head>
      <title>Comfort - Cart</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="max-w-7xl m-auto">
      <Navbar />
      <h1 className="text-3xl font-bold text-black my-4 mx-1">Cart</h1>
    </div>
  </div>
  )
}

export default Cart;