import { Empleado } from "./empleado";

// La clase Personal de Servicio es una subclase de Empleado que hereda los datos de Persona y Empleado
export class PersonalDeServicio extends Empleado {
  private _seccion: string;

  constructor(
    nombre: string,
    apellido: string,
    ci: number,
    estadoCivil: string,
    anioIncorporacion: number,
    despacho: number,
    seccion: string
  ) {
    super(nombre, apellido, ci, estadoCivil, anioIncorporacion, despacho);
    this._seccion = seccion;
  }

  public get seccion(): string {
    return this._seccion;
  }

  public cambiarSeccion(seccion: string) {
    this._seccion = seccion;
  }

  toString(): string {
    return `El personal de servicio ${this.nombre} ${this.apellido} de cédula ${this.ci} se encuentra en la sección de ${this.seccion}`;
  }
}