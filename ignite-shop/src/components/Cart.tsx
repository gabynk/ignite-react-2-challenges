import { CartContainer, CloseButton, EmptyCart, ImageContainer, ProductContainer, ProductDescription, TotalPurchase } from "@/styles/components/cart";
import closeImg from '@/assets/close.svg'
import Image from "next/image";
import { useMemo, useState } from "react";
import axios from "axios";
import { useCart } from "@/hooks/useCart";

interface CartProps {
  onClose: () => void
}

export function Cart({ onClose }: CartProps) {
  const { cart, removeProduct, getFormattedCarts } = useCart()

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  function handleOnclose() {
    onClose();
  }

  function handleRemoveProduct(productId: string) {
    removeProduct(productId);
  }

  async function handleBuyProduct() {
    const cartItems = getFormattedCarts()
    
    if (!cartItems) {
      alert('Adicione produtos no carrinho')
      return
    }
      
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        line_items: cartItems
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog/Sentry)
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  const cartTotalPrice = useMemo(() => {
    if (cart.length === 0) return 0

    const sumWithInitial = cart.reduce((acc, cur) => {
      acc += cur.unitAmount
      return acc
    }, 0);

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(sumWithInitial / 100)
  }, [cart])

  return (
    <CartContainer>
      <CloseButton>
        <button type="button" onClick={handleOnclose}>
          <Image src={closeImg} width={24} height={24} alt="" />
        </button>
      </CloseButton>

      <h2>Sacola de compras</h2>

      <ProductContainer>
        {cart.length > 0 ? (
          cart.map(product => {
            return (
              <div key={product.id}>
                <ImageContainer>
                  <Image src={product.imageUrl} width={102} height={93} alt="" />
                </ImageContainer>
                <ProductDescription>
                  <span>{product.name}</span>
                  <span>{product.price}</span>
                  <button onClick={() => handleRemoveProduct(product.id)}>
                    Remover
                  </button>
                </ProductDescription>
              </div>
            )
          })
        ) : (
          <EmptyCart>
            <span>Adicione um produto</span>
          </EmptyCart>
        )}
      </ProductContainer>

      <footer>
        <TotalPurchase>
          <div>
            Quantidade
            <span>{cart.length} itens</span>
          </div>
          <div>
            Valor total
            <span>{cartTotalPrice}</span>
          </div>
        </TotalPurchase>
        <button 
          disabled={isCreatingCheckoutSession || cart.length === 0}
          onClick={handleBuyProduct}
        >
          Finalizar compra
        </button>
      </footer>
    </CartContainer>
  )
}