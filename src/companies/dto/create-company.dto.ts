import { ApiProperty } from '@nestjs/swagger';
import Validator from 'src/utils/Validator';

export class CreateCompanyDto {

  @ApiProperty({
    description: 'O nome da Empresa',
    minLength: 8,
    example: 'Quadras do Ze',
  })
  nome: string;

  @ApiProperty({
    description: 'Endereco do empreendimento',
    minLength: 8,
    example: 'Rua da Alegria',
  })
  rua: string;

  @ApiProperty({
    description: 'Distrito do empreendimento',
    minLength: 8,
    example: 'Itaquera',
  })
  bairro: string;

  @ApiProperty({
    description: 'Numero do endereco',
    example: 200,
  })
  numero: string;

  @ApiProperty({
    description: 'id da Cidade',
    example: 1,
  })
  cidadeIdCidade: number;

  @ApiProperty({
    description: 'Latitude que esta localizado o empreendimento',
    example: '-23.473715447380332',
  })
  lat: number;

  @ApiProperty({
    description: 'Longitude que esta localizado o empreendimento',
    example: '-46.596698188599206',
  })
  lon: number;
  
  @ApiProperty({
    description: 'Id do locator',
    example: 1,
  })
  usuarioLocadorIdUsuarioLocador: number;
}

export const CreateCompanySchema = Validator.object({
  nome: Validator.string(),
  //email: Validator.string().email(),
  //password: Validator.string().min(8),
})
  .options({ presence: 'required' })
  .required();
