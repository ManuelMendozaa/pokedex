import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Ipokemon } from '../Ipokemon';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],

})
export class DetailsComponent implements OnInit {

  public pokemonSelected;

  constructor(public HomeService : HomeService) { 
    
    this.pokemonSelected = this.HomeService.pokemonDetalle;
    
  }
  
  ngOnInit() { 
  }

  ObtenerImagenEvolucion(NombreEvolucion: string){
    return this.HomeService.ObtenerImagenEvolucion(NombreEvolucion);
  }

}
