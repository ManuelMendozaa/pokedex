import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Ipokemon } from '../Ipokemon';
import { Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [],
})
export class HomeComponent implements OnInit {
  
  public pokemons = [];

  constructor(private homeService: HomeService, public router : Router) { 
  }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
   this.pokemons = this.homeService.getPokemon();
  }

  goDetail(pokemon : Object){
    
    this.homeService.pokeDetalle(pokemon);

    this.router.navigate(['/details']);
  }



}
