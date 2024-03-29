export
interface Fruit {
  name:string;
  id:number;
  family:string;
  genus:string;
  order:string;
  urlImg?:string;
  nutritions: {
    carbohydrates:number;
    protein:number;
    fat:number;
    calories:number;
    sugar:number
  }
}

