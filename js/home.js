const body = document.querySelector("body");

const aButtonTop = document.createElement("a");
aButtonTop.innerHTML = "&#9650;";
aButtonTop.className = "link-top";
aButtonTop.setAttribute("href", "#");
body.appendChild(aButtonTop);

const switchButtonTop = document.createElement("div");
switchButtonTop.className = "theme-switch-wrapper";
body.appendChild(switchButtonTop);

const switchLabel = document.createElement("label");
switchLabel.className = "theme-switch";
switchLabel.setAttribute("for", "checkbox");
switchButtonTop.appendChild(switchLabel);

const switchInput = document.createElement("input");
switchInput.setAttribute("type", "checkbox");
switchInput.setAttribute("id", "checkbox");
switchLabel.appendChild(switchInput);

const switchDovToggler = document.createElement("div");
switchDovToggler.className = "slider round";
switchLabel.appendChild(switchDovToggler);

const switchEm = document.createElement("em");
switchEm.innerHTML = "Dark Mode!";
switchEm.className = "em";
switchButtonTop.appendChild(switchEm);

// Switch change
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

const hero_area = document.createElement("div");
hero_area.className = "hero_area";
body.appendChild(hero_area);

const bg_box = document.createElement("div");
bg_box.className = "bg-box";
hero_area.appendChild(bg_box);

const headerSec = document.createElement("header");
headerSec.className = "header_section";
hero_area.appendChild(headerSec);

const divContainer = document.createElement("div");
divContainer.className = "container";
headerSec.appendChild(divContainer);

const navBar = document.createElement("nav");
navBar.className = "navbar navbar-expand-lg custom_nav-container ";
divContainer.appendChild(navBar);

const imgLogoNav = document.createElement("img");
imgLogoNav.setAttribute("src", "images/f1-fonts-main.png");
imgLogoNav.setAttribute("style", "width: 13%");
navBar.appendChild(imgLogoNav);

const buttonLogo = document.createElement("button");
buttonLogo.className = "navbar-toggler";
navBar.appendChild(buttonLogo);
buttonLogo.setAttribute("type", "button");
buttonLogo.setAttribute("data-toggle", "collapse");
buttonLogo.setAttribute("data-target", "#navbarSupportedContent");
buttonLogo.setAttribute("aria-controls", "navbarSupportedContent");
buttonLogo.setAttribute("aria-expanded", "false");
buttonLogo.setAttribute("aria-label", "Toggle navigation");

const spanButton = document.createElement("span");
spanButton.className = "";
buttonLogo.appendChild(spanButton);

const divCollapse = document.createElement("div");
divCollapse.className = "collapse navbar-collapse";
divCollapse.setAttribute("id", "navbarSupportedContent");
navBar.appendChild(divCollapse);

const ulNavBar = document.createElement("ul");
ulNavBar.className = "navbar-nav  mx-auto ";
divCollapse.appendChild(ulNavBar);

const liNavBar = document.createElement("li");
liNavBar.className = "nav-item active";
ulNavBar.appendChild(liNavBar);

const aLi = document.createElement("a");
aLi.className = "nav-link";
aLi.innerHTML = "Home ";
aLi.setAttribute("href", "index.html");
liNavBar.appendChild(aLi);

const spanA = document.createElement("span");
spanA.className = "sr-only";
spanA.innerHTML = "(current)";
aLi.appendChild(spanA);

// Second
const liNavBar2 = document.createElement("li");
liNavBar2.className = "nav-item";
ulNavBar.appendChild(liNavBar2);

const aLi2 = document.createElement("a");
aLi2.className = "nav-link";
aLi2.innerHTML = "Equipes";
aLi2.setAttribute("id", "navEquipes");
aLi2.setAttribute("href", "#equipes");
liNavBar2.appendChild(aLi2);

// Third
const liNavBar3 = document.createElement("li");
liNavBar3.className = "nav-item";
ulNavBar.appendChild(liNavBar3);

const aLi3 = document.createElement("a");
aLi3.className = "nav-link";
aLi3.innerHTML = "About";
aLi3.setAttribute("id", "navAbout");
aLi3.setAttribute("href", "#about");
liNavBar3.appendChild(aLi3);

// Four
const liNavBar4 = document.createElement("li");
liNavBar4.className = "nav-item";
ulNavBar.appendChild(liNavBar4);

const aLi4 = document.createElement("a");
aLi4.className = "nav-link";
aLi4.innerHTML = "News";
aLi4.setAttribute("id", "navNews");
aLi4.setAttribute("href", "#news");
liNavBar4.appendChild(aLi4);

// Five
const liNavBar5 = document.createElement("li");
liNavBar5.className = "nav-item";
ulNavBar.appendChild(liNavBar5);

const aLi5 = document.createElement("a");
aLi5.className = "nav-link";
aLi5.innerHTML = "Ao vivo";
aLi5.setAttribute("id", "navLive");
aLi5.setAttribute("href", "#live");
liNavBar5.appendChild(aLi5);

var equipesHide = document.querySelector("#navEquipes");
var aboutHide = document.querySelector("#navAbout");
var newsHide = document.querySelector("#navNews");
var liveHide = document.querySelector("#navLive");

equipesHide.addEventListener("click", function () {
  var sectionNews = document.querySelector("#news");
  var sectionAbout = document.querySelector("#about");
  var sectionEquipes = document.querySelector("#equipes");
  var sectionLive = document.querySelector("#live");

  if (sectionEquipes.style.display === "none") {
    sectionEquipes.style.display = "block";
    sectionAbout.style.display = "none";
    sectionNews.style.display = "none";
    sectionLive.style.display = "none";
  }
});

aboutHide.addEventListener("click", function () {
  var sectionNews = document.querySelector("#news");
  var sectionAbout = document.querySelector("#about");
  var sectionEquipes = document.querySelector("#equipes");
  var sectionLive = document.querySelector("#live");

  if (sectionAbout.style.display === "none") {
    sectionAbout.style.display = "block";
    sectionEquipes.style.display = "none";
    sectionNews.style.display = "none";
    sectionLive.style.display = "none";
  }
});

newsHide.addEventListener("click", function () {
  var sectionNews = document.querySelector("#news");
  var sectionAbout = document.querySelector("#about");
  var sectionEquipes = document.querySelector("#equipes");
  var sectionLive = document.querySelector("#live");

  if (sectionNews.style.display === "none") {
    sectionNews.style.display = "block";
    sectionAbout.style.display = "none";
    sectionEquipes.style.display = "none";
    sectionLive.style.display = "none";
  }
});

liveHide.addEventListener("click", function () {
  var sectionNews = document.querySelector("#news");
  var sectionAbout = document.querySelector("#about");
  var sectionEquipes = document.querySelector("#equipes");
  var sectionLive = document.querySelector("#live");

  if (sectionLive.style.display === "none") {
    sectionLive.style.display = "block";
    sectionAbout.style.display = "none";
    sectionEquipes.style.display = "none";
    sectionNews.style.display = "none";
  }
});

firstPageSection();
secondPageSection();
thirdPageSection();
fourPageSection();
iframe();

// First Page Section /////////////////////////////////////////////////
function firstPageSection() {
  const imgBackground = document.createElement("img");
  bg_box.appendChild(imgBackground);
  imgBackground.setAttribute("src", "images/w13_1.jpg");

  const sectionOne = document.createElement("section");
  sectionOne.className = "slider_section ";
  hero_area.appendChild(sectionOne);

  const divCarouselInner = document.createElement("div");
  divCarouselInner.className = "carousel-inner";
  sectionOne.appendChild(divCarouselInner);

  const divItem2 = document.createElement("div");
  divItem2.className = "carousel-item active";
  divCarouselInner.appendChild(divItem2);

  const divContainerItem2 = document.createElement("div");
  divContainerItem2.className = "container ";
  divItem2.appendChild(divContainerItem2);

  const divRow2 = document.createElement("div");
  divRow2.className = "row";
  divContainerItem2.appendChild(divRow2);

  const divCol_md2 = document.createElement("div");
  divCol_md2.className = "col-md-4 col-lg-7";
  divRow2.appendChild(divCol_md2);

  const divDetail_box2 = document.createElement("div");
  divDetail_box2.classList.add("detail-box");
  divCol_md2.appendChild(divDetail_box2);

  const h1Slider2 = document.createElement("h1");
  h1Slider2.innerHTML = "Assita ao vivo";
  divDetail_box2.appendChild(h1Slider2);

  const pSlider2 = document.createElement("p");
  pSlider2.innerHTML =
    "Voc?? pode assistir ao vivo a transmiss??o oficial ou com a narra????o da band. Acompanhe todos os eventos da temporada da formula 1 2022.";
  divDetail_box2.appendChild(pSlider2);

  const divBtn_box2 = document.createElement("div");
  divDetail_box2.classList.add("btn-box");
  divDetail_box2.appendChild(divBtn_box2);

  const aSlider2 = document.createElement("a");
  aSlider2.classList.add("btn1");
  aSlider2.setAttribute("href", "https://www.formula1.com");
  aSlider2.innerHTML = "Saiba mais";
  divBtn_box2.appendChild(aSlider2);
}

// Second Page Section /////////////////////////////////////////////////
function secondPageSection() {
  const sectionTwo = document.createElement("section");
  sectionTwo.setAttribute("style", "display: none;");
  sectionTwo.setAttribute("id", "equipes");
  sectionTwo.className = "equipes_section layout_padding-bottom";
  body.appendChild(sectionTwo);

  const divContainerTwo = document.createElement("div");
  divContainerTwo.className = "container ";
  sectionTwo.appendChild(divContainerTwo);

  const divHeadingTitleTwo = document.createElement("div");
  divHeadingTitleTwo.className = "heading_container heading_center";
  divContainerTwo.appendChild(divHeadingTitleTwo);

  const h2TitleTwo = document.createElement("h2");
  divHeadingTitleTwo.appendChild(h2TitleTwo);
  h2TitleTwo.className = "h2-title";
  h2TitleTwo.innerHTML = "Algumas Equipes";

  const divFiltersTwo = document.createElement("div");
  divFiltersTwo.className = "filters-content";
  divContainerTwo.appendChild(divFiltersTwo);

  const divRowTwo = document.createElement("div");
  divRowTwo.className = "row grid";
  divFiltersTwo.appendChild(divRowTwo);

  const divColtwo = document.createElement("div");
  divColtwo.className = "col-sm-6 col-lg-4 all equipe";
  divRowTwo.appendChild(divColtwo);

  const divBoxTwo = document.createElement("div");
  divBoxTwo.className = "box";
  divColtwo.appendChild(divBoxTwo);

  const divCardTwo = document.createElement("div");
  divBoxTwo.appendChild(divCardTwo);

  const divImgBoxTwo = document.createElement("div");
  divImgBoxTwo.className = "img-box";
  divCardTwo.appendChild(divImgBoxTwo);

  const imgCard1 = document.createElement("img");
  divImgBoxTwo.appendChild(imgCard1);
  imgCard1.setAttribute("src", "images/amg.png");

  const divDetailBoxTwo = document.createElement("div");
  divDetailBoxTwo.className = "detail-box";
  divCardTwo.appendChild(divDetailBoxTwo);

  const h5Title1 = document.createElement("h5");
  h5Title1.innerHTML = "Mercedes AMG Petronas";
  divDetailBoxTwo.appendChild(h5Title1);

  const pTitle1 = document.createElement("p");
  pTitle1.innerHTML =
    "A Mercedes-Benz, por meio da Mercedes-Benz Grand Prix Limited, est?? atualmente envolvida na F??rmula 1 como equipe e construtor sob o nome Mercedes-AMG Petronas Formula One Team. A equipe est?? sediada em Brackley, Northamptonshire, Reino Unido e compete sob uma licen??a alem??.";
  divDetailBoxTwo.appendChild(pTitle1);

  const divOptionsTwo = document.createElement("div");
  divOptionsTwo.className = "options";
  divDetailBoxTwo.appendChild(divOptionsTwo);

  // Second
  const divCol2two = document.createElement("div");
  divCol2two.className = "col-sm-6 col-lg-4 all equipe";
  divRowTwo.appendChild(divCol2two);

  const divBox2Two = document.createElement("div");
  divBox2Two.className = "box";
  divCol2two.appendChild(divBox2Two);

  const divCard2Two = document.createElement("div");
  divBox2Two.appendChild(divCard2Two);

  const divImgBox2Two = document.createElement("div");
  divImgBox2Two.className = "img-box";
  divCard2Two.appendChild(divImgBox2Two);

  const img2Card1 = document.createElement("img");
  divImgBox2Two.appendChild(img2Card1);
  img2Card1.setAttribute("src", "images/ferrari.png");

  const divDetailBox2Two = document.createElement("div");
  divDetailBox2Two.className = "detail-box";
  divCard2Two.appendChild(divDetailBox2Two);

  const h5Title2 = document.createElement("h5");
  h5Title2.innerHTML = "Scuderia Ferrari ";
  divDetailBox2Two.appendChild(h5Title2);

  const pTitle2 = document.createElement("p");
  pTitle2.innerHTML =
    "Scuderia Ferrari ?? uma equipe de automobilismo da montadora italiana Ferrari que compete no campeonato da F??rmula 1. ?? a equipe mais antiga em atividade na categoria. A Ferrari ?? a equipe mais vitoriosa e bem-sucedida da hist??ria da F1.";
  divDetailBox2Two.appendChild(pTitle2);

  const divOptions2Two = document.createElement("div");
  divOptions2Two.className = "options";
  divDetailBox2Two.appendChild(divOptions2Two);

  // Third
  const divCol3two = document.createElement("div");
  divCol3two.className = "col-sm-6 col-lg-4 all equipe";
  divRowTwo.appendChild(divCol3two);

  const divBox3Two = document.createElement("div");
  divBox3Two.className = "box";
  divCol3two.appendChild(divBox3Two);

  const divCard3Two = document.createElement("div");
  divBox3Two.appendChild(divCard3Two);

  const divImgBox3Two = document.createElement("div");
  divImgBox3Two.className = "img-box";
  divCard3Two.appendChild(divImgBox3Two);

  const img3Card1 = document.createElement("img");
  divImgBox3Two.appendChild(img3Card1);
  img3Card1.setAttribute("src", "images/redbull.png");

  const divDetailBox3Two = document.createElement("div");
  divDetailBox3Two.className = "detail-box";
  divCard3Two.appendChild(divDetailBox3Two);

  const h5Title3 = document.createElement("h5");
  h5Title3.innerHTML = "Red Bull Racing";
  divDetailBox3Two.appendChild(h5Title3);

  const pTitle3 = document.createElement("p");
  pTitle3.innerHTML =
    "A Red Bull Racing, popularmente conhecida como Red Bull ou pela sua abrevia????o RBR e atualmente competindo como Oracle Red Bull Racing, ?? uma equipe de automobilismo baseada no Reino Unido que compete no Campeonato Mundial de F??rmula 1 sob uma licen??a austr??aca.";
  divDetailBox3Two.appendChild(pTitle3);

  const divOptions3Two = document.createElement("div");
  divOptions3Two.className = "options";
  divDetailBox3Two.appendChild(divOptions3Two);

  // Four
  const divCol4two = document.createElement("div");
  divCol4two.className = "col-sm-6 col-lg-4 all equipe";
  divRowTwo.appendChild(divCol4two);

  const divBox4Two = document.createElement("div");
  divBox4Two.className = "box";
  divCol4two.appendChild(divBox4Two);

  const divCard4Two = document.createElement("div");
  divBox4Two.appendChild(divCard4Two);

  const divImgBox4Two = document.createElement("div");
  divImgBox4Two.className = "img-box";
  divCard4Two.appendChild(divImgBox4Two);

  const img4Card1 = document.createElement("img");
  divImgBox4Two.appendChild(img4Card1);
  img4Card1.setAttribute("src", "images/mclaren.png");

  const divDetailBox4Two = document.createElement("div");
  divDetailBox4Two.className = "detail-box";
  divCard4Two.appendChild(divDetailBox4Two);

  const h5Title4 = document.createElement("h5");
  h5Title4.innerHTML = "McLaren";
  divDetailBox4Two.appendChild(h5Title4);

  const pTitle4 = document.createElement("p");
  pTitle4.innerHTML =
    "A McLaren Racing Limited, competindo como McLaren F1 Team, ?? uma equipe de automobilismo, mais conhecida por competir na F??rmula 1, com sede na cidade de Woking, Reino Unido.";
  divDetailBox4Two.appendChild(pTitle4);

  const divOptions4Two = document.createElement("div");
  divOptions4Two.className = "options";
  divDetailBox4Two.appendChild(divOptions4Two);

  // Five
  const divCol5two = document.createElement("div");
  divCol5two.className = "col-sm-6 col-lg-4 all equipe";
  divRowTwo.appendChild(divCol5two);

  const divBox5Two = document.createElement("div");
  divBox5Two.className = "box";
  divCol5two.appendChild(divBox5Two);

  const divCard5Two = document.createElement("div");
  divBox5Two.appendChild(divCard5Two);

  const divImgBox5Two = document.createElement("div");
  divImgBox5Two.className = "img-box";
  divCard5Two.appendChild(divImgBox5Two);

  const img5Card1 = document.createElement("img");
  divImgBox5Two.appendChild(img5Card1);
  img5Card1.setAttribute("src", "images/alpine.png");

  const divDetailBox5Two = document.createElement("div");
  divDetailBox5Two.className = "detail-box";
  divCard5Two.appendChild(divDetailBox5Two);

  const h5Title5 = document.createElement("h5");
  h5Title5.innerHTML = "Alpine F1 Team";
  divDetailBox5Two.appendChild(h5Title5);

  const pTitle5 = document.createElement("p");
  pTitle5.innerHTML =
    "Alpine e atualmente competindo como BWT Alpine F1 Team, ?? uma equipe e construtor de F??rmula 1 com sede em Enstone, Oxfordshire, no Reino Unido, mas que compete com uma licen??a francesa.";
  divDetailBox5Two.appendChild(pTitle5);

  const divOptions5Two = document.createElement("div");
  divOptions5Two.className = "options";
  divDetailBox5Two.appendChild(divOptions5Two);

  // Six
  const divCol6two = document.createElement("div");
  divCol6two.className = "col-sm-6 col-lg-4 all equipe";
  divRowTwo.appendChild(divCol6two);

  const divBox6Two = document.createElement("div");
  divBox6Two.className = "box";
  divCol6two.appendChild(divBox6Two);

  const divCard6Two = document.createElement("div");
  divBox6Two.appendChild(divCard6Two);

  const divImgBox6Two = document.createElement("div");
  divImgBox6Two.className = "img-box";
  divCard6Two.appendChild(divImgBox6Two);

  const img6Card1 = document.createElement("img");
  divImgBox6Two.appendChild(img6Card1);
  img6Card1.setAttribute("src", "images/astonMartin.png");

  const divDetailBox6Two = document.createElement("div");
  divDetailBox6Two.className = "detail-box";
  divCard6Two.appendChild(divDetailBox6Two);

  const h5Title6 = document.createElement("h5");
  h5Title6.innerHTML = "Aston Martin";
  divDetailBox6Two.appendChild(h5Title6);

  const pTitle6 = document.createElement("p");
  pTitle6.innerHTML =
    "A Aston Martin est?? atualmente envolvida na F??rmula 1 como equipe e construtor sob o nome Aston Martin Aramco Cognizant Formula One Team. A equipe est?? sediada em Silverstone, Reino Unido.";
  divDetailBox6Two.appendChild(pTitle6);

  const divOptions6Two = document.createElement("div");
  divOptions6Two.className = "options";
  divDetailBox6Two.appendChild(divOptions6Two);
}

// Third ////////////////////////////////////////////////////////////////
function thirdPageSection() {
  const sectionThird = document.createElement("section");
  sectionThird.setAttribute("id", "about");
  sectionThird.setAttribute("style", "display: none;");
  sectionThird.className = "client_section layout_padding-bottom";
  body.appendChild(sectionThird);

  const divContainerThird = document.createElement("div");
  divContainerThird.className = "container";
  sectionThird.appendChild(divContainerThird);

  const divHeadingThird = document.createElement("div");
  divHeadingThird.className =
    "heading_container heading_center psudo_white_primary mb_45";
  divContainerThird.appendChild(divHeadingThird);

  const h2Third = document.createElement("h2");
  h2Third.className = "h2-title";
  h2Third.innerHTML = "Oque os pilotos est??o comentando?";
  divHeadingThird.appendChild(h2Third);

  const divCarouselThird = document.createElement("div");
  divCarouselThird.className = "carousel-wrap row ";
  divContainerThird.appendChild(divCarouselThird);

  const divOwlThird = document.createElement("div");
  divOwlThird.className = "client_owl-carousel";
  divCarouselThird.appendChild(divOwlThird);

  //First Item
  const divItemThird = document.createElement("div");
  divItemThird.className = "item";
  divOwlThird.appendChild(divItemThird);

  const divBoxThird = document.createElement("div");
  divBoxThird.className = "box";
  divItemThird.appendChild(divBoxThird);

  const divDetailBoxThird = document.createElement("div");
  divDetailBoxThird.className = "detail-box";
  divBoxThird.appendChild(divDetailBoxThird);

  const pThird = document.createElement("p");
  pThird.innerHTML =
    "Voc?? precisa analisar toda situa????o, e quando fui liberado pelos mec??nicos, ele estava bem longe. O problema foi o mec??nico da McLaren com um macaco que entrou na minha frente, tive de frear e n??o acertei minha sa??da dos pits. ?? culpa minha ou da minha equipe? N??o";
  divDetailBoxThird.appendChild(pThird);

  const h6Third = document.createElement("h6");
  h6Third.innerHTML = "Carlos Sainz";
  divDetailBoxThird.appendChild(h6Third);

  const p2Third = document.createElement("p");
  p2Third.innerHTML =
    "Sobre sua puni????o de 5 segundos por unsafe realase na ultima corrida";
  divDetailBoxThird.appendChild(p2Third);

  const divImgThird = document.createElement("div");
  divImgThird.className = "img-box";
  divDetailBoxThird.appendChild(divImgThird);

  const ImgThird = document.createElement("img");
  ImgThird.setAttribute("src", "images/client1.jpg");
  ImgThird.className = "box-img";
  divImgThird.appendChild(ImgThird);

  //Second Item
  const divItem2Third = document.createElement("div");
  divItem2Third.className = "item";
  divOwlThird.appendChild(divItem2Third);

  const divBox2Third = document.createElement("div");
  divBox2Third.className = "box";
  divItem2Third.appendChild(divBox2Third);

  const divDetailBox2Third = document.createElement("div");
  divDetailBox2Third.className = "detail-box";
  divBox2Third.appendChild(divDetailBox2Third);

  const p3Third = document.createElement("p");
  p3Third.innerHTML =
    "Hoje foi bastante melhor do que eu esperava. Penso que o carro estava muito bom, mas tivemos azar com o safety-car e com o VSC, mas penso que se n??o fossem esses obst??culos t??nhamos tido um dia muito positivo e t??nhamos terminado ?? frente dos Alpine";
  divDetailBox2Third.appendChild(p3Third);

  const h62Third = document.createElement("h6");
  h62Third.innerHTML = "Lando Norris";
  divDetailBox2Third.appendChild(h62Third);

  const p4Third = document.createElement("p");
  p4Third.innerHTML = "Sobre seu desempenho na corrida de Zandvoort Holanda";
  divDetailBox2Third.appendChild(p4Third);

  const divImg2Third = document.createElement("div");
  divImg2Third.className = "img-box";
  divDetailBox2Third.appendChild(divImg2Third);

  const Img2Third = document.createElement("img");
  Img2Third.setAttribute("src", "images/client2.jpg");
  Img2Third.className = "box-img";
  divImg2Third.appendChild(Img2Third);

  //Third Item
  const divItem3Third = document.createElement("div");
  divItem3Third.className = "item";
  divOwlThird.appendChild(divItem3Third);

  const divBox3Third = document.createElement("div");
  divBox3Third.className = "box";
  divItem3Third.appendChild(divBox3Third);

  const divDetailBox3Third = document.createElement("div");
  divDetailBox3Third.className = "detail-box";
  divBox3Third.appendChild(divDetailBox3Third);

  const p5Third = document.createElement("p");
  p5Third.innerHTML =
    "Eu estava no limite das minhas emo????es e pe??o minhas desculpas ?? equipe porque eu nem sequer me lembro do que eu disse. Perdi a linha por um segundo.... Fomos mais r??pidos em muitos aspectos...";
  divDetailBox3Third.appendChild(p5Third);

  const h63Third = document.createElement("h6");
  h63Third.innerHTML = "Lewis Hamilton";
  divDetailBox3Third.appendChild(h63Third);

  const p6Third = document.createElement("p");
  p6Third.innerHTML =
    "Sobre seu radio de frusta??ao com seus estrategistas durante o ultimo gp.";
  divDetailBox3Third.appendChild(p6Third);

  const divImg3Third = document.createElement("div");
  divImg3Third.className = "img-box";
  divDetailBox3Third.appendChild(divImg3Third);

  const Img3Third = document.createElement("img");
  Img3Third.setAttribute("src", "images/client3.jpg");
  Img3Third.className = "box-img";
  divImg3Third.appendChild(Img3Third);

  //Four Item
  const divItem4Third = document.createElement("div");
  divItem4Third.className = "item";
  divOwlThird.appendChild(divItem4Third);

  const divBox4Third = document.createElement("div");
  divBox4Third.className = "box";
  divItem4Third.appendChild(divBox4Third);

  const divDetailBox4Third = document.createElement("div");
  divDetailBox4Third.className = "detail-box";
  divBox4Third.appendChild(divDetailBox4Third);

  const p7Third = document.createElement("p");
  p7Third.innerHTML =
    "Red Bull exalta 'pneus certos' para Verstappen na Holanda: 'Funcionou lindamente'";
  divDetailBox4Third.appendChild(p7Third);

  const h64Third = document.createElement("h6");
  h64Third.innerHTML = "Max Verstappen";
  divDetailBox4Third.appendChild(h64Third);

  const p8Third = document.createElement("p");
  p8Third.innerHTML =
    "Sobre seu desempenho no GP da Holanda seu pa??s de origem.";
  divDetailBox4Third.appendChild(p8Third);

  const divImg4Third = document.createElement("div");
  divImg4Third.className = "img-box";
  divDetailBox4Third.appendChild(divImg4Third);

  const Img4Third = document.createElement("img");
  Img4Third.setAttribute("src", "images/client4.jpg");
  Img4Third.className = "box-img";
  divImg4Third.appendChild(Img4Third);
}
// Four ////////////////////////////////////////////////////////////////
function fourPageSection() {
  const sectionFour = document.createElement("section");
  sectionFour.setAttribute("id", "news");
  sectionFour.setAttribute("style", "display: none;");
  sectionFour.className = "book_section layout_padding";
  body.appendChild(sectionFour);

  const divContainerFour = document.createElement("div");
  divContainerFour.className = "container";
  sectionFour.appendChild(divContainerFour);

  const divHeadingContainerFour = document.createElement("div");
  divHeadingContainerFour.className = "heading_container";
  divContainerFour.appendChild(divHeadingContainerFour);

  const h2TitleFour = document.createElement("h2");
  h2TitleFour.className = "h2-title";
  h2TitleFour.innerHTML = "Deseja receber email do nosso site?";
  divHeadingContainerFour.appendChild(h2TitleFour);

  const divRowFour = document.createElement("div");
  divRowFour.className = "row";
  divContainerFour.appendChild(divRowFour);

  const divColFour = document.createElement("div");
  divColFour.className = "col-md-6";
  divRowFour.appendChild(divColFour);

  const divFormContainerFour = document.createElement("div");
  divFormContainerFour.className = "form_container";
  divColFour.appendChild(divFormContainerFour);

  const formFour = document.createElement("form");
  formFour.setAttribute("action", "");
  divFormContainerFour.appendChild(formFour);

  const div1Four = document.createElement("div");
  formFour.appendChild(div1Four);

  const inputNameFour = document.createElement("input");
  inputNameFour.setAttribute("type", "text");
  inputNameFour.setAttribute("name", "formEmail");
  inputNameFour.className = "form-control";
  inputNameFour.setAttribute("placeholder", "Seu Nome");
  div1Four.appendChild(inputNameFour);

  const div2Four = document.createElement("div");
  formFour.appendChild(div2Four);

  const inputTelefoneFour = document.createElement("input");
  inputTelefoneFour.setAttribute("type", "text");
  inputTelefoneFour.setAttribute("name", "formEmail");
  inputTelefoneFour.className = "form-control";
  inputTelefoneFour.setAttribute("placeholder", "Telefone");
  div2Four.appendChild(inputTelefoneFour);

  const div3Four = document.createElement("div");
  formFour.appendChild(div3Four);

  const inputEmailFour = document.createElement("input");
  inputEmailFour.setAttribute("type", "email");
  inputEmailFour.setAttribute("name", "formEmail");
  inputEmailFour.className = "form-control";
  inputEmailFour.setAttribute("placeholder", "Email");
  div3Four.appendChild(inputEmailFour);

  const divButtonFour = document.createElement("div");
  divButtonFour.setAttribute("id", "buttonDiv");
  divButtonFour.className = "btn_box";
  formFour.appendChild(divButtonFour);

  const buttonFour = document.createElement("button");
  buttonFour.innerHTML = "Enviar";
  divButtonFour.appendChild(buttonFour);
}
function iframe() {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("src", "//f1livegp.me/f1/live.php");
  iframe.setAttribute("style", "display: none;");
  iframe.setAttribute("id", "live");
  iframe.setAttribute("name", "frame");
  iframe.setAttribute("scrolling", "no");
  iframe.setAttribute("frameborder", "no");
  iframe.setAttribute("allow", "fullscreen");
  iframe.setAttribute("align", "center");
  iframe.setAttribute("height", "450px");
  iframe.setAttribute("width", "100%");
  body.appendChild(iframe);
}
