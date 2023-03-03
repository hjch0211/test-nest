import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { BoardStatus } from '../boards.model';

export class BoardStatusValidation implements PipeTransform {
  // value에는 처리가 된 인자값, metaData는 인자에 대한 메타 데이터
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  private isValidStatus(value: any): boolean {
    return this.StatusOptions.indexOf(value) !== -1;
  }

  transform(value: string, metaData: ArgumentMetadata) {
    value = value.toUpperCase();
    if (!this.isValidStatus(value))
      throw new BadRequestException('유효하지 않은 status입니다.');
    return;
  }
}
