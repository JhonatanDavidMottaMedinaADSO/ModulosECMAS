import comparacion from "./comparacion.js"
import limpieza from "./limpieza.js"
export default{

    name: document.querySelector("#myForm"),
    data: [],
    info: [],

    Api: async function(){
        let peticion = await fetch("./config.json");
        let json = await peticion.json();
        this.data = json;
    },
    Traditional(p1){
        this.data.Traditional.forEach((val,id)=>{
            if(p1==id){
                console.log(val[0], val[1]);
            }
        })
    },
    PointRange(p1){
        this.data["Point-Range"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0], val[1]);
            }
        })
    },
    Letter(p1){
        this.data.Letter.forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    SBGRating(p1){
        this.data["SBG-Rating"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    ProficiencyLevelWithStandard(p1){
        this.data["Proficiency-Level-With-Standard"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    Solucion(){
        this.name.addEventListener("submit", (e)=>{
            this.info.push(Object.fromEntries(new FormData(e.target)));
            console.log(this.info);
            comparacion.miFuc();
            this.name.reset();
            e.preventDefault();
            limpieza.mibtn();
        })
    }
}