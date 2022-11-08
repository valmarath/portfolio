window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menus").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'none';
        } else {
            document.querySelector(".menus").style.display = 'flex';
        }
    });
    document.querySelector(".active").addEventListener("click", function(){
        if(document.querySelector(".menus").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'none';
        } else if(document.querySelector(".menuMobile").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'flex';
        }
    });
    document.querySelector(".active2").addEventListener("click", function(){
        if(document.querySelector(".menus").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'none';
        } else if(document.querySelector(".menuMobile").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'flex';
        }
    });
    document.querySelector(".active3").addEventListener("click", function(){
        if(document.querySelector(".menus").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'none';
        } else if(document.querySelector(".menuMobile").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'flex';
        }
    });
};


let changeDescription = document.querySelector(".tech_description");

document.querySelector(".html").addEventListener("mouseover", () => {
    changeDescription.innerHTML = `HTML é uma linguagem baseada em marcação, onde selecionam-se os elementos para definir quais informações a página vai exibir.`;
});

document.querySelector(".css").addEventListener("mouseover", () => {
    changeDescription.innerHTML = `CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML.`;
});

document.querySelector(".javascript").addEventListener("mouseover", () => {
    changeDescription.innerHTML = `JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.`;
});
document.querySelector(".git").addEventListener("mouseover", () => {
    changeDescription.innerHTML = `Git é um sistema de controle de versão open-source (gratuito). Ele é utilizado para a criação de um histórico de alterações em código-fonte de projetos de desenvolvimento de software.`;
});
document.querySelector(".mongodb").addEventListener("mouseover", () => {
    changeDescription.innerHTML = `O MongoDB é um banco de dados orientado a documentos que possui código aberto (open source) e foi projetado para armazenar uma grande escala de dados, além de permitir que se trabalhe de forma eficiente com grandes volumes. Ele é categorizado no banco de dados NoSQL (not only SQL), pois o armazenamento e a recuperação de dados no MongoDB não são feitas no formato de tabelas.`;
});
document.querySelector(".python").addEventListener("mouseover", () => {
    changeDescription.innerHTML = `Python é uma linguagem de programação de alto nível — ou High Level Language —, dinâmica, interpretada, modular, multiplataforma e orientada a objetos. Um de seus maiores atrativos é possuir um grande número de bibliotecas, nativas e de terceiros, tornando-a muito difundida e útil em uma grande variedade de setores dentro de desenvolvimento web, e também em áreas como análise de dados, machine learning e IA.`;
});


document.querySelector(".html").addEventListener("mouseout", () => {
    changeDescription.innerHTML = `*Passe o cursor do mouse sobre o card para ler*`;
});
document.querySelector(".css").addEventListener("mouseout", () => {
    changeDescription.innerHTML = `*Passe o cursor do mouse sobre o card para ler*`;
});
document.querySelector(".javascript").addEventListener("mouseout", () => {
    changeDescription.innerHTML = `*Passe o cursor do mouse sobre o card para ler*`;
});
document.querySelector(".git").addEventListener("mouseout", () => {
    changeDescription.innerHTML = `*Passe o cursor do mouse sobre o card para ler*`;
});
document.querySelector(".mongodb").addEventListener("mouseout", () => {
    changeDescription.innerHTML = `*Passe o cursor do mouse sobre o card para ler*`;
});
document.querySelector(".python").addEventListener("mouseout", () => {
    changeDescription.innerHTML = `*Passe o cursor do mouse sobre o card para ler*`;
});


let changeDescriptionNext = document.querySelector(".tech_description_next");

document.querySelector(".php").addEventListener("mouseover", () => {
    changeDescriptionNext.innerHTML = `PHP é uma linguagem de programação voltada para o desenvolvimento de aplicações para a web e para criar sites, favorecendo a conexão entre os servidores e a interface do usuário.`;
});

document.querySelector(".react").addEventListener("mouseover", () => {
    changeDescriptionNext.innerHTML = `ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.`;
});

document.querySelector(".node").addEventListener("mouseover", () => {
    changeDescriptionNext.innerHTML = `O Node.js. é uma compilação empacotada do mecanismo JavaScript V8 do Google, a camada de abstração da plataforma libuv e uma biblioteca principal, que é basicamente escrita em JavaScript.`;
});


document.querySelector(".php").addEventListener("mouseout", () => {
    changeDescriptionNext.innerHTML = `*Passe o cursor do mouse sobre o card para ler*`;
});
document.querySelector(".react").addEventListener("mouseout", () => {
    changeDescriptionNext.innerHTML = `*Passe o cursor do mouse sobre o card para ler*`;
});
document.querySelector(".node").addEventListener("mouseout", () => {
    changeDescriptionNext.innerHTML = `*Passe o cursor do mouse sobre o card para ler*`;
});


window.onload = function(){
    let lines = document.querySelectorAll('.mm_line');
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menus").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'none';
            for(let i in lines) {
                lines[i].classList.remove("activeX");
            }
        } else {
            document.querySelector(".menus").style.display = 'flex';
            for(let i in lines) {
                lines[i].classList.add("activeX");
            }
        }
    });
    document.querySelector(".active").addEventListener("click", function(){
        if(document.querySelector(".menus").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'none';
            for(let i in lines) {
                lines[i].classList.remove("activeX");
            }
        } else if(document.querySelector(".menuMobile").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'flex';
            for(let i in lines) {
                lines[i].classList.add("activeX");
            }
        }
    });
    document.querySelector(".active2").addEventListener("click", function(){
        if(document.querySelector(".menus").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'none';
            for(let i in lines) {
                lines[i].classList.remove("activeX");
            }
        } else if(document.querySelector(".menuMobile").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'flex';
            for(let i in lines) {
                lines[i].classList.add("activeX");
            }
        }
    });
    document.querySelector(".active3").addEventListener("click", function(){
        if(document.querySelector(".menus").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'none';
            for(let i in lines) {
                lines[i].classList.remove("activeX");
            }
        } else if(document.querySelector(".menuMobile").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'flex';
            for(let i in lines) {
                lines[i].classList.add("activeX");
            }
        }
    });
};