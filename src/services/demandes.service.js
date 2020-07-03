const { 
    addMember
  } = require("./adherents.service")
export const DemanderInscription = (values) =>{
  
      // el exemple elli jebt mennu bech les demandes yetsajlou fi tableau fl local storage 
    //https://jsfiddle.net/436xupte/

    var demandes = JSON.parse(localStorage.getItem("demandes") || "[]");
      // Modifying
      var demande = {
        id: demandes.length ,
        nom:values["nom"],
        prenom:values["prenom"],
        email : values["email"],
        cin :values["cin"],
        date:values["date-picker"]
       };
       demandes.push(demande);
       console.log("Added demande num" + demande.id);
         // Saving
        localStorage.setItem("demandes", JSON.stringify(demandes));
  }
export const AccepterDemande = (id) =>{
    let demandes = JSON.parse(localStorage.getItem('demandes'))
    var i=demandes.findIndex(demande=>demande.id === id);

    addMember(demandes[i]["cin"], demandes[i]["nom"], demandes[i]["prenom"], demandes[i]["date"], demandes[i]["email"] )

     //console.log(i)
     if(i!==-1){
      demandes.splice(i,1);
     }
     console.log(demandes)
    localStorage.setItem("demandes", JSON.stringify(demandes));
}
export const RefuserDemande = (id) =>{
    let demandes = JSON.parse(localStorage.getItem('demandes'))
    var i=demandes.findIndex(demande=>demande.id === id);
    console.log(i)
     if(i!==-1){
      demandes.splice(i,1);
     }
     console.log(demandes)
     
    localStorage.setItem("demandes", JSON.stringify(demandes));
}