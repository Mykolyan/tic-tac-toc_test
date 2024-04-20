import { GameService } from './game.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tic-tac-toc';
  constructor(public gameService: GameService) {}

  resetGame() {
    this.gameService.newGame();
  }
}
