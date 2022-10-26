// accses elements 
const secOne = document.querySelector( ".section-one" );
const imgArr = [ "back-3.avif", "back-4.avif", "back-5.avif" ]
const stopBtn = document.querySelector( ".stop" )
const startBtn = document.querySelector( ".start" )
const changeAbleImg = document.querySelector( ".section-two__img" )
let colorVal;
const imges = document.querySelectorAll( ".section-four__img" )
const overlay = document.querySelector( ".section-four__overlay" )
const ovelayImg = document.querySelector( ".section-four__overlay img" )
const overlayIcon = document.querySelector( ".overlay-colse" )
const overlayHeading = document.querySelector( ".section-four__overlay h3" )
const skills = document.querySelector( ".skills-container" );
const progressSkills = document.querySelectorAll( ".progress" )
const aside = document.querySelector( ".aside" );
const asideMenu = document.querySelector( ".aside-menu" );
const themes = document.querySelectorAll( ".aside-themes li" )

let random = setInterval( () =>
{
    randombg()
}, 4000 )
stopBtn.addEventListener( "click", function ()
{
    clearInterval( random )
} )
startBtn.addEventListener( "click", function ()
{
    random = setInterval( () =>
    {
        randombg()
    }, 4000 )
} )
function randombg()
{
    let backGround = Math.floor( Math.random() * imgArr.length )
    secOne.style.backgroundImage = `url(assets/img/${ imgArr[ backGround ] })`
}
// accses aside element
asideMenu.addEventListener( "click", function ()
{
    aside.classList.toggle( "active" )
    changeIcon()
} )
function changeIcon()
{
    if ( aside.classList.contains( "active" ) )
    {
        asideMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`
    } else
    {
        asideMenu.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`
    }
}
themes.forEach( theme =>
{
    theme.addEventListener( "click", e =>
    {
        document.documentElement.style.setProperty( "--main-color", e.target.dataset.color );
        localStorage.setItem( "color", e.target.dataset.color )
        themes.forEach( r =>
        {
            r.classList.remove( "apear" )
        } )
        e.target.classList.add( "apear" )
        colorVal = localStorage.getItem( "color" )
        changeImg()
    } )
} )
window.onload = function ()
{
    if ( localStorage.getItem( "color" ) !== null )
    {
        document.documentElement.style.setProperty( "--main-color", localStorage.getItem( "color" ) );
    }
    let ul = document.querySelector( ".aside-themes" )
    let li = Array.from( ul.children )
    let item = li.find( e => e.dataset.color == localStorage.getItem( "color" ) )
    item.classList.add( "apear" )
    colorVal = localStorage.getItem( "color" )
    changeImg()
}
function changeImg()
{
    switch ( colorVal )
    {
        case "#83ff93":
            changeAbleImg.src = "assets/img/ilo-6.jpg"
            break;
        case "#ffcb83":
            changeAbleImg.src = "assets/img/ilo-5.jpg"
            break;
        case "#0dcaf0":
            changeAbleImg.src = "assets/img/ilo-4.png"
            break;
    }
}

window.onscroll = function ()
{
    let secOfTop = skills.offsetTop;
    let skOutHe = skills.offsetHeight;
    let outHe = this.innerHeight;
    let wScrol = window.pageYOffset;
    if ( wScrol > ( secOfTop + skOutHe - outHe ) )
    {
        progressSkills.forEach( ele =>
        {
            ele.style.width = ele.dataset.progres;
        } )
    }
}

imges.forEach( img =>
{
    img.addEventListener( "click", function ( e )
    {
        overlay.classList.add( "show" )
        ovelayImg.src = e.target.src;
        overlayHeading.innerHTML = e.target.alt;
    } )
} )
overlayIcon.addEventListener( "click", function ()
{
    overlay.classList.remove( "show" )
} )
overlay.addEventListener( "click", function ( e )
{
    if ( e.target !== this )
    {
        return;
    } else
    {
        overlay.classList.remove( "show" )
    }
} )
