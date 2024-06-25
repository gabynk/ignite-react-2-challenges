import { styled } from "..";

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',

  variants: {
    isCenter: {
      true: {
        justifyContent: 'center',
      },
      false: {
        justifyContent: 'space-between',
      }
    }
  },
  defaultVariants: {
    isCenter: 'false'
  }
})

export const CartCountContainer = styled('div', {
  display: 'flex',

  button: {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: 6,
    border: 0,
    backgroundColor: '$gray800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    '&:hover': {
      background: '$green300'
    },

    img: {
      color: '$gray300',
    },
  },
})

export const CartCount = styled('div', {
  background: '$gray900',
  width: 30,
  height: 30,
  borderRadius: '50%',
  marginLeft: '-15px',
  marginTop: '-10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  span: {
    background: '$green300',
    width: 24,
    height: 24,
    border: '2px bold solid',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '0.875rem'
  }
})