export type ButtonLinkType = {
  link: string
  title: string
  extraClass?: string
  onClick?: any
  type: TypeButtonType
  icon?: any
  loading?: boolean
}

export type ButtonType = {
  title: string
  extraClass?: string
  onClick?: any
  type: TypeButtonType
  icon?: any
  loading?: boolean
}

export type TypeButtonType = 'white' | 'blue' | 'green' | 'red'

export type ButtonIconModuloType = {
  title: string;
  icon: any;
  onClick: any;
};