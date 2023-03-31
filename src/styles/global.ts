import { globalCss } from '@i9-design-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray300',
    color: '$gray100',
    '-webkit-font-smothing': 'antialiased',
  },
})
