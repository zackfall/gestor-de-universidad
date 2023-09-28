export class Curso {
  private _nombre: string;

  constructor(nombre: string) {
    this._nombre = nombre;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  toString(): string {
    return this._nombre;
  }
}