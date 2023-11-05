import { ApiProperty } from '@nestjs/swagger';
import Validator from 'src/utils/Validator';

export class FindByProximityDto {
    coordinates: {
        lat: number,
        lon: number
    }
    properties: {
        distanceInKillometers: number
    }
}

export const FindByProximitySchema = Validator.object({
    coordinates: Validator.object({
    lat: Validator.number().max(90).min(-90),
    lon: Validator.number().max(180).min(-180)
  }),

  properties: Validator.object({
    distanceInKillometers: Validator.number().max(20).min(1)
  })
})
  .options({ presence: 'required' })
  .required();
