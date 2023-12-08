// ***********CHANGE ICONS HERE ***********
// falling Icons
var ICONS = [
    "./images/ballOfYarnIcon.jpg",     //0
    "./images/momicon.jpg",            //1
    "./images/shipicon.jpg",           //2
    "./images/orangeflowericon.jpg",   //3
    "./images/yinyangicon.jpg",        //4
    "./images/dragonflyicon1.jpg",     //5
    "./images/dndicon.jpg",            //6
    "./images/pinklotusicon.jpg",      //7
    "./images/peaceicon.jpg",          //8
    "./images/blank.png",              //9
    "./images/SmileyfaceIcon.jpg",     //10
    "./images/fortnitechesticon.jpg",  //11
    "./images/aquamarineroundicon.jpg",//12
    "./images/mlpicon.jpg",            //13
    "./images/trollicon.jpg",          //14
    "./images/santaicon.jpg",          //15
    "./images/angicon.jpg",            //16 
    "./images/wowicon.jpg"             //17

];

// FUNCTION TO CHANGE IMAGES IN THEMES

function setTheme(e) {
    let player = e.target.value;

    console.log(player);
    switch (player) {
        case "mom":
            document.getElementById('theme-selector').href = './themes/mom.css';
            document.body.style.backgroundImage = "url('./images/fairybg.jpg')";
            document.getElementById('imgA').src = "./images/unicorn-hzt.png";
            document.getElementById('imgB').src = "./images/unicorn2.png";
            icon.src = ICONS[1];
            break;
        case "steve":
            document.getElementById('theme-selector').href = './themes/steve.css';
            document.body.style.backgroundImage = "url('./images/starwarsbg.jpg')";
            document.getElementById('imgA').src = "./images/darthimg.png";
            document.getElementById('imgB').src = "./images/lukeskywalkerimg.png";
            icon.src = ICONS[2];
            break;
        case "james":
            document.getElementById('theme-selector').href = './themes/james.css';
            document.body.style.backgroundImage = "url('./images/wowbg.jpg')";
            document.getElementById('imgA').src = "./images/wowimgA.png";
            document.getElementById('imgB').src = "./images/wowimgb.png";
            icon.src = ICONS[17];
            break;
        case "angie":
            document.getElementById('theme-selector').href = './themes/angie.css';
            document.body.style.backgroundImage = "url('./images/angkitchenbg.jpg')";
            document.getElementById('imgA').src = "";
            document.getElementById('imgB').src = "";
            icon.src = ICONS[16];
            break;
        case "toni":
            document.getElementById('theme-selector').href = './themes/toni.css';
            document.body.style.backgroundImage = "url('./images/tealOrangeFlowerbg2.jpg')";
            document.getElementById('imgA').src = "./images/peacockimg.png";
            document.getElementById('imgB').src = "./images/peacockimg2.png";
            icon.src = ICONS[3];
            break;
        case "chris":
            document.getElementById('theme-selector').href = './themes/chris.css';
            document.body.style.backgroundImage = "url('./images/chrisbg.jpg')";
            document.getElementById('imgA').src = "";
            document.getElementById('imgB').src = "./images/treewomanimg.png";
            icon.src = ICONS[4];
            break;
        case "phounge":
            document.getElementById('theme-selector').href = './themes/phounge.css';
            document.body.style.backgroundImage = "url('./images/fairyforestbg.jpg')";
            document.getElementById('imgA').src = "./images/greenfairy.png";
            document.getElementById('imgB').src = "./images/autumnfairyimg.png";
            icon.src = ICONS[5];
            break;
        case "casey":
            document.getElementById('theme-selector').href = './themes/casey.css';
            document.body.style.backgroundImage = "url('./images/grndragoncavebg.jpg')";
            document.getElementById('imgA').src = "./images/wizardimg.png";
            document.getElementById('imgB').src = "./images/evilfairy.png";
            icon.src = ICONS[6];
            break;
        case "crystal":
            document.getElementById('theme-selector').href = './themes/crystal.css';
            document.body.style.backgroundImage = "url('./images/villagebg.jpg')";
            document.getElementById('imgA').src = "";
            document.getElementById('imgB').src = "./images/swancoupleimg.png";
            icon.src = ICONS[7];
            break;
        case "z":
            document.getElementById('theme-selector').href = './themes/z.css';
            document.body.style.backgroundImage = "url('./images/anothercastlebg.jpg')";
            document.getElementById('imgB').src = "./images/blackdragonimg.png";
            document.getElementById('imgA').src = "./images/reddragon.png";
            icon.src = ICONS[6];
            break;
        case "rosie": //not good-todo fix
            document.getElementById('theme-selector').href = './themes/rosie.css';
            document.body.style.backgroundImage = "url('./images/blackdragoncave.jpg')";
            document.getElementById('imgB').src = "./images/blckknight.png";
            document.getElementById('imgA').src = "./images/femaleknight.png";
            icon.src = ICONS[6];
            break;
        case "beth":
            document.getElementById('theme-selector').href = './themes/beth.css';
            document.body.style.backgroundImage = "url('./images/mushroombg.jpg')";
            document.getElementById('imgA').src = "./images/peacebus.png";
            document.getElementById('imgB').src = "./images/hippyflower.png";
            icon.src = ICONS[8];
            break;
        case "emily":
            document.getElementById('theme-selector').href = './themes/emily.css';
            document.body.style.backgroundImage = "url('./images/smileybg.jpg')";
            document.getElementById('imgA').src = "./images/smileypoop.png";
            document.getElementById('imgB').src = "./images/smileytongue.png";
            icon.src = ICONS[10];
            break;
        case "catherine":
            document.getElementById('theme-selector').href = './themes/toni.css';
            document.body.style.backgroundImage = "url('./images/tealOrangeFlowerbg2.jpg')";
            document.getElementById('imgA').src = "./images/peacockimg.png";
            document.getElementById('imgB').src = "./images/peacockimg2.png";
            icon.src = ICONS[3];
            break;
        case "eddie":
            document.getElementById('theme-selector').href = './themes/toni.css';
            document.body.style.backgroundImage = "url('./images/tealOrangeFlowerbg2.jpg')";
            document.getElementById('imgA').src = "./images/peacockimg.png";
            document.getElementById('imgB').src = "./images/peacockimg2.png";
            icon.src = ICONS[3];
            break;
        case "lori":
            document.getElementById('theme-selector').href = './themes/lori.css';
            document.body.style.backgroundImage = "url('./images/TMNTNYCbg.jpg')";
            document.getElementById('imgA').src = "./images/tmntlfimg.png";
            document.getElementById('imgB').src = "./images/tmntrtimg.png";
            icon.src = ICONS[8];
            break;
        case "allizabeth":
            document.getElementById('theme-selector').href = './themes/allizabeth.css';
            document.body.style.backgroundImage = "url('./images/fortnitebg.jpg')";
            document.getElementById('imgA').src = "./images/fortniteLlama.png";
            document.getElementById('imgB').src = "./images/fortnitepinkbear.png";
            icon.src = ICONS[11];
            break;
        case "aj":
            document.getElementById('theme-selector').href = './themes/aj.css';
            document.body.style.backgroundImage = "url('./images/robloxbg.jpg')";
            document.getElementById('imgA').src = "./images/robloxchar.png";
            document.getElementById('imgB').src = "./images/robloxcop.png";
            icon.src = ICONS[9];
            break;
        case "abby":
            document.getElementById('theme-selector').href = './themes/abby.css';
            document.body.style.backgroundImage = "url('./images/gem.jpg')";
            document.getElementById('imgA').src = "./images/aquamarinegem.png";
            document.getElementById('imgB').src = "./images/aquamarinegirlimg.png";
            icon.src = ICONS[12];
            break;
        case "avery":
            document.getElementById('theme-selector').href = './themes/avery.css';
            document.body.style.backgroundImage = "url('./images/mlpbg.jpg')";
            document.getElementById('imgA').src = "./images/mlppinkyimg.png";
            document.getElementById('imgB').src = "./images/mlptwilightimg.png";
            icon.src = ICONS[13];
            break;
        case "lilly":
            document.getElementById('theme-selector').href = './themes/avery.css';
            document.body.style.backgroundImage = "url('./images/mlpbg.jpg')";
            document.getElementById('imgA').src = "./images/mlppinkyimg.png";
            document.getElementById('imgB').src = "./images/mlptwilightimg.png";
            icon.src = ICONS[14];
            break;
        case "alli":
            document.getElementById('theme-selector').href = './themes/alli.css';
            document.body.style.backgroundImage = "url('./images/trollsbg.jpg')";
            document.getElementById('imgA').src = "./images/trollimg.png";
            document.getElementById('imgB').src = "./images/trollspoppyimg.png";
            icon.src = ICONS[14];
            break;
        case "alivia":
            document.getElementById('theme-selector').href = './themes/avery.css';
            document.body.style.backgroundImage = "url('./images/mlpbg.jpg')";
            document.getElementById('imgA').src = "./images/mlppinkyimg.png";
            document.getElementById('imgB').src = "./images/mlptwilightimg.png";
            icon.src = ICONS[13];
            break;
        case "santa":
            document.getElementById('theme-selector').href = './themes/santa.css';
            document.body.style.backgroundImage = "url('./images/santatreebg.jpg')";
            document.getElementById('imgA').src = "./images/santaimg.png";
            document.getElementById('imgB').src = "./images/santafrostyimg.png";
            icon.src = ICONS[15];
            break;

        default:
            document.getElementById('theme-selector').href = './themes/default.css';
            document.body.style.backgroundImage = "url('./images/defaultbg.jpg')";
            document.getElementById('imgA').src = "./images/basketOfYarnimg.png";
            document.getElementById('imgB').src = "./images/catimg.png";
            icon.src = ICONS[0];
    }


}