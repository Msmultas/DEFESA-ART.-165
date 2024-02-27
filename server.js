const express = require('express');
const PDFDocument = require('pdfkit');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(bodyParser.json());

app.post('/gerar-pdf', (req, res) => {
  const respostas = req.body;

      const doc = new PDFDocument();

  doc.fontSize(16).font('Helvetica-Bold').text('EXCELENTÍSSIMO(A) SR.(A) AUTORIDADE COMPETENTE JULGADORA DAS INFRAÇÕES DE TRÂNSITO', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica-Bold').text('AUTO DE INFRAÇÃO DE TRÂNSITO:', { continued: true }).fontSize(13).font('Helvetica').text(` ${respostas.autoinfracao}`, { align: 'left' });
  doc.fontSize(14).font('Helvetica-Bold').text('AUTUADO(A):', { continued: true }).fontSize(13).font('Helvetica').text(` ${respostas.nome}`, { align: 'left' });
  doc.moveDown(); 

  doc.fontSize(15).font('Helvetica-Bold').text('I – DA QUALIFICAÇÃO', { align: 'left' });
  doc.moveDown();
    
  doc.fontSize(14).font('Helvetica').text('Eu,', { continued: true }).text(` ${respostas.nome},`, { continued: true })
  .text(' do CPF:', { continued: true }).text(` ${respostas.cpf}`, { continued: true })
  .text(', CNH:', { continued: true }).text(` ${respostas.cnh}`, { continued: true })
  .text(', E-mail:', { continued: true }).text(` ${respostas.email}`, { continued: true })
  .text(', telefone:', { continued: true }).text(` ${respostas.telefone}`, { continued: true })
  doc.fontSize(14).font('Helvetica').text(' venho através deste apresentar defesa-prévia escrita, conforme disciplina o art. 281-A do Código de Trânsito Brasileiro:', { align: 'left' });
  doc.moveDown();
  
  doc.fontSize(15).font('Helvetica-Bold').text('II – DOS FATOS E DA SUPOSTA INFRAÇÃO', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('No dia', { continued: true }).text(` ${respostas.datamulta}`, { continued: true })   
  .text(',', { continued: true }).text(' o(a) autuado(a) conduzia seu veículo', { continued: true })
  .text(', placa:', { continued: true }).text(` ${respostas.placa}`, { continued: true })
  doc.fontSize(14).font('Helvetica').text('oportunidade que foi autuado pelo suposto cometimento da infração prevista no Art. 165 do Código de Trânsito Brasileiro.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Na ocasião da abordagem pela autoridade de trânsito, foi lavrado auto de infração de trânsito mencionado, no entanto, ocorreu que a referida lavratura do ato administrativo se deu fora da legalidade, bem como das regulamentações que tratam acerca do tema.', { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('No primeiro contato, o agente de trânsito determinou que este(a) condutor(a) realizasse o teste do etilômetro, conhecido como bafômetro, sem informar acerca do direito de recusa à realização do respectivo ato.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Estando em situação de vulnerabilidade, e após muita insistência da autoridade de trânsito, este(a) condutor(a), sentindo-se pressionado(a) e contra sua vontade, realizou o respectivo teste, sendo constatada suposta embriaguez no resultado do teste.'),
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Diante disso, e exercendo seu direito de contraditório e ampla defesa, pelos fundamentos que fundamentam esse pedido, venho expor e requerer o que segue, por ser medida de justiça!'),
  doc.moveDown();
  doc.moveDown();

  doc.fontSize(15).font('Helvetica-Bold').text('III - DAS PRELIMINARES', { align: 'center' });
  doc.moveDown();


  doc.fontSize(15).font('Helvetica-Bold').text('III.I – DA NECESSIDADE DA JUNTADA DO AUTO DE INFRAÇÃO NESTE PROCESSO', { align: 'center' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('É sabido que na legislação que o auto de infração será arquivado e seu registro julgado insubsistente, caso seja considerado inconsistente ou irregular (art. 281, § 1°, inciso I do Código de Trânsito Brasileiro), e não tendo o agente de trânsito adotado os cuidados necessários no momento do preenchimento do auto de infração, é possível dizer que ocorreu vício formal na prática do ato administrativo quando da lavratura do respectivo documento.'),
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('É sabido ainda que as informações referentes à caracterização da infração devem constar em todas as vias do auto de infração de trânsito (AIT), além disso, é pacífico o entendimento de que quando o auto de infração for lavrado em suporte físico, não poderá conter rasuras, emendas, uso de corretivos, ou qualquer tipo de adulteração (MBFT), sendo pacífico perante a jurisprudência a necessidade do correto preenchimento do auto para que atinja a finalidade a qual se pretende ou seja, a aplicação da penalidade senão vejamos;'),
  doc.moveDown();

  doc.fontSize(12).font('Helvetica').text('“Nesse sentido, em que pese a presunção de legitimidade dos atos administrativos, no caso não restou demonstrada a regularidade da autuação, pois o auto não apresenta os requisitos mínimos de identificação previstos na legislação, devendo ser anulado o auto de infração. TJDF; RInom 0715615-13.2016.8.07.0016; Segunda Turma Recursal dos juizados Especiais; Rel. Juiz João Luis Fischer Dias; Julg.08/02/2017; DJDFTE 14/02/2017; Pág. 763” “REEXAME NECESSÁRIO. MANDADO DE SEGURANÇA.INFRAÇÃO DE TRÂNSITO. EXCESSO DE VELOCIDADE.NULIDADE DO AUTO DE INFRAÇÃO DE TRÂNSITO E DA MULTA IMPOSTA POR AUSÊNCIA DE PROVA MATERIAL.POSSIBILIDADE. Auto de infração de trânsito que não observou os critérios básicos previstos no art. 280 do CTB. Fotografia do radar eletrônico ilegível. ATO administrativo ilegal. Segurança concedida em primeira instância. Sentença mantida. Reexame necessário improvido. (TJSP; RN 0003275- 61.2014.8.26.0035; Ac.8813478; Águas de Lindóia; Décima Segunda Câmara de Direito Público; Rel. Des. Venicio Salles; Julg. 17/09/2015; DJESP07/10/2015)”', { align: 'right' });
  doc.moveDown();
  
  doc.fontSize(14).font('Helvetica').text('Conforme determina o art. 280 do Código de Trânsito Brasileiro, o auto de infração de trânsito é documento essencial para início do processo administrativo para aplicação da penalidade de multa, motivo pelo qual sua juntada é imprescindível.', { align: 'left' });
  doc.moveDown();


  doc.fontSize(15).font('Helvetica-Bold').text('III.II DO RECONHECIMENTO DE OFÍCIO DA DECADÊNCIA DO DIREITO DE PUNIR O(A) CONDUTOR(A)', { align: 'left' });
  doc.moveDown();


  doc.fontSize(14).font('Helvetica').text('Preliminarmente, importante trazer ainda o que traz o Art. 281, §1º do CTB quanto ao instituto da decadência, que dispõe, in verbis;', { align: 'left' });
  doc.moveDown(); 

  doc.fontSize(12).font('Helvetica').text('Art. 281 “A autoridade de trânsito, na esfera da competência estabelecida neste Código e dentro de sua circunscrição, julgará a consistência do auto de infração e aplicará a penalidade cabível.', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('§ 1º O auto de infração será arquivado e seu registro julgado insubsistente:', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('II - se, no prazo máximo de trinta dias, não for expedida a notificação da autuação.', { align: 'right' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Assim, a partir da letra da lei, se faz imprescindível a análise pela autoridade competente quanto a consistência quando da expedição da notificação de autuação, contados da data do suposto cometimento da infração, e tendo essa extrapolado o prazo de 30 (trinta) dias deverá ser arquivado.', { align: 'Left' });
  doc.moveDown(); 

  doc.fontSize(15).font('Helvetica-Bold').text('III.III – DA ORDEM ILEGAL NA REALIZAÇÃO DO TESTE DO ETILÔMETRO', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Dos fatos inicialmente trazidos, é possível verificar que este condutor foi autuado em norma constante no art. 165 do Código de Trânsito Brasileiro:', { align: 'left' });
  doc.moveDown(); 

  doc.fontSize(12).font('Helvetica').text('“Art. 165. - Dirigir sob a influência de álcool ou de qualquer outra substância psicoativa que determine dependência:', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('Infração - gravíssima;', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('Penalidade - multa (dez vezes) e suspensão do direito de dirigir por 12 (doze) meses.', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('Medida administrativa - recolhimento do documento de habilitação e retenção do veículo, observado o disposto no § 4o do art. 270 da Lei no 9.503, de 23 de setembro de 1997 - do Código de Trânsito Brasileiro.', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('Parágrafo único. Aplica-se em dobro a multa prevista no caput em caso de reincidência no período de até 12 (doze) meses.”', { align: 'right' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Ocorre que a referida norma acima, trata-se de norma administrativa em branco, ou seja, precisa de uma complementação para sua validade, que indique de forma objetiva a aferição da quantidade de álcool ingerido pelo condutor ou qual a substância psicoativa que lhe estaria eventualmente determinando dependência.', { align: 'left' });
  doc.moveDown(); 
  doc.fontSize(14).font('Helvetica').text('Neste sentido, para traçar de forma objetiva o “grau de embriaguez” e visar penalizar os reais condutores infratores, foi publicada, pelo Conselho Estadual de Trânsito, a Resolução de n° 432/2013, a qual delimita como se dará a confirmação da alteração do condutor:', { align: 'left' });
  doc.moveDown();

  doc.fontSize(12).font('Helvetica').text('Art. 3º. A confirmação da alteração da capacidade psicomotora em razão da influência de álcool ou de outra substância psicoativa que determine dependência dar-se-á por meio de, pelo menos, um dos seguintes procedimentos a serem realizados no condutor de veículo automotor:', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('I - exame de sangue;', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('II - exames realizados por laboratórios especializados, indicados pelo órgão ou entidade de trânsito competente ou pela Polícia Judiciária, em caso de consumo de outras substâncias psicoativas que determinem dependência;', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('III - teste em aparelho destinado à medição do teor alcoólico no ar alveolar (etilômetro);', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('IV - verificação dos sinais que indiquem a alteração da capacidade psicomotora do condutor.', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('[...]', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica-Bold').text('§ 2º Nos procedimentos de fiscalização deve-se priorizar a utilização do teste com etilômetro.', { align: 'right' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Conforme acima informado, o agente de trânsito não esclareceu que era direito do condutor se recusar ao teste do etilômetro, muito pelo contrário, foi incisivo em requisitar que pelo condutor fosse realizado o referido teste.', { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('A fim de obter informação necessária ao procedimento ali realizado, perguntei ao agente de trânsito acerca da validade do equipamento do teste do etilômetro, porém este se manteve silente, não informou quanto à data da última calibragem, tampouco se estava dentro do período de 12 meses (anualmente).', { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('Argumentando no sentido de estar descrente quanto a procedência e validade do teste do etilômetro, requisitou que fosse realizado teste clínico, porém pela autoridade de trânsito foi negado tal procedimento, sendo novamente determinada a realização do respectivo teste.', { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica-Bold').text('É certo que a Constituição Federal veda a auto incriminação, ou seja, o indivíduo não pode ser compelido a colaborar com os referidos testes do ‘bafômetro’ ou de exame de sangue, sendo que tal debate chegou ao Superior Tribunal de Justiça que firmou o seguinte entendimento:', { align: 'left' });
  doc.moveDown();

  doc.fontSize(12).font('Helvetica').text('“1. O entendimento adotado pelo Excelso Pretório, e  encampado pela doutrina, reconhece que o indivíduo não pode ser compelido a colaborar com os referidos testes do ‘bafômetro’ ou do exame de sangue, em respeito ao princípio segundo o qual ninguém é obrigado a se autoincriminar (nemo tenetur se detegere). Em todas essas situações prevaleceu, para o STF, o direito fundamental sobre a necessidade da persecução estatal.”  Recurso Especial de n° 1.111.566/DF (j. 28/03/2012)', { align: 'right' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('No meu caso, após insistente pressão por parte do agente de trânsito o qual, encontrando-me  em situação de vulnerabilidade, não vi outra opção a não ser realizar o respectivo teste, situação totalmente defeso aos princípios do Estado Democrático de Direito.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('A Resolução de n° 432/2013 não traz apenas um modo de se constatar possível embriaguez dos condutores, sendo totalmente possível a realização de exame de sangue ou até mesmo clínico para aferir a ocorrência de eventual estado de embriaguez.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(15).font('Helvetica-Bold').text('IV - DA OBSERVÂNCIA DAS QUESTÕES DE FORMAIS', { align: 'center' });
  doc.moveDown();

  doc.fontSize(15).font('Helvetica-Bold').text('IV.I DA NECESSIDADE DE INFORMAÇÕES COMPLEMENTARES NA LAVRATURA DO AUTO DE INFRAÇÃO DE TRÂNSITO ', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('O Conselho Nacional de Trânsito, no uso de suas atribuições, criou o Manual Brasileiro de Fiscalização de Trânsito, o qual contempla os procedimentos gerais a serem observados pelas autoridades de trânsito, seus agentes e órgãos de julgamento de 1ª e 2ª instâncias.', { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('O próprio Manual é imperativo em informar que “a interpretação das normas contidas no MBFT, bem como dos conceitos e definições, representa a posição oficial sobre a aplicação da legislação de trânsito tanto por parte da Senatran, quanto pelo Contran, tendo efeitos vinculantes para todos os órgãos do SNT.”', { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('É certo que o MBFT e seus procedimentos são de observância cogente à todas as autoridades de trânsito, e com base na análise do auto de infração lavrado pela autoridade de trânsito vinculada a este órgão fiscalizador, constata-se que o preenchimento do auto de infração se deu fora dos ditames legais/regulamentares, posto que não houve displicência na sua elaboração.', { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('O MBFT explica que o AIT (Auto de Infração de Trânsito) é peça informativa que dá início ao processo administrativo e subsidia a autoridade de trânsito para aplicação das penalidades, devendo ser preenchido de acordo com as disposições contidas no artigo 280 do CTB e demais normas regulamentares.', { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('Desta forma, o AIT ora questionado merece ser arquivado, tendo em vista seu status insubsistente, nos termos do art. 281, inciso §1°, inciso I do Código de Trânsito Brasileiro. ', { align: 'left' });
  doc.moveDown();

  doc.fontSize(15).font('Helvetica-Bold').text('IV.II DA GARANTIA DO DIREITO DA AMPLA DEFESA E DO CONTRADITÓRIO', { align: 'center' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Não obstante à tudo que foi exposto, se faz necessário que o cumprimento da legislação de trânsito é imprescindível para a garantia da segurança viária, no entanto, desde que observado o devido processo legal para a aplicação das penalidades previstas.',
  { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('O Art. 5º da Constituição da República Brasileira prevê como garantia fundamental o direito ao devido processo legal, senão vejamos;', { align: 'left' });
  doc.moveDown();

  doc.fontSize(12).font('Helvetica').text('Art. 5º Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade, nos termos seguintes:', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('LV - aos litigantes, em processo judicial ou administrativo, e aos acusados em geral são assegurados o contraditório e ampla defesa, com os meios e recursos a ela inerentes;', { align: 'right' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('Assim, verifica-se que cabe à Administração Pública a aplicação/execução da Lei de transito, desde que garantido o devido processo legal, sendo então a correta tipificação e enquadramento, assim como as informações complementares pertinentes prestadas, de forma a possibilitar defesa ampla do(a) condutor(a) quanto aos fatos imputados.', { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('Ainda neste sentido, a Administração Pública obriga-se ainda à observar os princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência, de forma que garanta a prática de ato administrativo certo e objetivo que embase o processo ao qual resultará na aplicação da penalidade pretendida.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(15).font('Helvetica-Bold').text('V - DO RECONHECIMENTO DE OFÍCIO', { align: 'left' });
  doc.moveDown();
  
  doc.fontSize(14).font('Helvetica').text('É sabido que a legislação de trânsito brasileira prevê julgamento prévio da consistência do auto de infração de trânsito:', { align: 'left' });
  doc.moveDown();

  doc.fontSize(12).font('Helvetica-Bold').text('“Art. 281. A autoridade de trânsito, na esfera da competência estabelecida neste Código e dentro de sua circunscrição, julgará a consistência do auto de infração e aplicará a penalidade cabível.', { align: 'right' });
  doc.moveDown();

  doc.fontSize(12).font('Helvetica-Bold').text('§ 1º O auto de infração será arquivado e seu registro julgado insubsistente: ', { align: 'right' });
  doc.moveDown();

  doc.fontSize(12).font('Helvetica-Bold').text('I - se considerado inconsistente ou irregular;”', { align: 'right' });
  doc.moveDown();
  
  doc.fontSize(14).font('Helvetica').text('Desta forma, conforme inicialmente informado, partindo da premissa de que o auto de infração foi lavrado sem consentimento, sendo que o(a) foi pressionado(a) a realizar o respectivo teste, necessário se faz o reconhecimento do seu arquivamento, tendo em vista sua irregularidade, devendo o reconhecimento ser de “ex officio”.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('A atuação de ofício da Administração Pública advém do princípio da autotutela administrativa, o qual prevê que quando o administrador público está diante de uma irregularidade ou ilegalidade, este tem o poder-dever revogar ou anular o respectivo ato, tendo em vista a busca pelo interesse público, entendimento que encontra respaldo em Súmula do Supremo Tribunal Federal:', { align: 'left' });
  doc.moveDown();

  doc.fontSize(12).font('Helvetica-Bold').text('“Súmula 473: A administração pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos; ou revogá-los, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos, e ressalvada, em todos os casos, a apreciação judicial.”', { align: 'right' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Desta forma, tendo como premissa de que o documento, que se impugna nesta defesa, está em total dissonância da legislação de trânsito, por medida de justiça, merece o auto de infração de trânsito supramencionado ser arquivado de ofício, excluindo-se eventual pontuação do prontuário do(a) autuado(a).', { align: 'left' });
  doc.moveDown();
  
  doc.fontSize(15).font('Helvetica-Bold').text('VI – DOS PEDIDOS', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('O autuado, através da respectiva peça, vem requer: ', { align: 'left' });
  doc.moveDown();

  doc.fontSize(13).font('Helvetica').text('A) O recebimento desta defesa e dos documentos que a acompanham;', { align: 'left' });
  doc.moveDown();
  doc.fontSize(13).font('Helvetica').text('B) A juntada da cópia do auto de infração de trânsito de lavrado sob código', { continued: true });doc.fontSize(13).font('Helvetica').text(` ${respostas.autoinfracao}`, { align: 'left' });
  doc.moveDown();
  doc.fontSize(13).font('Helvetica-Bold').text('C) O arquivamento do auto de infração de código', { continued: true });doc.fontSize(13).font('Helvetica-Bold').text(` ${respostas.autoinfracao}`,{ continued: true });doc.fontSize(13).font('Helvetica-Bold').text(' haja vista reconhecimento de ofício ou diante das demais fundamentações trazidas.', { align: 'left' });
  doc.moveDown();
  doc.fontSize(13).font('Helvetica').text('D) A notificação do autuado no endereço cadastrado no sistema, devidamente informado, em caso de eventual imposição de penalidade.', { align: 'left' });
  doc.moveDown();

doc.fontSize(14).font('Helvetica').text('DATA:   ', { align: 'center', continued: true }).text('             '  +  respostas.datamulta, { align: 'center' });
doc.moveDown(4);

doc.fontSize(14).font('Helvetica').text('AUTUADO(A) - ', { continued: true }).fontSize(14).font('Helvetica').text(` ${respostas.nome}`, { align: 'left' });
doc.moveDown(2);

doc.fontSize(14).font('Helvetica').text('Assinatura:________________________________________________', { align: 'left' });
doc.moveDown(3);

doc.fontSize(14).font('Helvetica').text('(Documentos em Anexo)', { align: 'left' });
doc.moveDown();

doc.fontSize(14).font('Helvetica').text('- Carteira Nacional de Habilitação (CNH) do proprietário do veículo', { align: 'left' });
doc.moveDown(); 

doc.fontSize(14).font('Helvetica').text('- Documento do veículo', { align: 'left' });
doc.moveDown(); 














  

  











//--------------------------------------------------------------------------------------------
/*
  doc.fontSize(12).text('Pergunta: Qual é o seu nome completo?');
  doc.fontSize(12).text(`Resposta: ${respostas.nome}`);
  doc.moveDown();

  doc.fontSize(12).text('Pergunta: Informe o código do auto de infração de trânsito');
  doc.fontSize(12).text(`Resposta: ${respostas.autoinfracao}`);
  doc.moveDown();

  doc.fontSize(12).text('Pergunta: Qual é o seu CPF?');
  doc.fontSize(12).text(`Resposta: ${respostas.cpf}`);
*/
//-------------------------------------------------------------------------------------------
  const pdfFilename = 'Petição Modelo Art.165 IX CTB.pdf';
  const pdfPath = path.join(__dirname, 'backup', pdfFilename);
  const pdfStream = fs.createWriteStream(pdfPath);
  doc.pipe(pdfStream);
  doc.end();

  pdfStream.on('finish', () => {
    res.download(pdfPath, (err) => {
      if (err) {
        console.error('Erro ao realizar o download do arquivo PDF:', err);
        res.sendStatus(500);
      }

      // Criar uma cópia do arquivo na pasta 'cofre' com a data e hora do arquivo
      const now = new Date();
      const formattedDate = format(now, 'dd-MM-yyyy_HH-mm-ss');
      const copyFilename = `${formattedDate}_${pdfFilename}`;
      const copyPath = path.join(__dirname, 'cofre', copyFilename);
      fs.copyFileSync(pdfPath, copyPath);

      fs.unlinkSync(pdfPath); // Remover o arquivo PDF da pasta 'backup' após o download
    });
  });

  pdfStream.on('error', (err) => {
    console.error('Erro ao gerar o arquivo PDF:', err);
    res.sendStatus(500);
  });
});

app.listen(3000, () => {
  console.log('\x1b[34m%s\x1b[0m', 'Olá Brittes, seu servidor foi iniciado na porta 3000');
});

