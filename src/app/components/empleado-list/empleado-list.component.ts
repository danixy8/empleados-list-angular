import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  radioButtonSeleccionado = 'todos';
  listEmpleados: Empleado[] = [
    {legajo: 1, nombre: 'Daniel', apellido: 'Gutierrez', sexo: 'masculino', salario: 800000},
    {legajo: 2, nombre: 'Vianney', apellido: 'Perdomo', sexo: 'femenino', salario: 600000},
    {legajo: 3, nombre: 'Angel', apellido: 'Sarmiento', sexo: 'masculino', salario: 500000},
    {legajo: 4, nombre: 'Yeral', apellido: 'Mendoza', sexo: 'femenino', salario: 400000},
    {legajo: 5, nombre: 'Orlando', apellido: 'Brock', sexo: 'masculino', salario: 700000}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotaEmpleados(): number {
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter(empleados => empleados.sexo === 'femenino').length;
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(empleados => empleados.sexo === 'masculino').length;
  }

  obtenerTotalSalarioMayorA(): number {
    return this.listEmpleados.filter(empleados => empleados.salario > 500000).length;
  }

  empleadoCountRadioButtonChange(radioButtonSelect: string): void {
    this.radioButtonSeleccionado = radioButtonSelect;
  }

}
