import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourtsService } from './courts.service';
import { CreateCourtDto } from './dto/create-court.dto';
import { ApiTags } from '@nestjs/swagger';
import circle from '@turf/circle';
import { bbox } from '@turf/turf';
import { Validate } from 'src/pipes/validation.pipe';
import { FindByProximityDto, FindByProximitySchema } from './dto/find-by-proximity.dto';

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


  @Post('search')
  @Validate(FindByProximitySchema)
  async test(@Body() findByProximityDto: FindByProximityDto){
    const center = [findByProximityDto.coordinates.lon, findByProximityDto.coordinates.lat];
    const radius = findByProximityDto.properties.distanceInKillometers;
    const circleOnMap = circle(center, radius, {
      steps: 10,
      units: 'kilometers'
    });

    const boundingBox = bbox(circleOnMap)
  
    return await this.courtsService.findByProximity(boundingBox);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courtsService.findOne(+id);
  }


}
