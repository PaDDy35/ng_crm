import { Observable } from "rxjs";
import { ClientI }  from "../Interfaces/client-I";

export class Client implements ClientI {
  id: number = 0;
  name: string = '';
  firstname: string = '';
  socialReason: string = '';
  numDepartment: string = '';
  numTel: number = 0;

    constructor(partialClient: Observable<Client[]>) {
      if (partialClient) {
        Object.assign(this, partialClient);
      }
    }


}
