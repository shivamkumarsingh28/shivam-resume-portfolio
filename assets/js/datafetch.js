let fetchRes = fetch(
    "https://script.google.com/macros/s/AKfycbx5b0WKUWSCc4jZVr0EhWDaJIOV_VePhafAocYZzLZ5BUjnY8NP3BoyMq1hybWrbnWE/exec");
    // fetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {
            About(d.content[0][0])
            Fact(d.content[0][1])
            skill(d.content[0][2])
            resume(d.content[0][3])
            portfolio(d.content[0][4])
            service(d.content[0][5])
            testimonals(d.content[0][6])
            // contact(d.content[0][7])
        })

function About(about) {
    document.getElementById("describe").innerHTML= about;

    
}

function Fact(fact) {
    document.getElementById("facts").innerHTML= fact;

    
}
function skill(skill) {
    document.getElementById("skills").innerHTML= skill;

    
}
function resume(resume) {
    document.getElementById("resume").innerHTML= resume;

    
}
function portfolio(portfolio) {
    document.getElementById("portfolio").innerHTML= portfolio;

    
}
function service(service) {
    document.getElementById("service").innerHTML= service;

    
}
function testimonals(testimonals) {
    document.getElementById("testimonals").innerHTML= testimonals;

    
}
// function contact(contact) {
//     document.getElementById("contact").innerHTML= contact;

    
// }