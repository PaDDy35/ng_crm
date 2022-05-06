import { ClientI }  from "../Interfaces/client-I";

export class Client implements ClientI {
  id: number = 0;
  name: string = '';

    constructor(partialClient: Partial<Client>) {
      if (partialClient) {
        Object.assign(this, partialClient);
      }
    }

}
