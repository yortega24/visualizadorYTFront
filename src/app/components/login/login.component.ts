import { CommonModule, NgIf } from '@angular/common';
import {  FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet,Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import {BrowserAnimationsModule,NoopAnimationsModule} from "@angular/platform-browser/animations";
import { UserSrvService } from '../../services/user-srv.service';
import { Usuario } from '../../interfaces/usuario';
import { HttpErrorResponse } from '@angular/common/http';
import { SpinnerComponent } from '../../compShared/spinner/spinner.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ReactiveFormsModule,SpinnerComponent,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  nombreUsr= new FormControl ('',[Validators.required,Validators.minLength(2)]);
  psw= new FormControl ('',Validators.required,);
  confirmpsw= new FormControl ('',Validators.required,);
  loading: boolean=false;

  constructor(
    private toastr: ToastrService,
    private _usuarioSrv: UserSrvService,
    private route: Router
  ){
    
  }
  ngOnInit(): void {
    
  }
  login(){
    this.loading=true;

    //validar valores
    if (this.nombreUsr.value == '' || this.psw.value =='' || this.nombreUsr.value == undefined || this.psw.value == null ) {
      this.loading=false;
      alert('Veriricar, campos obligatorios');
      //this.toastr.error('Favor de llenar los valores requeridos')
      return;
    } 

    const usuarioI: Usuario ={
      nombreUsr: this.nombreUsr.value,
      psw: this.psw.value,
    }
    
    
    this._usuarioSrv.login(usuarioI).subscribe({
      next:(token) =>{
        this.loading=false;
        this.route.navigate(['/dashboard']);
        localStorage.setItem('token',JSON.stringify(token))
      },
      error:(e:HttpErrorResponse) => {
        this.loading=false;

        if (e.error.msg) {
          alert(e.error.msg)  
          //this.toastr.error(e.error.msg,'Error!')
          //alert(e.error.msg)
          
        } else {
          this.toastr.error('Ups Error comuniquese con Yess xd!')
          //alert('Ups Error comuniquese con Yess xd!')

        }
        
        //this.route.navigate(['/signIn'])
      },
      //complete:() => console.info('completado')
    
    
    })

  }
}
