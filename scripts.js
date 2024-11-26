let visibleMenu = false;

function showHideMenu(){
    if (visibleMenu){
        document.getElementById("nav").classList = "";
        visibleMenu = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        visibleMenu = true;
    }
}

function select(){
    document.getElementById("nav").classList = "";
    visibleMenu = false;
}

function skillsEffect(){
    var skills = document.getElementById("skills");
    var skills_distance = window.innerHeight - skills.getBoundingClientRect().top;
    if(skills_distance >= 300){
        let habilidades = document.getElementsByClassName("progress");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html-css");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("node");
        habilidades[4].classList.add("mongodb");
        habilidades[5].classList.add("python");
        habilidades[6].classList.add("office");
        habilidades[7].classList.add("communication");
        habilidades[8].classList.add("team");
        habilidades[9].classList.add("creativity");
        habilidades[10].classList.add("dedication");
        habilidades[11].classList.add("leadership");
        habilidades[12].classList.add("organization");
    }
}

window.onscroll = function(){
    skillsEffect();
}

function download() {
    window.open('docs/luna-heuguerot-resume.pdf', '_blank');
}