import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
  NotFoundException,
} from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    const board = this.boardsService.getBoardById(id);
    if (!board) throw new NotFoundException('아이디를 찾을 수 없습니다.');
    return board;
  }

  @Delete('/:id')
  deleteBoardById(@Param('id') id: string): void {
    this.boardsService.deleteBoardById(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ): void {
    this.boardsService.updateBoardStatus(id, status);
  }
}
