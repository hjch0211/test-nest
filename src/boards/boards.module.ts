import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Module({
  // provider에 등록되어 있음으로써 모듈 전체에서 사용 가능
  providers: [BoardsService],
})
export class BoardsModule {}
