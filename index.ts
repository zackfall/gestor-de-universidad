import { Empleado } from "./empleado";
import { Estudiante } from "./estudiante";
import { Persona } from "./persona";
import { PersonalDeServicio } from "./persona_de_servicio";
import { Profesor } from "./profesor";

const persona = new Persona("Juan", "Perez", 123456789, "soltero");
const estudiante = new Estudiante("Juan", "Perez", 123456789, "soltero");
const empleado = new Empleado("Juan", "Perez", 123456789, "soltero", 2000, 5);
const profesor = new Profesor("Juan", "Perez", 123456789, "soltero", 2000, 5, "Informatica");
const personalDeServicio = new PersonalDeServicio("Juan", "Perez", 123456789, "soltero", 2000, 5, "Bibliotecas");

console.log(persona.toString());
persona.cambiarEstadoCivil("casado")
console.log(persona.toString());
persona.cambiarEstadoCivil("divorciado")
console.log(persona.toString());
persona.cambiarEstadoCivil("casado")
console.log(persona.toString());
persona.cambiarEstadoCivil("viudo")
console.log(persona.toString());
persona.cambiarEstadoCivil("unión libre")
console.log(persona.toString());

estudiante.matricular("3er")
console.log(estudiante.toString());
estudiante.matricular("4to")
console.log(estudiante.toString());

console.log(empleado.toString());
empleado.cambiarDespacho(10);
console.log(empleado.toString());

console.log(profesor.toString());
profesor.cambiarDepartamento("Literatura")
console.log(profesor.toString());

console.log(personalDeServicio.toString());
personalDeServicio.cambiarSeccion("Sala de Computo")
console.log(personalDeServicio.toString());
