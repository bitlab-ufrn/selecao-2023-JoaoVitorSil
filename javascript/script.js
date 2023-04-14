/* Array de palavras consideradas obscenas */ 
const filter = [

    "puta",
    "puto",
    "rapariga",
    "caralho",
    "carai",
    "arrombado",
    "viado",
    "baitola",
    "bicha",
    "boiola",
    "fresco",
    "cu",
    "cuzao",
    "rola",
    "pau",
    "pinto",
    "pica",
    "porra",
    "gala",
    "cacete",
    "foda",
    "fodendo",
    "fuder",
    "trepar",
    "corno",
    "transar",
    "boquete",
    "punheta",
    "buceta",
    "boceta",
    "xoxota",
    "sirica",
    "vagabunda",
    "vagabundo",
    "escroto",
    "escrota",
    "canalha",
    "piranha",
    "cracudo",
    "preto",
    "merda",
    'saco',
    "safado"
]

/* Função de censura. Ela substitui as letras da palavra por "*", exceto a primeira letra.  */
function censure(word){
    let cencuredword = word[0]
    for(let i=1; i<word.length;i++){
        cencuredword = cencuredword + "*"
    }
    return cencuredword
}

/*Função que lê e verifica a menssagem escrita pelo usuário*/
function badWord(){

    let msg = document.getElementById("message").value
    let result = msg
    let str = msg.split(' ')

    for (const element of filter) {
        if(msg.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(element)){
            for(const word of str){
                if(word.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")==element){
                    result = result.replace(word,censure(word))
                }
            }
        }
    }
    
    document.getElementById("result").innerHTML = result
    document.getElementById("message").value = ""
}