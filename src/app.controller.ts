import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StatusDto } from './app.dto';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @ApiOperation({
    summary: 'Default endpoit to check if the server is running',
  })
  @ApiResponse({
    status: 200,
    description: 'Get the status of the server',
    type: StatusDto,
  })
  getStatus() {
    return { status: 'ok' };
  }
}
