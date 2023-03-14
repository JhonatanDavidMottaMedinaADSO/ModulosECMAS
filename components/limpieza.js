import comparacion from "./comparacion.js";

export default{

    name: document.querySelector("#close"),

    mibtn(){
        for(var i = 0, row; row = comparacion.name.rows[i]; i++){
            if (row == null) {
                this.name.style.display = "none"   
            }
            else{
                this.name.style.display = "block"
                this.name.addEventListener("click", (e)=>{     
                    comparacion.name.innerHTML = null
                    this.name.style.display = "none"
                })
            }
        }
    }
}