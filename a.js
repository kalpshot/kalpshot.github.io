let date = document.querySelector(".date");
var d = new Date();
var c = d.getHours() + ":" + d.getMinutes();
date.innerHTML = c;

const about = document.querySelector(".about");

about.addEventListener('click', () => {

    const workbox = new WinBox({
        title: 'My Works',
        background: '#504b45',
        width: '400px',
        height: '400px',
        left: 50,
        right: 50,
        bottom: 50,
        top: 50,
        html: '<p><a class = "about"><img class="a" src="http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Places-folder-icon.png"></a></p>'
    })
})

const user = document.querySelector(".user");

var nameval = localStorage.getItem('localname');

const rootname = document.querySelector(".root");


rootname.innerHTML = nameval;

const applications = document.querySelector(".Applications");

applications.addEventListener('click', () => {

    const workbox = new WinBox({
        title: 'Applications',
        background: '#504b45',
        width: '400px',
        height: '400px',
        left: 50,
        right: 50,
        bottom: 50,
        top: 50,
        html: '<ul class="app"><li><a href="resume.html" class="res">Resume</a><li><a class="res">Technical Projects</a><li><a class="res">Sketches</a></ul>'
    })
})


