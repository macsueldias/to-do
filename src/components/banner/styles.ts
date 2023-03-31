import { styled } from '@i9-design-ui/react'
import { PlusCircle } from '@phosphor-icons/react'

export const ContainerBanner = styled('div', {
  position: 'relative',
})

export const ContentBanner = styled('img', {})

export const Form = styled('form', {
  position: 'absolute',
  top: '5rem',
  left: 'calc((100% - 400px) / 2)',
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',

  padding: '1.25rem 2rem',
  borderRadius: '6px 40px 40px 6px',
  background: '$gray400',
})

export const InputTask = styled('input', {
  height: '2.2rem',
  width: 400,

  border: 0,
  color: '$gray500',
  borderRadius: '6px',
  background: '$white',
  outline: 'none',

  fontSize: '1.2rem',
  fontWeight: '$medium',
  paddingLeft: '.25rem',

  '&:focus': {
    background: '$white',
  },
})

export const ButtonAddTask = styled(PlusCircle, {
  cursor: 'pointer',
})
