import { stripe } from "@/lib/strip";
import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface ProductData {
  quantity: number
  imageUrl: string[]
}

interface SuccessProps {
  customerName: string
  product: ProductData
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <div>
          {product.imageUrl && (
            product.imageUrl.map((url, index) => {
              return (
                <ImageContainer key={index}>
                  <Image src={url} width={120} height={110} alt="" />
                </ImageContainer>
              )
            })
          )}
        </div>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {product.quantity} camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session?.customer_details?.name
  const productList = session?.line_items?.data as Stripe.LineItem[]

  const productImages = productList?.reduce((acc: { imageUrl: string }[], cur: any) => {
    if (cur.quantity && cur.quantity > 0) {
      for (let i = 0; i < cur.quantity; i++) {
        acc.push(cur?.price?.product?.images[0] || '');
      }
    }
    return acc;
  }, []);

  return {
    props: {
      customerName,
      product: {
        quantity: productImages.length,
        imageUrl: productImages,
      },
    }
  }
}