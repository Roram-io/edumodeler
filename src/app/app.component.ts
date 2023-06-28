import { Component, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent } from './diagram/diagram.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  
  showModeler = false;
  title = 'bpmn-js-angular';
  diagramUrl = 'https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';
  importError?: Error;
  alertMessageAdded = 'Se ha añadido el estereotipo &lt;&lt;RW&gt;&gt;. ¡Úsalo para definir un asistente!'

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
  }

}
