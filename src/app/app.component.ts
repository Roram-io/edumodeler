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
    var resultado: String;
    this.diagramComponent.escanearEstereotipos();
    resultado = localStorage.getItem("XMLfile")    
    if (resultado.includes("&#60;&#60;RW&#62;&#62;")){
    this.alertAdded = true;
    this.alertNeutral = false;
    this.alertRemoved = false;
    this.alertMessageAdded = "Se ha añadido el estereotipo RW.";
    }
    if (resultado.includes("&#60;&#60;ERROR&#62;&#62;")){
      this.alertAdded = false;
      this.alertNeutral = false;
      this.alertRemoved = true;
      this.alertMessageAdded = "El estereotipo ERROR no existe. Esto provocará un error de compilación.";
    }
    localStorage.removeItem("XMLfile")
  }
  

 
}


