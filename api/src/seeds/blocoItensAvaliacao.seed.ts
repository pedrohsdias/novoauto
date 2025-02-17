import { DataSource } from 'typeorm';
import { CampoEntity } from '../template-modelo-vistoria/entity/campo.entity';
import { TipoCampoEnum } from '../template-modelo-vistoria/enum/tipoCampo.enum';
import { BlocoEntity } from '../template-modelo-vistoria/entity/bloco.entity';
import { TipoBlocoEnum } from '../template-modelo-vistoria/enum/tipoBloco.enum';
import { CampoCategoriaEntity } from '../template-modelo-vistoria/entity/campoCategoria.entity';
import { NivelRiscoEnum } from '../template-modelo-vistoria/enum/nivelRisco.enum';
import { OpcaoCampoEntity } from '../template-modelo-vistoria/entity/opcaoCampo.entity';

export class BlocoItensAvaliacaoSeed {
  async run(dataSource: DataSource): Promise<void> {
    const blocoRepository = dataSource.getRepository(BlocoEntity);
    const campoRepository = dataSource.getRepository(CampoEntity);
    const categoriaRepository = dataSource.getRepository(CampoCategoriaEntity);
    const opcaoCampoRepository = dataSource.getRepository(OpcaoCampoEntity);

    const blocos = [
      {
        nome: 'ITENS AVALIAÇÃO',
        tipo: TipoBlocoEnum.PADRAO,
        fontAwesomeIcon: 'fa-book',
      }, //0
    ];
    const blocosCriados = await blocoRepository.save(blocos);

    let categoria = [
      {
        nome: 'INSPEÇÃO DE MANUAIS',
      }
    ];
    let categoriaCriada = await categoriaRepository.save(categoria);

    const todosCampos = [];

    let campos = [
      { alias: 'MANUAL', nome: 'Manual', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao:true, bloco: blocosCriados[0], categoria:categoriaCriada[0] },
      { alias: 'LIVRETE_REVISOES', nome: 'Livrete de revisões', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'CHAVE_RESERVA', nome: 'Chave reserva', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'CHAVE_RODAS', nome: 'Chave de rodas', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'MACACO', nome: 'Macaco', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'TRIANGULO_SEG', nome: 'Triângulo de seg', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'EXTINTOR_INCENDIO', nome: 'Extintor de incêndio', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
    ];
    let campoSalvo = await campoRepository.save(campos);
    todosCampos.push(campoSalvo)

    categoria = [
      {
        nome: 'ANÁLISE ESTRUTURAL',
      }
    ];
    categoriaCriada = await categoriaRepository.save(categoria);

    campos = [
      { alias: 'PAINEL_FRONTAL', nome: 'Painel frontal', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'LONGARINA_DIANTEIRA_LE', nome: 'Longarina dianteira LE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'LONGARINA_DIANTEIRA_LD', nome: 'Longarina dianteira LD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'PAINEL_TRASEIRO', nome: 'Painel traseiro', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'COLUNA_A_LE', nome: 'Coluna A LE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'COLUNA_B_LE', nome: 'Coluna B LE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'COLUNA_C_LE', nome: 'Coluna C LE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'LONGARINA_TE', nome: 'Longarina TE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'COLUNA_A_LD', nome: 'Coluna A LD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'COLUNA_B_LD', nome: 'Coluna B LD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'COLUNA_C_LD', nome: 'Coluna C LD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'LONGARINA_TD', nome: 'Longarina TD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
    ];

    campoSalvo = await campoRepository.save(campos);
    todosCampos.push(campoSalvo)

    categoria = [
      {
        nome: 'INSPEÇÃO DO EXTERIOR',
      }
    ];
    categoriaCriada = await categoriaRepository.save(categoria);

    campos = [
      { alias: 'ESTADO_GERAL_PINTURA', nome: 'Estado geral da pintura', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'AMASSADOS', nome: 'Amassados', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'RISCOS_ARRANHOES', nome: 'Riscos / Arranhões', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'FRISOS', nome: 'Frisos', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'PARACHOQUE_DIANTEIRO', nome: 'Parachoque dianteiro', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'PARACHOQUE_TRASEIRO', nome: 'Parachoque traseiro', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'BORRACHAOES', nome: 'Borrachões', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'FAROL_DIREITO', nome: 'Farol Direito', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'FAROL_ESQUERDO', nome: 'Farol Esquerdo', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'LANTERNA_DIREITA', nome: 'Lanterna direita', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'LANTERNA_ESQUERDA', nome: 'Lanterna esquerda', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'FAROL_NEBLINA', nome: 'Farol de neblina', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'GRADE', nome: 'Grade', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'LIMPADORES_DIANTEIROS', nome: 'Limpadores dianteiros', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'LIMPADOR_TRASEIRO', nome: 'Limpador traseiro', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'RETROVISOR_DIREITO', nome: 'Retrovisor direito', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'RETROVISOR_ESQUERDO', nome: 'Retrovisor esquerdo', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'MACANETAS_PORTAS', nome: 'Maçanetas das portas', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'MACANETA_PORTA_MALAS', nome: 'Maçaneta porta-malas', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'GUARNICOES_VIDROS', nome: 'Guarnições dos vidros', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'VIDROS', nome: 'Vidros', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'PARABRISA', nome: 'Parabrisa', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'CAIXA_AR', nome: 'Caixa de ar', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'CAIXA_RODAS', nome: 'Caixa de rodas', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] }
    ];

    campoSalvo = await campoRepository.save(campos);
    todosCampos.push(campoSalvo);

    categoria = [
      {
        nome: 'INSPEÇÃO DO INTERIOR',
      }
    ];
    categoriaCriada = await categoriaRepository.save(categoria);

    campos = [
      { alias: 'ESTADO_GERAL_INTERIOR', nome: 'Estado geral do interior', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'BANCO_MOTORISTA', nome: 'Banco motorista', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'BANCO_PASSAGEIRO', nome: 'Banco passageiro', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'BANCO_TRASEIRO', nome: 'Banco traseiro', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'FORRO_PORTA_DE', nome: 'Forro de porta DE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'FORRO_PORTA_DD', nome: 'Forro de porta DD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'FORRO_PORTA_TE', nome: 'Forro de porta TE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'FORRO_PORTA_TD', nome: 'Forro de porta TD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'TAPETE_ASSOALHO', nome: 'Tapete assoalho', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'JOGO_TAPETES', nome: 'Jogo de tapetes', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'FORRO_TETO', nome: 'Forro de teto', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'VOLANTE', nome: 'Volante', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'PAINEL', nome: 'Painel', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'MOSTRADORES_PAINEL', nome: 'Mostradores do painel', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'BOTOES_PAINEL', nome: 'Botões do painel', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'DIFUSORES_AR', nome: 'Difusores de ar', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'SISTEMA_SOM', nome: 'Sistema de som', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'ALAVANCA_MARCHA', nome: 'Alavanca de marcha', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'CONSOLE', nome: 'Console', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'ACIONAMENTO_BANCOS', nome: 'Acionamento dos bancos', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'CINTO_SEG_MOTORISTA', nome: 'Cinto de seg motorista', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'CINTO_SEG_PASSAGEIRO', nome: 'Cinto de seg passageiro', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'CINTOS_TRASEIROS', nome: 'Cintos traseiros', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'TAMPA_PORTA_LUVAS', nome: 'Tampa porta-luvas', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'INTERIOR_PORTA_LUVAS', nome: 'nterior porta-luvas', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'PORTA_OBJETOS_PORTAS', nome: 'Porta objetos das portas', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'PORTA_REVISTA', nome: 'Porta revista', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'RETROVISOR_INTERNO', nome: 'Retrovisor interno', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'ENCOSTOS_CABECA', nome: 'Encostos de cabeça', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'TAMPA_PORTA_MALAS', nome: 'Tampa do porta malas', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'AC_PORTA_MALAS', nome: 'Ac do porta malas', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'AC_TANQUE', nome: 'Ac. do tanque', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'AC_CAPO', nome: 'Ac. do capô', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'ODORES', nome: 'Odores', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] }
    ];

    campoSalvo = await campoRepository.save(campos);
    todosCampos.push(campoSalvo);

    categoria = [
      {
        nome: 'INSPEÇÃO DE RODAS E PNEUS',
      }
    ];
    categoriaCriada = await categoriaRepository.save(categoria);

    campos = [
      { alias: 'RODA_DD', nome: 'Roda DD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'RODA_DE', nome: 'Roda DE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'RODA_TD', nome: 'Roda TD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'RODA_TE', nome: 'Roda TE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'RODA_ESTEPE', nome: 'Roda estepe', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'PNEU_DD', nome: 'Pneu DD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'PNEU_DE', nome: 'Pneu DE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'PNEU_TD', nome: 'Pneu TD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'PNEU_TE', nome: 'Pneu TE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'ESTEPE', nome: 'Estepe', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] }
    ];

    campoSalvo = await campoRepository.save(campos);
    todosCampos.push(campoSalvo);

    categoria = [
      {
        nome: 'INSPEÇÃO DE ELÉTRICA E MECÂNICA',
      }
    ];
    categoriaCriada = await categoriaRepository.save(categoria);

    campos = [
      { alias: 'FAROL_DD', nome: 'Farol DD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'FAROL_DE', nome: 'Farol DE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'LANTERNA_TD', nome: 'Lanterna TD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'LANTERNA_TE', nome: 'Lanterna TE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'LUZ_RE', nome: 'Luz de ré', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'SETA_DD', nome: 'Seta DD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'SETA_DE', nome: 'Seta DE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'SETA_TD', nome: 'Seta TD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'SETA_TE', nome: 'Seta TE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'LUZ_PLACA', nome: 'Luz de placa', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'LUZ_INTERNA', nome: 'Luz interna', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'ILUMINACAO_PAINEL', nome: 'Iluminação do painel', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'ILUM_MOSTRADORES', nome: 'Ilum. dos mostradores', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'ILUMINACAO_SOM', nome: 'Iluminação do som', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'VIDRO_ELETRICO_DE', nome: 'Vidro elétrico DE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'VIDRO_ELETRICO_DD', nome: 'Vidro elétrico DD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'VIDRO_ELETRICO_TE', nome: 'Vidro elétrico TE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'VIDRO_ELETRICO_TD', nome: 'Vidro elétrico TD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'RETROVISOR_ELETRICO_DE', nome: 'Retrovisor elétrico DE', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'RETROVISOR_ELETRICO_DD', nome: 'Retrovisor elétrico DD', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'TRAVA_PORTAS', nome: 'Trava das portas', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'LIMP_PARABRISA_D', nome: 'Limp. de parabrisa D', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'LIMP_PARABRISA_T', nome: 'Limp. de parabrisa T', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'ESGUICHO_PARABRISA', nome: 'Esguicho parabrisa', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'ESGUICHO_VT', nome: 'Esguicho VT', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'KIT_MULTIMIDIA', nome: 'Kit multmidia', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'ALARME', nome: 'Alarme', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'AR_CONDICIONADO', nome: 'Ar condicionado', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] }
    ];

    campoSalvo = await campoRepository.save(campos);
    todosCampos.push(campoSalvo);

    categoria = [
      {
        nome: 'MECÂNICA/TEST-DRIVE',
      }
    ];
    categoriaCriada = await categoriaRepository.save(categoria);

    campos = [
      { alias: 'CENTRAL_ELETRONICA', nome: 'Central eletrônica', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'VAZAMENTOS', nome: 'Vazamentos', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'PASTILHA_FREIO', nome: 'Pastilha de freio', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'FUNCIONAMENTO_GERAL', nome: 'Funcionamento geral', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'DIRECAO', nome: 'Direção', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'FREIOS', nome: 'Freios', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'CAMBIO', nome: 'Câmbio', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'EMBREAGEM', nome: 'Embreagem', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'BARULHOS_INTERNOS', nome: 'Barulhos internos', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'BARULHOS_SUSPENSAO', nome: 'Barulhos suspensão', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'ROLAMENTOS', nome: 'Rolamentos', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] },
      { alias: 'ALINHAMENTO', nome: 'Alinhamento', tipo: TipoCampoEnum.RADIO_BUTTON, temObservacao: true, bloco: blocosCriados[0], categoria: categoriaCriada[0] }
    ];

    campoSalvo = await campoRepository.save(campos);
    todosCampos.push(campoSalvo);

    const opcoesAvaliacao = todosCampos
      .map((campo, index) => {
        return [
          { alias: 'APROVADO', nome: 'CONFORME', nivelRisco: NivelRiscoEnum.SUCESSO, campo: campo,},
          { alias: 'APROVADO_COM_RESTRICOES', nome: 'HÁ APONTAMENTOS', nivelRisco: NivelRiscoEnum.AVISO, campo: campo,},
          { alias: 'NAO_APROVADO', nome: 'NÃO CONFORME', nivelRisco: NivelRiscoEnum.ERRO, campo: campo,},
        ];
      })
      .flat();
    await opcaoCampoRepository.save(opcoesAvaliacao);
  }
}
