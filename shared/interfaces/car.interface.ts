const BodyTypes = ["suv", "estate", "sedan"] as const;
type BodyType = typeof BodyTypes[number];

const ModelTypes = ["plug-in hybrid", "pure-electric"] as const;
type ModelType = typeof ModelTypes[number];

export interface Car {
  id: string;
  modelName: string;
  bodyType: BodyType;
  modelType: ModelType;
  imageUrl: string;
}
