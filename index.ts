import { Empleado } from "./empleado";
import { Estudiante } from "./estudiante";
import { Persona } from "./persona";
import { PersonalDeServicio } from "./persona_de_servicio";
import { Profesor } from "./profesor";

const persona = new Persona("Juan", "Perez", 123456789, "soltero");
const estudiante = new Estudiante("Juan", "Perez", 123456789, "soltero", "3er");
const empleado = new Empleado("Juan", "Perez", 123456789, "soltero", 2000, 5);
const profesor = new Profesor("Juan", "Perez", 123456789, "soltero", 2000, 5, "Informatica");
const personalDeServicio = new PersonalDeServicio("Juan", "Perez", 123456789, "soltero", 2000, 5, "Bibliotecas");

console.log(persona.toString());
console.log(estudiante.toString());
console.log(empleado.toString());
console.log(profesor.toString());
console.log(personalDeServicio.toString());
