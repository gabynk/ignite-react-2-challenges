import Image from "next/image";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { useKeenSlider } from 'keen-slider/react';
import { HomeContainer, Product, ProductDescription } from "@/styles/pages/home";

import { stripe } from "@/lib/strip";
import Link from "next/link";
import Head from "next/head";
import shoppingImg from "@/assets/shopping.svg"

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="keen-slider__slide"
              prefetch={false}
            >
              <Product>
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <ProductDescription>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </ProductDescription>
                  <button>
                    <Image src={shoppingImg} alt="" />
                  </button>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  );
}

// SSG
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format((price.unit_amount || 0) / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2h
  }
}