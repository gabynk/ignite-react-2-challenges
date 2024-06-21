import { useCart } from "@/hooks/useCart";
import { stripe } from "@/lib/strip";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Stripe from "stripe";

export interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
  unitAmount: number
  description: string
  defaultPriceId: string
}

interface ProductProps {
  product: Product
}

export default function Product({ product }: ProductProps) {
  const { addProduct } = useCart()
  // quando for utilizar o fallback: true no getStaticPaths
  // const { isFallback } = useRouter()
  // if (isFallback) {
  //   return <p>Loading...</p>
  // }

  async function handleAddProductToCart() {
    addProduct(product)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={400} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={handleAddProductToCart}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

// SSG quando há params
export const getStaticPaths: GetStaticPaths = async () => {
  // buscar os produtos mais vendidos ou/e mais acessados
  return {
    paths: [ // os ids que irá ser criados no build
      { params: { id: 'prod_QCNpDcakwt5sWf' } }
    ],
    fallback: 'blocking'
    // fallback: false // tenta buscar o id que não tem no paths no getStaticProps
    // fallback: 'blocking' // não ver nada até carregar o produto
  }
}

// SSG
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params?.id || ''

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price
console.log(price.unit_amount)
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format((price.unit_amount || 0) / 100),
        unitAmount: price.unit_amount || 0,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1h
  }
}
