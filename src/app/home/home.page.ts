import { Component } from '@angular/core';
import { PlayerService } from '../service/player.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private playerService: PlayerService) {console.log('Hello')}

  show(){
    this.playerService.addPlayers(5);
  }

}
