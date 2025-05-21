import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class StatusDto {
  @Expose()
  @ApiProperty({
    description: 'Status of the server',
    example: 'ok',
  })
  status: string;
}
