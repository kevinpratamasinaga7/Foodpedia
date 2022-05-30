class FooterBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
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
                bottom: 0;
            }
            
            h3 {
                padding: 16px;
                color: #F8F3D4;
            }
        </style>
        <h3>Foodpedia &copy; 2022 by Kevin Pratama Sinaga</h3>`;
    }
}

customElements.define("footer-bar", FooterBar);