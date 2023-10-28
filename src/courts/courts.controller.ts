import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourtsService } from './courts.service';
import { CreateCourtDto } from './dto/create-court.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('courts')
@Controller('courts')
export class CourtsController {
  constructor(private readonly courtsService: CourtsService) {}

  @Post()
  create(@Body() createCourtDto: CreateCourtDto) {
    return this.courtsService.create(createCourtDto);
  }

  @Get()
  findAll() {
    return this.courtsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courtsService.findOne(+id);
  }

}
