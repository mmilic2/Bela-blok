var ukBodovi = 162;
var mi = 0;
var vi = 0;
var ukupnoMi = 0;
var ukupnoVi = 0;
var igra = 1001;
var sumaMi = 0;
var sumaVi = 0;

function Bodovanje(){
    mi = parseInt(document.getElementById('bodovi1').value);
    vi = parseInt(document.getElementById('bodovi2').value);
    ZvanjeMi = parseInt(document.getElementById('zvanje1').value);
    ZvanjeVi = parseInt(document.getElementById('zvanje2').value);
    ukBodovi += +document.getElementById('zvanje1').value;
    ukBodovi += +document.getElementById('zvanje2').value;
    
    if(isNaN(ZvanjeMi)){
        ZvanjeMi = 0;
    }
    if(isNaN(ZvanjeVi)){
        ZvanjeVi = 0;
    }

    mi += ZvanjeMi;
    vi += ZvanjeVi;
    if(document.getElementById("checkbox1").checked == false && document.getElementById("checkbox2").checked == false){
        alert('Niste odabrali tko je zvao!');
    }
    if(document.getElementById("checkbox1").checked == true){
            if(mi <= ukBodovi/2){
                document.getElementById('bodovi1').value = 0;
                document.getElementById('bodovi2').value = ukBodovi;
                ukupnoVi = ukBodovi;
                ukupnoMi = 0;
            }else if(mi == 0){
                document.getElementById('bodovi2').value = ukBodovi;
                vi = ukBodovi; 
                ukupnoVi = vi;
                ukupnoMi = 0; 
            }else{
                document.getElementById('bodovi2').value = (ukBodovi - mi);
                ukupnoVi = ukBodovi - mi;
                ukupnoMi = ukBodovi - ukupnoVi;
            }
    }
    if(document.getElementById("checkbox2").checked == true){
            if(vi <= ukBodovi/2){
                document.getElementById('bodovi2').value = 0;
                document.getElementById('bodovi1').value = ukBodovi;
                ukupnoMi = ukBodovi;
                ukupnoVi = 0;
            }else if(vi == 0){
                document.getElementById('bodovi1').value = ukBodovi;
                mi = ukBodovi;
                ukupnoMi = ukBodovi;
                ukupnoVi = 0;  
            }else{
                document.getElementById('bodovi1').value = (ukBodovi - vi);
                ukupnoMi = ukBodovi - vi;
                ukupnoVi = ukBodovi - ukupnoMi;
            }
    }
    if(document.getElementById("checkbox3").checked == true){
        alert('Igra gotova, pobjedili smo mi');
    }
    if(document.getElementById("checkbox4").checked == true){
        alert('Igra gotova, pobjedili ste Vi');
    }
   
     //ukupnoMi = ukBodovi - parseInt(document.getElementById('bodovi2').value);
    //ukupnoVi = ukBodovi - parseInt(document.getElementById('bodovi1').value);
    document.getElementById("ukupnoMi").innerHTML= "Mi: " + ukupnoMi;
    document.getElementById("ukupnoVi").innerHTML = "Vi: " + ukupnoVi;
    Rezultat(ukupnoMi, ukupnoVi);
    igra -= ukBodovi;
    sumaMi += ukupnoMi;
    sumaVi += ukupnoVi;
    if(igra <= 0){
        if(sumaMi > sumaVi){
            alert('Pobjedili smo mi');
            location.reload();
        }else{
            alert('Pobjedili ste Vi');
            location.reload();
        }
    }
    ukBodovi = 162;
    document.getElementById('bodovi1').value = "";
    document.getElementById('bodovi2').value = "";
    document.getElementById('zvanje1').value = "";
    document.getElementById('zvanje2').value = "";
    ukupnoVi = 0;
    ukupnoMi = 0;
}
    
    $(document).ready(function(){
        $('input:checkbox').click(function() {
            $('input:checkbox').not(this).prop('checked', false);
        });
    });
   
function Rezultat(rezultatMi, rezultatVi){
    var tr = document.createElement("TR");
    var tdMi = tr.appendChild(document.createElement("TD"));
    var tdVi = tr.appendChild(document.createElement("TD"));
    tdMi.innerHTML = rezultatMi;
    tdVi.innerHTML = rezultatVi;
    document.getElementById("rezultat").appendChild(tr);
    mi = 0;
    vi = 0;
}

