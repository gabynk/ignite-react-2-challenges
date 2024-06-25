import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { useCart } from "@/hooks/useCart";
import { CartCount, CartCountContainer, HeaderContainer } from "@/styles/components/header";

import logoImg from '@/assets/logo.svg'
import shoppingImg from '@/assets/shopping.svg'
import { Cart } from "./Cart";
import Link from "next/link";

export function Header() {
  const { cart } = useCart()

  const { pathname } = useRouter()
  const [openCart, setOpenCart] = useState(false)

  const isSuccessPath = pathname === '/success'

  function handleOpenCart() {
    setOpenCart(true)
  }

  function onClose() {
    setOpenCart(false)
  }

  return (
    <HeaderContainer isCenter={isSuccessPath}>
      <Link href='/'>
        <Image src={logoImg} alt="Logo" />
      </Link>

      {!isSuccessPath && (
        <CartCountContainer>
          <button type='button' onClick={handleOpenCart}>
            <Image src={shoppingImg} width={24} height={24} alt="Shopping Cart" />
          </button>
          {cart.length > 0 && (
            <CartCount>
              <span>{cart.length}</span>
            </CartCount>
          )}
        </CartCountContainer>
      )}
      {openCart && (
        <Cart onClose={onClose} />
      )}
    </HeaderContainer>
  )
}