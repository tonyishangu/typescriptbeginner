const carMakers: string[] = ['Mercedes', 'bmw', 'tesla']
const dates = [new Date(), new Date()]

const carsByMake = [
  ['G63'],
  ['S540i'],
  ['model3']
]

// HELP WITH INFERENCE WHEN EXTRACTING VALUES
const car = carMakers[0]
const myCar= carMakers.pop()

// prevent incompatible values
carMakers.push(100) //===> error showing  here that it's expecting a string not number

// help with map
carMakers.map((car: string): string => {
  return car
})