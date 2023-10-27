import { ApiProperty } from '@nestjs/swagger';
import { CompanyEntity } from 'src/companies/entities/company.entity';
import Validator from 'src/utils/Validator';

export class CreateCourtDto {

  @ApiProperty({
    description: 'Endereco da imagem',
    example: 'www.imagens.com/image.jpg',
  })
  imageURL: string;

  @ApiProperty({
    description: 'O nome de identificacao da quadra',
    minLength: 8,
    example: 'Quadra 1 ',
  })
  name: string;

  @ApiProperty({
    description: 'Valor da Hora da reserva',
    minLength: 8,
    example: 150,
  })
  price: number;

  @ApiProperty({
    description: 'Descricao da quadra',
    minLength: 8,
    example: 'Quadra futebol society, etc',
  })
  description: string;

  @ApiProperty({
    description: 'Avaliacao da quadra',
    minLength: 8,
    example: 5,
  })
  rating: number;

  @ApiProperty({
    description: 'Capacidade maxima de participantes da reserva',
    minLength: 8,
    example: 20,
  })
  maxCapacity: number;

  @ApiProperty({
    description: 'Id da Empresa a qual a quadra pertence',
    minLength: 8,
    example: 1,
  })
  companyId: number
}

export const CreateCompanySchema = Validator.object({
  name: Validator.string(),
  //email: Validator.string().email(),
  //password: Validator.string().min(8),
})
  .options({ presence: 'required' })
  .required();
