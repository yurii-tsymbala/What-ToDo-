export class Task {
  id: string;
  name: string;
  constructor(name: string) {
    this.id = name+5;
    this.name = name;
  }
}