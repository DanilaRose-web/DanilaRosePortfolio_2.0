import EnumTypeWorks from "./EnumTypeWorks";

export default class WorkModel {
   constructor(
      public Id: number, 
      public Image: string,
      public Type: string,
      public Animate?: boolean,
   ) {}
}