import { Persona } from "./persona";

// La clase empleado es una clase que hereda los datos de la clase Persona y añade sus propios datos
// dando así información que un empleado dentro de la universidad tendría.
export class Empleado extends Persona {
  private _anioIncorporacion: number;
  private _despacho: number;

  constructor(nombre: string, apellido: string, ci: number, estadoCivil: string, anioIncorporacion: number, despacho: number) {
    super(nombre, apellido, ci, estadoCivil);
    this._anioIncorporacion = anioIncorporacion;
    this._despacho = despacho;
  }

  public get despacho(): number {
    return this._despacho;
  }

  public cambiarDespacho(despacho: number) {
    this._despacho = despacho;
  }

  public get anioIncorporacion(): number {
    return this._anioIncorporacion;
  }

  toString(): string {
    return `El empleado ${this.nombre} ${this.apellido} de cédula ${this.ci} está en el despacho #${this.despacho}`;
  }
}