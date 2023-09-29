import { Empleado } from "./empleado";

// La clase profesor es una subclase de Empleado que hereda los datos de Persona y Empleado
export class Profesor extends Empleado {
  private _departamento: string;

  constructor(
    nombre: string,
    apellido: string,
    ci: number,
    estadoCivil: string,
    anioIncorporacion: number,
    despacho: number,
    departamento: string
  ) {
    super(nombre, apellido, ci, estadoCivil, anioIncorporacion, despacho);
    this._departamento = departamento;
  }

  public get departamento(): string {
    return this._departamento;
  }

  public cambiarDepartamento(departamento: string) {
    this._departamento = departamento;
  }

  toString(): string {
    return `El profesor ${this.nombre} ${this.apellido} de cédula ${this.ci} está en el departamento de ${this.departamento}`;
  }
}