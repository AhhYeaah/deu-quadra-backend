import { ApiProperty } from '@nestjs/swagger';
import Validator from 'src/utils/Validator';

export class CreateCourtDto {

  @ApiProperty({
    description: 'O nome de identificacao da quadra',
    minLength: 8,
    example: 'Quadra 1 ',
  })
  nome: string;

  @ApiProperty({
    description: 'Endereco da imagem',
    example: 'www.imagens.com/image.jpg',
  })
  imagemUrl: string;

  @ApiProperty({
    description: 'Valor da Hora da reserva',
    example: 150,
  })
  preco: number;

  @ApiProperty({
    description: 'Descricao da quadra',
    example: 'Quadra futebol society, etc',
  })
  descricao: string;

  @ApiProperty({
    description: 'Id da Empresa a qual a quadra pertence',
    example: 1,
  })
  empresa: number
}

export const CreateCompanySchema = Validator.object({
  nome: Validator.string(),
  //email: Validator.string().email(),
  //password: Validator.string().min(8),
})
  .options({ presence: 'required' })
  .required();
