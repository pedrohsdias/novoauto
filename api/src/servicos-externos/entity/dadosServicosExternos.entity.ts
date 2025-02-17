import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { TipoServicoExternoEnum } from '../enum/TipoServicoExterno.enum';
import { FornecedoresEnum } from '../enum/Fornecedores.enum';
import { StatusIntegracaoEnum } from '../enum/StatusIntegracao.enum';

@Entity('servicos_externos',{
  comment:'Registra os payloads e respostas de todos as integrações realizadas con serviços externos',
})
export class DadosServicosExternosEntity extends BaseEntity {
  @Column({ type: 'text', nullable: true, comment: 'dados enviados para o servico externo' })
  requisicao: string;
  @Column({ type: 'text', nullable: true, comment: 'dados enviados para o servico externo' })
  resposta: string;

  @Column({
    type: 'enum',
    enum: StatusIntegracaoEnum,
    default: StatusIntegracaoEnum.PENDENTE,
  })
  status: StatusIntegracaoEnum;

  @Column({
    name: 'tipo_servico',
    type: 'enum',
    enum: TipoServicoExternoEnum,
  })
  tipo: TipoServicoExternoEnum;

  @Column({
    type: 'enum',
    enum: FornecedoresEnum,
  })
  fornecedor: FornecedoresEnum
}
