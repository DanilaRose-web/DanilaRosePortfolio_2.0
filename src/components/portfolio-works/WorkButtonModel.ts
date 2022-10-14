import EnumTypeWorks from "./EnumTypeWorks";

export default class WorkButtonModel {
   constructor(
      public Id: number,
      public Type: string,
      public Selected?: boolean
   ) {}
}