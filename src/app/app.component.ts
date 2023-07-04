import { Component, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent } from './diagram/diagram.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => { this.verificarXML() }, 3000);

  }
  
  showModeler = false;
  title = 'bpmn-js-angular';
  diagramUrl = 'https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';
  importError?: Error;
  alertMessageAdded = 'Area de Cambios. Aquí podrá monitorear los cambios que realice.'
  alertAdded = false;
  alertNeutral = true;
  alertRemoved = false;

  stereotypes = ["RW", "RG", "RT", "SR", "SD", "EDR", "EDP", "ES", "EB", "ETT", "ETM", "EIC", "EIH"];
  newCount = [];
  oldCount = [];  

  @ViewChild(DiagramComponent)
  diagramComponent: DiagramComponent;

  handleImported(event) {

    const {
      type,
      error,
      warnings
    } = event;

    if (type === 'success') {
      console.log(`Rendered diagram (%s warnings)`, warnings.length);
    }

    if (type === 'error') {
      console.error('Failed to render diagram', error);
    }

    this.importError = error;
  }

  toggleModeler(value){
    this.showModeler = value;
  }

  guardarXML(){
    this.diagramComponent.saveDiagram();
    this.verificarXML();
  }

  verificarXML(){
    var newArray = []
    var resultado: String;
    this.diagramComponent.escanearEstereotipos();
    resultado = localStorage.getItem("XMLfile")      
    this.stereotypes.forEach( function (e) {
    let coincidenceRegExp = "&#60;&#60;"+e+"&#62;&#62;" 
    let nCoincidences = resultado.split(coincidenceRegExp).length - 1;  
    for (var i=0; i<nCoincidences; i++) {
      newArray.push(e);
    }
    })    
    console.log(newArray);
    this.oldCount = this.newCount;
    this.newCount = newArray;    

    var diff = this.newCount.length - this.oldCount.length;
    console.log("Diferencia: ");
    console.log(diff);
    if (diff > 0){ //Added
      let difference = this.newCount.filter(x => !this.oldCount.includes(x));
      this.alertAdded = true;
      this.alertRemoved = false;
      this.alertNeutral = false;
      this.alertMessageAdded = "Se ha agregado el siguiente Estereotipo: <<"+ difference[0] +">>" + this.getUsability(difference[0]);
    }
    else if (diff < 0){ //Removed
      let difference = this.oldCount.filter(x => !this.newCount.includes(x));
      this.alertAdded = false;
      this.alertRemoved = true;
      this.alertNeutral = false;
      this.alertMessageAdded = "Se ha removido el siguiente Estereotipo: <<"+ difference[0] +">>. ";
    }
        
    localStorage.removeItem("XMLfile")
  }
  
  getUsability(stereotype: string){
    let usabilidad = [
      "Se recomienda su uso cuando existen muchos atributos.",
      "Se recomienda cuando se desea agregar elementos visuales y la tarea posee pocos atributos.",
      "Se recomienda cuando la información puede ser clasificada en grupos para mostrarse de forma ordenada.",
      "Este estereotipo se usa cuando la información mostrada está lista para imprimir.",
      "Este estereotipo es para cuando se deben presentar múltiples propiedades en una matriz de datos.",
      "Es para cuando solo se puede elegir una opción de las bifurcaciones de una compuerta exclusiva.",
      "Es para cuando pueden escogerse múltiples opciones de una bifurcación de una compuerta exclusiva.",
      "Se recomienda cuando se navegará entre elementos o eventos diferentes en un sistema.",
      "Este estereotipo se usa cuando se desea navegar a otra sección del sistema.",
      "Este estereotipo se usa cuando es requerido cronometrar un evento.",
      "Es para cuando se espera la interrupción de una actividad cronometrada y mostrar mensajes.",
      "Este estereotipo indica una selección de un grupo de elementos amplio y variado.",
      "Se recomienda cuando se navegará entre elementos o eventos diferentes en un sistema.",
    ]
   
    return usabilidad[this.stereotypes.indexOf(stereotype)];
  }
 
}


