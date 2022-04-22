const codigoPacotes = [
    '288355555123888', 
    '335333555584333',
    '223343555124001',
    '002111555874555',
    '111188555654777',
    '111333555123333',
    '432055555123888',
    '079333555584333',
    '155333555124001',
    '333188555584333', 
    '555288555123001',
    '111388555123555',
    '288000555367333',
    '066311555874001',
    '110333555123555',
    '333488555584333',
    '455448555123001',
    '022388555123555',
    '432044555845333',
    '034311555874001'
];
const regiao = {
    'sudeste': '0',
    'sul': '1' ,
    'centroOeste': '2',
    'nordeste': '3',
    'norte': '4',

};
const conteudo = {
 'joias': '0',
 'livros': '1',
 'eletronicos': '3',
 'bebidas': '5',
 'brinquedos': '8',

};
// vendedor
const vendedor = {
   'vend1': '123',
   'vend2': '124',
   'vend3': '367',
   'vend4': '584',
   'vend5': '654',
   'vend6': '874',
   'vend7': '845',
   };
var vendedorBloqueado = ['367'];

var pacoteVendedor1 = [];
   var pacoteVendedor2 = []; 
   var pacoteVendedor3 = []; 
   var pacoteVendedor4 = []; 
   var pacoteVendedor5 = [];    
   var pacoteVendedor6 = []; 
   var pacoteVendedor7 = []; 

// origem
var origemSul = [];
var origemSudeste = [];
var origemCentroOeste = [];
var origemNordeste = [];
var origemNorte = [];

// destino
var destinoSul = [];
var destinoSudeste = [];
var destinoCentroOeste = [];
var destinoNordeste = [];
var destinoNorte = [];

// invalidos
var pacoteInvalido = [];

// região sul com brinquedos
var regiaoSulBrinquedos = [];

function leitor (codigos) {
    return {
    origem: codigos.substring( 0, 1),
    destino: codigos.substring(3, 4),
    codigoLoggi: codigos.substring(6, 9),
    codigoVendedor: codigos.substring(9, 12),
    tipo : codigos.substring(12, 13),
    };
}

for (let i = 0; i< 20 ; i++){
   var pacoteVerificado = leitor(codigoPacotes[i]);
   var daVez = codigoPacotes [i];
    
    // etrutura condicional para verificar a origem   
   if (pacoteVerificado.origem == regiao.sudeste) { 
        origemSudeste.push (daVez)

     }
   else if (pacoteVerificado.origem == regiao.sul) { 
        origemSul.push (daVez)
   }
   else if (pacoteVerificado.origem == regiao.centroOeste) { 
        origemCentroOeste.push (daVez)
   }
   else if (pacoteVerificado.origem == regiao.nordeste) { 
        origemNordeste.push (daVez )
   }
   else if (pacoteVerificado.origem == regiao.norte) { 
        origemNorte.push (daVez)
   }
   else { pacoteInvalido.push (daVez) };

     //estrutura codicional para verificar o destino
     
   if (pacoteVerificado.destino == regiao.sudeste) { 
      destinoSudeste.push (daVez)
   }
   else if (pacoteVerificado.destino == regiao.sul) { 
      destinoSul.push (daVez)
   }
   else if (pacoteVerificado.destino == regiao.centroOeste) { 
      destinoCentroOeste.push (daVez)
   }
   else if (pacoteVerificado.destino == regiao.nordeste) { 
      destinoNordeste.push (daVez )
   }
   else if (pacoteVerificado.destino == regiao.norte) { 
      destinoNorte.push (daVez)
   }
   else { pacoteInvalido.push (daVez) };

   // estrutura condicional pacotes validos e invalidos
   //joias   
   if (pacoteVerificado.tipo == conteudo.joias && pacoteVerificado.origem == regiao.centroOeste ) {
      pacoteInvalido.push (daVez)
   };

   // vendedor bloqueado 
   if (pacoteVerificado.codigoVendedor == vendedorBloqueado ){
      pacoteInvalido.push (daVez)
   };

  // pacote tipo invalido
   if (pacoteVerificado.tipo !== conteudo.joias && pacoteVerificado.tipo !== conteudo.livros && pacoteVerificado.tipo !== conteudo.eletronicos && pacoteVerificado.tipo !== conteudo.bebidas && pacoteVerificado.tipo !== conteudo.brinquedos){
         pacoteInvalido.push (daVez);
   };

   //  pacotes da região sul com o conteudo brinquedos
   if (pacoteVerificado.origem == regiao.sul && pacoteVerificado.tipo == conteudo.brinquedos)
   {
      regiaoSulBrinquedos.push (daVez);
   };
   
   // pacotes validos por região de destino
   var sudesteValido = destinoSudeste.filter( (pacote) => {
      return pacoteInvalido.indexOf (pacote) == -1; 
   });
   var sulValido = destinoSul.filter( (pacote) => {
      return pacoteInvalido.indexOf (pacote) == -1; 
   });
   var centroOesteValido = destinoCentroOeste.filter( (pacote) => {
      return pacoteInvalido.indexOf (pacote) == -1; 
   });
   var nordesteValido = destinoNordeste.filter( (pacote) => {
      return pacoteInvalido.indexOf (pacote) == -1; 
   });
   var norteValido = destinoNorte.filter( (pacote) => {
      return pacoteInvalido.indexOf (pacote) == -1; 
   });
    
// vendedores
   

//  quantidade de pacotes validos por vendedor
 
   if (pacoteVerificado.codigoVendedor === vendedor.vend1 ) {
         pacoteVendedor1.push(daVez);
   } else if(pacoteVerificado.codigoVendedor == vendedor.vend2){
         pacoteVendedor2.push(daVez);
   } else if(pacoteVerificado.codigoVendedor == vendedor.vend3){
         pacoteVendedor3.push(daVez);
   } else if(pacoteVerificado.codigoVendedor == vendedor.vend4){
         pacoteVendedor4.push(daVez);
   } else if(pacoteVerificado.codigoVendedor == vendedor.vend5){
         pacoteVendedor5.push(daVez);
   } else if(pacoteVerificado.codigoVendedor == vendedor.vend6){
         pacoteVendedor6.push(daVez);
   } else {
         pacoteVendedor7.push(daVez);
      };
};   


// 1 - Indentificar a região de destino de cada pacote, com a totalização de pacotes (soma região) ;
console.log ('');
console.log ('');
console.log ('1 - Indentificar a região de destino de cada pacote, com totalização de pacotes (soma região); ');
console.log ('');
console.log ('São '+  destinoSudeste.length + ' pacotes com destino para para a região Suldeste, ' + 'os pacotes são: ');
console.log (destinoSudeste);
console.log ('');
console.log ('São '+  destinoSul.length  + ' pacotes com destino para a região Sul, ' + 'os pacotes são: ' );
console.log (destinoSul);
console.log ('');
console.log ('São '+  destinoCentroOeste.length + ' pacotes com destino para para a região Centro-Oeste, ' + 'os pacotes são: ' );
console.log (destinoCentroOeste);
console.log ('');
console.log ('São '+  destinoNordeste.length + ' pacotes com destino parapara a região Nordeste, ' + 'os pacotes são: ' );
console.log (destinoNordeste);
console.log ('');
console.log ('São '+ destinoNorte.length + ' pacotes com destino para para a região Norte, ' + 'os pacotes são: ' );
console.log (destinoNorte);
console.log('-----------------------------------------------------------------------------------------------------');
console.log ('');
// 2- Saber quais pacotes possuem códigos de barras validos e\ou invalidos;
console.log ('2 - Saber quais pacotes possuem códigos de barras validos e invalidos');
console.log ('São ' + pacoteInvalido.length + ' pacotes Invalidos, são eles:');
console.log (pacoteInvalido);
console.log('-----------------------------------------------------------------------------------------------------');
console.log ('');
// 3- identifucar pacotes que têm como origem a região Sul e Brinquedos em seu conteúdo
console.log ( '3 - identifucar pacotes que têm como origem a região Sul e Brinquedos em seu conteúdo');
console.log ('');
console.log (regiaoSulBrinquedos.length + ' pacotes com destino a região sul e brinquedos em seu conteudo');
console.log('-----------------------------------------------------------------------------------------------------');
console.log ('');

// 4- Listar os pacotes agrupados por região de destino (considerar apenas pacotes válidos).
console.log ('4 - Listar os pacotes agrupados por região de destino (considerar apenas pacotes válidos)')
console.log ('');
console.log ('Pacotes para região suldeste');
console.log(sudesteValido);
console.log ('');
console.log ('Pacotes para região sul');
console.log(sulValido);
console.log ('');
console.log ('Pacotes para região Centro-Oeste');
console.log(centroOesteValido);
console.log ('');
console.log ('Pacotes para região Nordeste');
console.log(nordesteValido);
console.log ('Pacotes para região Norte');
console.log(norteValido);
console.log('')
console.log('-----------------------------------------------------------------------------------------------------');
//5- Listar o numero de pacotes enviados por cada vendedor  (considerar apenas pacotes válidos).
console.log('5 - Listar o numero de pacotes enviados por cada vendedor  (considerar apenas pacotes válidos).');
console.log('');
console.log(pacoteVendedor1.length + ' Pacotes do Vendedor 1');
console.log(pacoteVendedor1);
console.log('');
console.log(pacoteVendedor2.length + ' Pacotes do Vendedor 2');
console.log(pacoteVendedor2);
console.log('');
console.log(pacoteVendedor3.length + ' Pacotes do Vendedor 3');
console.log(pacoteVendedor3);
console.log('');
console.log(pacoteVendedor4.length + ' Pacotes do Vendedor 4');
console.log(pacoteVendedor4);
console.log('');
console.log(pacoteVendedor5.length + ' Pacotes do Vendedor 5');
console.log(pacoteVendedor5);
console.log('');
console.log(pacoteVendedor6.length + ' Pacotes do Vendedor 6');
console.log(pacoteVendedor6);
console.log('');
console.log(pacoteVendedor7.length + ' Pacotes do Vendedor 7');
console.log(pacoteVendedor7);


console.log('-----------------------------------------------------------------------------------------------------');
//6- Gerar relatorio/lista de paotes por destino e por tipo (considerar apenas pacotes válidos).


console.log('-----------------------------------------------------------------------------------------------------');

//7- Se o transporte dos pacotes para o Norte passa pela região Centro-Oeste, quais são os pacotes que devem ser despachados no mesmo caminhão.


console.log('-----------------------------------------------------------------------------------------------------');

//8 Se todos os pacotes fossem uma fila qual seria a ordem de carga para o norte no caminhão para descarregar os pacotes da Região Centro Oeste primeiro;


console.log('-----------------------------------------------------------------------------------------------------');


//9- No item acima considerar que as Joias fossem sempre as primeiras a serem descarregadas;

console.log('-----------------------------------------------------------------------------------------------------');

//10- Listar os pacotes invalidos;
console.log ('');
console.log ('10- Listar os pacotes invalidos;');
console.log ('São ' + pacoteInvalido.length + ' pacotes Invalidos, são eles:');
console.log (pacoteInvalido);
console.log ('');





 

