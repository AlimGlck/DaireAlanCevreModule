let pi =3;
function DaireAlan(yaricap){
    console.log((`Dairenin Alanı:${pi*yaricap*yaricap}`));
}

function DaireCevre(yaricap){
    console.log(`Dairenin Çevresi:${2*pi*yaricap}`);
}

module.exports = {
    DaireAlan,
    DaireCevre
}