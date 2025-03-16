import { View } from "./view";

export abstract class ModalView extends View{
  constructor(containerId: string) {
    super(containerId);
  }

   abstract open(): void 

   abstract close(): void 
}
