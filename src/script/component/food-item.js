class FoodItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set food(food) {
        this._food = food;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }

               :host {
                   display: block;
                   margin-top: 25px;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
                   background-color: #F8F3D4;
               }
              
               .fan-art-food {
                   width: 100%;
                   max-height: 500px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .food-info {
                   padding: 24px;
               }
              
               .food-info > h2 {
                   font-weight: lighter;
                   color: #00B8A9;
               }
              
               .food-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   color: #F6416C;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }

           </style>
           <img class="fan-art-food" src="${this._food.strMealThumb}" alt="Fan Art">
           <div class="food-info">
               <h2>${this._food.strMeal}</h2>
               <p>Food Category: ${this._food.strCategory}</p>
               <p>Origin of Food: ${this._food.strArea}</p>
               <p>Food Tag: ${this._food.strTags}</p>
           </div>`;
    }
}

customElements.define("food-item", FoodItem);