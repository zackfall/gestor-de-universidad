import { Persona } from "./persona";

export class Estudiante extends Persona {
  private _curso: string;

  constructor(nombre: string, apellido: string, ci: number, estadoCivil: string, curso: string = "1er") {
    super(nombre, apellido, ci, estadoCivil);
    this._curso = curso;
  }

  public get curso(): string {
    return this._curso;
  }

  public set curso(curso: string) {
    this._curso = curso;
  }

  toString(): string {
    return `El estudiante ${this.nombre} ${this.apellido} de cédula ${this.ci} está cursando el ${this.curso} curso`;
  }
}