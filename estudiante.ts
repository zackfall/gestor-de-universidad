import { Curso } from "./curso";
import { Persona } from "./persona";

// La clase estudiante es una clase que hereda los datos de la clase Persona y añade el atributo curso,
// que es una clase asociada por composición a esta
export class Estudiante extends Persona {
  private _curso: Curso;

  constructor(nombre: string, apellido: string, ci: number, estadoCivil: string) {
    super(nombre, apellido, ci, estadoCivil);
    this._curso = new Curso("1er")
  }

  public matricular(curso: string) {
    this.curso = new Curso(curso)
  }

  public get curso(): Curso {
    return this._curso;
  }

  private set curso(curso: Curso) {
    this._curso = curso;
  }

  toString(): string {
    return `El estudiante ${this.nombre} ${this.apellido} de cédula ${this.ci} está cursando el ${this.curso} curso`;
  }
}