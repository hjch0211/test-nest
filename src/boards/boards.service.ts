import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './boards.model';
import { BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(), // id는 유니크해야 함
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return this.boards;
  }

  getBoardById(id: string): Board {
    const board = this.boards.find((board) => board.id === id);
    if (!board) throw new NotFoundException('아이디를 찾을 수 없습니다.');
    return board;
  }

  deleteBoardById(id: string): void {
    const found = this.getBoardById(id);
    this.boards.find((board) => board.id !== found.id);
  }

  updateBoardStatus(id: string, status: BoardStatus): void {
    const board = this.getBoardById(id);
    board.status = status;
  }
}
