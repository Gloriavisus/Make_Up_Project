'use strict';
function Footer(parentElement){
    this.parent = parentElement;
    this.element = null;
}

Footer.prototype.generate = function(){
    this.element = `<footer>
                        <ul>
                            <li>Aviso legal</li>
                            <li>Provacidad</li>
                            <li>Contactar</li>
                        </ul>
                    </footer>`;
    this.render();
}

Footer.prototype.render = function(){
    this.parent.innerHTML = this.element;
}
            
