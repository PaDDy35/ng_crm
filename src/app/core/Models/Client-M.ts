import { ClientInteface }  from "../Interfaces/client-I";

export class Client implements ClientInteface {
  id: number = 0;
  name: string = '';
  firstname: string = '';
  socialReason: string = '';
  numDepartment: string = '';
  numTel: number = 0;

    constructor(partialClient: Partial<Client>) {
      if (partialClient) {
        Object.assign(this, partialClient);
      }
    }


}
