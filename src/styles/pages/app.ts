import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  footer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  justifyContent: 'space-between',
  display: 'flex',
  cursor: 'pointer',
})

export const Drawer = styled('div', {
  position: 'absolute',
  right: 0,
  width: '30%',
  height: '100vh',
  zIndex: 9999,
  backgroundColor: '$gray800',
  boxShadow: '5px 10px 18px #333333',
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 2rem',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
})

export const DrawerProduct = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
})

export const ImageProduct = styled('div', {
  width: '100%',
  maxWidth: 100,
  height: 100,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})
