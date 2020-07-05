export const Emprunter = (id ,libelle,nbExemplaires) =>{
    if(nbExemplaires > 0){
        let userEm = JSON.parse(localStorage.getItem('user'))
  
        var emprunts = JSON.parse(localStorage.getItem("emprunts") || "[]");
         //console.log("length "+emprunts.length)
          var emprunt = {
            idEmp: emprunts.length ,
            idLivre:id ,
            titreLivre : libelle,
            idUser: userEm["id"],
            Usernom: userEm["nom"],
            //etat pour tester si le livre est retourné ou l'emprunt reste en cours
            etat:"encours",
            //date of today
            dateEmp : new Date().toJSON().slice(0,10).replace(/-/g,'/'),
  
            // si cette date est vide lezem nzidou 3la dateEmp 15 jours w nchufouha tji b date lyoum wala 
            //hatta akther mn date lyoum yaani nombre de jours ynajjm ykoun akther wala hatta f chHar eli ba3ed
            dateRetour:"En Cours"
           };
  
           emprunts.push(emprunt);
           var sameUserEmp = []
          sameUserEmp = emprunts.filter(item => item["idUser"]=== userEm["id"]&& item["etat"]!=="retourné"&& item["etat"]!=="RetournerRetard");
          // console.log("lengttttth :::"+sameUserEmp.length)
          // console.log("user emp "+Object.values(sameUserEmp[0]))
          
           if(sameUserEmp.length < 3){
              // nbExemplaires=nbExemplaires--
               localStorage.setItem("emprunts", JSON.stringify(emprunts));
               return 1
               //setnbExemplaires(id,nbExemplaires-1)

               //setBookBorrowed(true)
    
               //console.log("you emprunted this book , and the number of copies now is : "+nbExemplaires-1)
  
           }else{
               return 2
             //alert("you cannot emprunt more then 2 books !")
           }
  
      }else{
          return 3
       // alert("The number of copies of this book has expired , you can't emprunt it")
      }
  

  }
export const RetounerLivre =(id)=>{
    let userRet = JSON.parse(localStorage.getItem('user'))
    var emprunts = JSON.parse(localStorage.getItem("emprunts"));
    var sameUserSamebook = []
    sameUserSamebook = emprunts.find(item => item["idUser"]=== userRet["id"] && item["idLivre"]===id);
    //emprunts.splice(emprunts["idEmp"],1);
    //console.log("this is "+ Object.values(sameUserSamebook))
    sameUserSamebook["etat"] ="retourné"

    //a lire fl affichage des empruntes 

    //kif yarja3 lkteb nda5lou date fi variable dateRetour fl local storage 
    //wa9tHa l'emprunt lahy encours lahy en retard yaani meme pas ntestiw 3al retard lenna
    //najjmou nzidou liste des empruntes retournés

    sameUserSamebook["dateRetour"]=new Date().toJSON().slice(0,10).replace(/-/g,'/')

    //console.log("this is "+ Object.values(sameUserSamebook))
    //to update we delete ligne elli ken w npushiw line jdid b les updates 

    //emprunts.splice(sameUserSamebook["idEmp"],1);
    emprunts[sameUserSamebook["idEmp"]]=sameUserSamebook
    //emprunts.push(sameUserSamebook);

    localStorage.setItem("emprunts", JSON.stringify(emprunts));

}
export const fetchListeEnCours =(emprunts)=>{

    var Encours= emprunts.filter(emprunt => emprunt.etat==="encours"||emprunt.etat==="EnCoursRetard")
    return  Encours


}
export const fetchListeRetard =(emprunts)=>{
 
  emprunts.forEach(function(emprunt) {
    //console.log( emprunt.dateEmp);
     var d1 =  (emprunt.dateEmp )
     //var et = (emprunt.etat)
     //console.log(emprunt.etat)
     //console.log(d1)
     var datemp= new Date (d1)
     //console.log(datemp)
     var d2 =  (emprunt.dateRetour)
     //console.log(d2)
     var datret= new Date (d2)
     //console.log(datret)
     const diffTime = Math.abs(datret -datemp);
     const diffDays1 = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    // var diffDays1 =datret.getDate() - datemp.getDate(); 
     //console.log(diffDays1)
    var datetoday= new Date().toJSON().slice(0,10).replace(/-/g,'/')
    //console.log(datetoday)
    var dattdy= new Date (datetoday)
    const diffTime2 = Math.abs(dattdy-datemp);
    const diffDays2 = Math.ceil(diffTime2 / (1000 * 60 * 60 * 24)); 
    //var diffDays2 =datemp.getDate() -dattdy.getDate(); 
    
    //console.log(diffDays2)
   
     if(diffDays2>15||diffDays1>15){
       if(emprunt.etat==="encours"){

        emprunt.etat ="EnCoursRetard"

       }else 
       if(emprunt.etat==="retourné"){

         emprunt.etat ="RetournerRetard"
       }
       console.log(emprunt.etat )
     }  
   
  });
  var  Enretard=emprunts.filter(emprunt => emprunt.etat==="EnCoursRetard"||emprunt.etat==="RetournerRetard")
  localStorage.setItem("emprunts", JSON.stringify(emprunts));
  return Enretard

}


export const fetchListeRetourne =(emprunts)=>{
  
  var  listeRetourne=emprunts.filter(emprunt => emprunt.etat==="retourné"|| emprunt.etat==="RetournerRetard")
  return  listeRetourne
}