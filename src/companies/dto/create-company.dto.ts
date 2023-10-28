import { ApiProperty } from '@nestjs/swagger';
import Validator from 'src/utils/Validator';

export class CreateCompanyDto {

  @ApiProperty({
    description: 'Endereco da imagem',
    example: 'www.imagens.com/image.jpg',
  })
  imageURL: string;

  @ApiProperty({
    description: 'O nome da Empresa',
    minLength: 8,
    example: 'Quadras do Ze',
  })
  name: string;

  @ApiProperty({
    description: 'Descricao da empresa',
    minLength: 8,
    example: 'Empresa no ramo ha 5 anos..',
  })
  description: string;

  @ApiProperty({
    description: 'Uma senha de tamanho maior que 8 carácteres.',
    minLength: 8,
    example: 'senhaforte123',
  })
  hashedPassword: string;

  @ApiProperty({
    description: 'Um email válido para contato.',
    minLength: 8,
    example: 'email@email.com',
  })
  emailToContact: string;

  @ApiProperty({
    description: 'Endereco do empreendimento',
    minLength: 8,
    example: 'Rua da Alegria',
  })
  street: string;

  @ApiProperty({
    description: 'Distrito do empreendimento',
    minLength: 8,
    example: 'Itaquera',
  })
  district: string;

  @ApiProperty({
    description: 'Numero do endereco',
    minLength: 8,
    example: 200,
  })
  number: string;

  @ApiProperty({
    description: 'CEP do empreendimento',
    minLength: 8,
    example: '08253000',
  })
  cep: string;

  @ApiProperty({
    description: 'Longitude que esta localizado o empreendimento',
    minLength: 8,
    example: '-46.596698188599206',
  })
  long: string;

  @ApiProperty({
    description: 'Latitude que esta localizado o empreendimento',
    minLength: 8,
    example: '-23.473715447380332',
  })
  lat: string;
}

export const CreateCompanySchema = Validator.object({
  name: Validator.string(),
  //email: Validator.string().email(),
  //password: Validator.string().min(8),
})
  .options({ presence: 'required' })
  .required();
