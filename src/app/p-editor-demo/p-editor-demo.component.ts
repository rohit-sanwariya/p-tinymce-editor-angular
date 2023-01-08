import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-p-editor-demo',
  templateUrl: './p-editor-demo.component.html',
  styleUrls: ['./p-editor-demo.component.scss']
})
export class PEditorDemoComponent implements OnInit {
  description=new FormControl();
  description1=new FormControl();
  constructor() {
    this.description.valueChanges.subscribe((editor)=>{
      console.log(editor);
      this.description1.setValue(editor)

    })
  }

  ngOnInit(): void {
    
  }

}
