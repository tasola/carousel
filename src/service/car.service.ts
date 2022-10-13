import { Car } from "../../shared/interfaces/car.interface"

export const getCars = async (): Promise<Car[]> => {
  const response = await fetch('http://localhost:3000/api/cars.json')
  const json = await response.json()
  return json
}