import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FavoritoSrvService } from '../../services/favorito-srv.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  constructor(
    private _favoritoSrv: FavoritoSrvService
  ){}

  ngOnInit(): void {  
    this.getFavoritos()
  }
  getFavoritos(){
    this._favoritoSrv.getFavoritos().subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
