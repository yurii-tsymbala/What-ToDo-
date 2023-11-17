import { v4 as uuidv4 } from 'uuid';

export class Task {
  constructor(
    public name: string, 
    public id: string = uuidv4()
    ) {
  }
}
