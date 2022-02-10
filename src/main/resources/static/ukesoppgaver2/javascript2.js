let ut = "HALLO";
let ut2 = "";
const personer = [];

function visPersonRegister() {


    const person1 = {
        navn: "Jacob Schøyen",
        adresse: "Hjerastubbsen 41",
        telefonnr: "97878987"
    };

    const person2 = {
        navn: "Hilde Stakko",
        adresse: "Halloienveien 21",
        telefonnr: "45123312"
    };

    //       for (let person of personer) {
    //           personer.push(person);
    //           ut += person.navn + person.adresse + person.telefonnr;

    personer.push(person1, person2);
    formaterUt(personer);
    //skrivUt();

    const person3 = {
        navn: "Jon Halvorsen",
        adresse: "HerpaAlt 21",
        telefonnr: "81549300"
    };

    const person4 = {
        navn: "Sanjay Jubas",
        adresse: "India 21",
        telefonnr: "99229933"
    };

    const person5 = {
        navn: "Svensken",
        adresse: "Sverige",
        telefonnr: "11111111"
    };

    personer.push(person3, person4, person5);

    ut += "<br> HALLO<br>";
    ut += "Usortert liste: <br>"

    formaterUt(personer);
    skrivUt();


}

function formaterUt(array) {
   // console.log("HALLO FORMATER?")
    ut = "<table><tr>" +
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" +
        "</tr>";

    for (let person of array) {
        //console.log(person.navn + " " + person.adresse + " " + person.telefonnr);
        ut += "<tr>";
        ut += "<td>" + person.navn + "</td>" + "<td>" + person.adresse + "</td>" + "<td>" + person.telefonnr + "</td>"
        ut += "</tr>";
    }
    ut += "</table>";
    //  formaterUt(liste);

}


function compare(a, b) {
    if (a.navn < b.navn) {
        return -1;
    }
    if (a.navn > b.navn) {
        return 1;
    }
    return 0;
}

function bold() {
    personRegisterSortert = personer.sort(compare);

    ut2 += "<br/><br/>";
    ut2 += "Sortert:<br/>";
    ut2 += "<table><tr>+" +
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" + "</tr>";

    let teller = 0;

    for (let p of personRegisterSortert) {
        if (teller % 2 === 0) {
            ut2 += "<tr>";
            ut2 += "<td>" + p.navn + "</td>" + "<td>" + p.adresse + "</td>" + "<td>" + p.telefonnr + "</td>";
            ut2 += "</tr>";
        } else {
            ut2 += "<tr>";
            ut2 += "<td><strong>" + p.navn + "</strong></td>" + "<td><strong>" + p.adresse + "</strong></td>" + "<td><strong>" + p.telefonnr + "</strong></td>";
            ut2+= "</tr>";
        }
        teller++;
    }
    ut2 += "</table>";

}


function skrivUt() {
    document.getElementById("personRegister").innerHTML = ut;

    document.getElementById("personRegisterSortert").innerHTML = ut2;
}