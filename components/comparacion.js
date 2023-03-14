import tabla from "./tabla.js";

export default{

    name: document.querySelector("#myTabla"),
    frag: document.createDocumentFragment(),

    miFuc(){
        let datos = tabla.info[0];
        
            if(datos.eleccion === "Traditional"){
                tabla.data.Traditional.forEach((val,id)=>{
                    if(datos.numero >= val[0] && datos.numero <= val[1]){
                        this.createlist(id)
                    }
                })
            }
    
            else if(datos.eleccion === "SBG-Rating"){
                tabla.data["SBG-Rating"].forEach((val,id)=>{
                    if(datos.numero == val[0]){
                        this.createlist(id)
                    }
                })
            }
            
            tabla.info=[]
        

    },
    createlist(id){
        let tr = document.createElement("TR")
        let td1 = document.createElement("TD")
        td1.insertAdjacentText("beforeend",tabla.data.Traditional[id].join("-"))
        let td2 = document.createElement("TD")
        td2.insertAdjacentText("beforeend",tabla.data["Point-Range"][id].join("-"))
        let td3 = document.createElement("TD")
        td3.insertAdjacentText("beforeend",tabla.data.Letter[id])
        let td4 = document.createElement("TD")
        td4.insertAdjacentText("beforeend",tabla.data["SBG-Rating"][id])
        let td5 = document.createElement("TD")
        td5.insertAdjacentText("beforeend",tabla.data["Proficiency-Level-With-Standard"][id])
        tr.append(td1,td2,td3,td4,td5)
        this.frag.append(tr)
        this.name.append(this.frag)
    },
}