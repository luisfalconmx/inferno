export interface MenuOptions {
  label: string
  children?: Array<{
    path: string
    label: string
  }>
}
