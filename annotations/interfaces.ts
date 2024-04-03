// interface Vehicle {
//   name: string
//   year: number
//   broken: boolean
//   summary(): string
// }

interface Reportables {
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

const printVehicle = (vehicle: Vehicle): void => {
  // console.log(`Name: ${vehicle.name}`)
  // console.log(`Year: ${vehicle.year}`)
  // console.log(`Broken? ${vehicle.broken}`)
  console.log(vehicle.summary())
}

const printSummary = (item: Reportables): void => {
  console.log(item.summary)
}

printSummary(oldCivic)
