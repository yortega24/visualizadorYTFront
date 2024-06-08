
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  nombreUsr= new FormControl ('',[Validators.required,Validators.minLength(2)]);
  psw= new FormControl ('',Validators.required,);
  confirmpsw= new FormControl ('',Validators.required,);
  /*nombreUsr: string=''
  psw: string=''
  confirmpsw: string=''*/
 
  constructor(private toastr: ToastrService) {}

  agregar(){
    //validar valores
    if (this.nombreUsr.value == '' || this.psw.value =='' || this.nombreUsr.value == undefined || this.nombreUsr.value == null ) {
      //alert('Veriricar, campos obligatorios');
      this.toastr.error('Favor de llenar los valores requeridos')
      return;
    } 
    //validar password igual
    
  }
}
