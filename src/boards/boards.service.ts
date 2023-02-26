import { Injectable } from '@nestjs/common';
import { Board } from './boards.model';

@Injectable()
export class BoardsService {
  private board: Board[] = [];

  getAllBoards(): Board[] {
    return this.board;
  }
}
