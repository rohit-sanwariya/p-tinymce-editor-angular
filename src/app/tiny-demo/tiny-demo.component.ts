import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tiny-demo',
  templateUrl: './tiny-demo.component.html',
  styleUrls: ['./tiny-demo.component.scss']
})
export class TinyDemoComponent implements OnInit {

  public myForm = new FormGroup({
    result: new FormControl("", Validators.required),
    body: new FormControl("", Validators.required )
  });
constructor(){
  this.myForm.get('body')?.valueChanges.subscribe((val)=>{
    console.log(val);

    this.myForm.get('result')?.setValue(val);

  })
}
  ngOnInit(): void {
   
  }
handleSubmit(editor:any) {
  console.log(editor);

}
}
