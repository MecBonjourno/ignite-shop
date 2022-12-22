import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/globals'

import logoImg from '../assets/svg/logo.svg'
import Bag from '../assets/images/Icon.png'

import {
  Container,
  Drawer,
  DrawerProduct,
  Header,
  ImageProduct,
  ProductDescription,
  RemoveButton,
} from '../styles/pages/app'

import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const router = useRouter()

  function handleHome() {
    if (router.pathname !== '/') {
      router.push('/')
    }
    return
  }

  function handleDrawer() {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="Logo" onClick={handleHome} />
        <Image src={Bag} alt="Bag" onClick={handleDrawer} />
      </Header>
      {isDrawerOpen && (
        <Drawer onClick={handleDrawer}>
          <h1>Sacola de Compras</h1>

          <DrawerProduct>
            <ImageProduct />
            <ProductDescription>
              <p>Camiseta 1</p>
              <strong>R$ 60,00</strong>
              <button>Remover</button>
            </ProductDescription>
          </DrawerProduct>

          <footer>
            <p>Quantidade</p>
            <p>X itens</p>

            <strong>Valor Total</strong>
            <strong>R$ 260,00</strong>
          </footer>
          <button>Finalizar Compra</button>
        </Drawer>
      )}
      <Component {...pageProps} />
    </Container>
  )
}
