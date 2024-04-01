
// 93 89 103 0%
// 160 155 154 80%
// 186 177 172 95%

// 5%
// 20%
// 90%

export const Colors = {
  primary: '#55515d',
  accent: '#7b7980',
  g1: 'rgba(94, 90, 103, 1)',
  g2: 'rgba(115, 112, 121, 1)',
  g3: 'rgba(186, 178, 173, 1)',

  background: '#040D12',
  text: '#CCCCCC',
  textSecondary: '#666fff',

  success: '#00c851',
  warning: '#ffbb33',
  error: '#ff4444',
  info: '#33b5e5',
  light: '#f8f9fa',
  dark: '#343a40',
  transparent: 'transparent',
  pureWhite: '#ffffff',
  pureBlack: '#000000',
} as const

const theme = {
  colors: Colors,
} as const

export default theme