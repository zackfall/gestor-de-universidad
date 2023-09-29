// Esta clase es la clase madre para el programa.
// La clase persona, provee de diferentes datos que son importantes cuando hablamos de una persona.
export class Persona {
  private _nombre: string;
  private _apellido: string;
  private _ci: number;
  private _estadoCivil: string;

  constructor(nombre: string, apellido: string, ci: number, estadoCivil: string) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._ci = ci;
    this._estadoCivil = estadoCivil;
  }

  public get nombre(): string {
    return this._nombre;
  }

  public get apellido(): string {
    return this._apellido;
  }
  public get ci(): number {
    return this._ci;
  }

  public get estadoCivil(): string {
    return this._estadoCivil;
  }

  public cambiarEstadoCivil(estado: string) {
    this._estadoCivil = estado;
  }


  toString() {
    return `El estado civil del ciudadano ${this.nombre} ${this.apellido} de cédula ${this.ci} es: ${this.estadoCivil}`;
  }
}