class NavBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
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
                display: flex;
                width: 100%;
                background-color: #00B8A9;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                align-items: center;
                justify-content: center;
                position: fixed;
                top: 0;
            }

            h2 {
                padding: 16px;
                color: #F8F3D4;
            }
        </style>
        <h2>Foodpedia</h2>`;
    }
}

customElements.define("nav-bar", NavBar);