import { styled } from "..";

export const CartContainer = styled('aside', {
  position: 'absolute',
  top: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '30rem',
  background: '$gray800',
  'z-index': '2',
  
  h2: {
    fontSize: '$lg',
    color: '$gray100',
    padding: '1.5rem 0 0 3rem'
  },

  footer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3.5625rem',
    margin: '3rem',

    button: {
      width: '100%',
      height: '4.3125rem',
      borderRadius: 8,
      border: 'none',
      background: '$green500',
      color: '$white',
      fontSize: '$md',
      fontWeight: 'bold',
      cursor: 'pointer',

      '&:disabled': {
        cursor: 'not-allowed',
      },
      '&:not(:disabled):hover': {
        background: '$green300',
      },
    }
  }
})

export const CloseButton = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '1.5rem',

  button: {
    width: '1.5rem',
    height: '1.5rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    
    '&:hover': {
      background: 'transparent',
    }
  }
})

export const ProductContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 0 0 3rem',
  height: '100%',

  div: {
    display: 'flex',
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 101,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '1.25rem',
  marginBottom: '1.25rem',

  img: {
    objectFit: 'cover'
  }
})

export const ProductDescription = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  fontSize: '$md',
  color: '$gray300',

  'span:nth-of-type(2)': {
    fontWeight: 'bold',
    color: '$gray100',
  },

  button: {
    width: 'max-content',
    height: 'fit-content',
    paddingRight: '5px',
    marginTop: '1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    background: 'transparent',
    color: '$green500',
    cursor: 'pointer',
    border: 'none',

    '&:hover': {
      background: 'transparent',
    }
  }
})

export const TotalPurchase = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 7,

  'div:nth-of-type(1)': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    fontSize: '1rem',
    color: '$gray100',
  
    span: {
      color: '$gray300',
      fontSize: '$md',
    },
  },

  'div:nth-of-type(2)': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    color: '$gray100',
    fontWeight: 'bold',
    fontSize: '$md',

    span: {
      fontSize: '$xl',
    },
  }
})

export const EmptyCart = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingRight: 45,
})