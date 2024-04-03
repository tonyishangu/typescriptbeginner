const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// tuple in typescript
type Drink = [string, boolean, number]
const pepsi: Drink = ['brown', true, 40]
const coke: Drink = ['black', true, 50]
const tea: Drink = ['brown', false, 10]