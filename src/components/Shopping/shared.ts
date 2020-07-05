export interface ShoppingCart {
  selected: string[]

  buy(product: string): void
}
