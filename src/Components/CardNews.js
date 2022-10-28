class CardNews extends HTMLHtmlElement{

    constructor(){
    super();

    const shadow = this.attachShadow({mode:'open'});
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
   
    }

    build(){
      const componentRoot = document.createElement("div");
      componentRoot.setAttribute("class","card");     

      const cardLeft = document.createElement("div");
      cardLeft.setAttribute("class", "card__left");
      const autor = document.createElement("span");
      const linkTitle = document.createElement("a");
      const newsContent = document.createElement("p");
      cardLeft.appendChild(autor,linkTitle,newsContent);

      const cardRight = document.createElement("div");
      cardLeft.setAttribute("class", "card__right");
      const newsImage = document.createElement("img");
      cardRight.appendChild(newsImage);

      componentRoot.appendChild(cardLeft);
      componentRoot.appendChild(cardRight);

      return componentRoot;
    }

    style(){}

}