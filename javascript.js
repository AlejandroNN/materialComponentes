class componenteSpan extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const elementoSpan = document.createElement("span");
        shadowRoot.innerHTML = `
            <style>
                .componentespan {
                    background-color: #e0f7fa;
                    color: #00796b;
                    border: 1px solid #00796b;
                    border-radius: 4px;
                    padding: 5px 10px;
                    font-weight: bold;
                    display: inline-block;
                    margin: 5px 0;
                }
            </style>
        `;
        elementoSpan.className = "componentespan";
        elementoSpan.textContent = this.getAttribute('text') || 'Ayuda';
        shadowRoot.appendChild(elementoSpan);
    }
}
customElements.define("comp-span", componenteSpan);

class componenteBoton extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const elementoBoton = document.createElement("button");
        const icono = document.createElement("span");
        icono.className = "icon";
        icono.textContent="🔔";
        shadowRoot.innerHTML = `
        <style>
            button {
                background-color: blue; 
                color: white; 
                border: none; 
                border-radius: 4px; 
                padding: 10px 15px; 
                font-size: 16px; 
                display: flex; 
                align-items: center; 
                cursor: pointer; 
            }
            button:hover {
                    background-color: green;
            }
            .icon {
                margin-right: 8px; 
            }
        </style>
        `;
        elementoBoton.textContent = "Notificaciones";
        elementoBoton.prepend(icono);
        shadowRoot.appendChild(elementoBoton);
    }
}
customElements.define("comp-boton", componenteBoton);

class componenteCajaTextoEncriptada extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const contenedor = document.createElement("div");
        const inputClave = document.createElement("input");
        const botonEnviar = document.createElement("button");

        inputClave.type = "password";
        inputClave.placeholder = "Ingresa tu clave";
        inputClave.className = "input-clave";

        botonEnviar.textContent = "Enviar";
        botonEnviar.className = "btn-enviar";
        botonEnviar.addEventListener('click', () => this.enviarClave(inputClave.value));

        shadowRoot.innerHTML = `
            <style>
                div {
                    display: flex;
                    flex-direction: column;
                    width: 200px;
                }
                .input-clave {
                    padding: 10px;
                    margin-bottom: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                .btn-enviar {
                    padding: 10px;
                    background-color: blue;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .btn-enviar:hover {
                    background-color: green;
                }
            </style>
        `;

        contenedor.appendChild(inputClave);
        contenedor.appendChild(botonEnviar);
        shadowRoot.appendChild(contenedor);
    }

    enviarClave(clave) {
        const claveEncriptada = CryptoJS.AES.encrypt(clave, 'mi-secreto').toString();
        console.log("Clave encriptada:", claveEncriptada);
    }
}

customElements.define("comp-textoencriptado", componenteCajaTextoEncriptada);

class componenteCuponDescuento extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const contenedor = document.createElement("div");
        const inputCupon = document.createElement("input");
        const botonAplicar = document.createElement("button");

        inputCupon.type = "text";
        inputCupon.placeholder = "Ingresa tu cupón";
        inputCupon.className = "input-cupon";

        botonAplicar.textContent = "Aplicar";
        botonAplicar.className = "btn-aplicar";
        botonAplicar.addEventListener('click', () => this.aplicarCupon(inputCupon.value));

        shadowRoot.innerHTML = `
            <style>
                div {
                    display: flex;
                    flex-direction: column;
                    width: 200px;
                }
                .input-cupon {
                    padding: 10px;
                    margin-bottom: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                .btn-aplicar {
                    padding: 10px;
                    background-color: blue;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .btn-aplicar:hover {
                    background-color: green;
                }
            </style>
        `;

        contenedor.appendChild(inputCupon);
        contenedor.appendChild(botonAplicar);
        shadowRoot.appendChild(contenedor);
    }

    aplicarCupon(cupon) {
        console.log("Cupón aplicado:", cupon);

        if (cupon) {
            alert(`El cupón "${cupon}" ha sido aplicado.`);
        } else {
            alert("Por favor, ingresa un código de cupón.");
        }
    }
}
customElements.define("comp-cupondescuento", componenteCuponDescuento);

