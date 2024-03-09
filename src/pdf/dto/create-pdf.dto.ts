import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsObject, ValidateNested } from 'class-validator';

import { Data } from '../../DataProvider';
import { BaseBlockDTO } from './base-block.dto';

export class CreatePdfDto {
  @ApiProperty({ type: BaseBlockDTO })
  @Type(() => BaseBlockDTO)
  @IsNotEmpty()
  @ValidateNested()
  schema: BaseBlockDTO;

  @IsNotEmpty()
  @IsObject()
  @ApiProperty({
    example: {
      firstName: 'Title'
    }
  })
  data: Data;
}
