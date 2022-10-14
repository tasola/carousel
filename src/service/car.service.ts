import { Car } from "../../shared/interfaces/car.interface"

export const getCars = async (): Promise<Car[] | Error> => {
  const response = await fetch('http://localhost:3000/api/cars.json')
  if (response.ok) {
    const json = await response.json()
    return json
  }
  throw new Error("Failed to fetch cars!")
}