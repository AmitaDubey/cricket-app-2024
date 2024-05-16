import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerList: Player[] = [];

  constructor() { }
  /**
   * To add noOfPlayers in the playerList
   * @param noOfPlayers 
   */
  addPlayers(noOfPlayers: number) {
    const player: Player = {
      playerId: 1,
      playerName: 'Amita',
      playerType: 'Batter'
    }

    for (let i = 0; i < noOfPlayers; i++) {
      this.playerList.push(player);
    }
    console.log(this.playerList)
  }
}

