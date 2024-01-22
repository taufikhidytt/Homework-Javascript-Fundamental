// author 
// Taufik Hidayat | Bootcamp Rakamin

function suhu() {
    let suhu = document.getElementById("suhu").value ;

    let hasil;
    hasil = suhu.length == 0 ? "Tolong Masukan Angka Anda" : suhu >= -100 && suhu <= 0 ? "Beku" : suhu >= 1 && suhu <= 100 ? "Cair" : suhu >= 101 && suhu <= 500 ? "Uap" : "Tidak Terdefinisi";

    document.getElementById("hasil").innerHTML = "<b>" + hasil +"</b>";
}

function clearSuhu()
{
    document.getElementById("suhu").value = '';

    document.getElementById("hasil").innerHTML = '';
}

function jenisKendaraan(param) {
    var jenis = param.value;
    jenis == "mobil" ? document.getElementById('nilai').removeAttribute('readonly') : document.getElementById('nilai').setAttribute('readonly', true);
}

function jenisBbm() {
    let jenis = document.getElementById("jenisKendaraan").value.length != 0 ? document.getElementById("jenisKendaraan").value.toLowerCase() : "null";

    let nilai = document.getElementById("nilai").value.length != 0 ? document.getElementById("nilai").value.toLowerCase() : "null";

    let hasilBbm;

    if(jenis != "null"){
        if(jenis == "plat kuning" || jenis == "motor"){
            hasilBbm = "BBM SUBSIDI";
        }else{
            if(nilai == "null"){
                hasilBbm = "Masukan CC Kendaraan Anda";
            } else if(nilai < 1500){
                hasilBbm = "PERTAMAX";
            } else if(nilai >= 1500){
                hasilBbm = "PERTAMAX TURBO";
            }
        }
    } else {
        hasilBbm = "Masukan Jenis Kendaraan Anda";
    }

    document.getElementById("hasilBbm").innerHTML = "<b>" + hasilBbm +"</b>";
}

function clearBBM()
{
    document.getElementById("jenisKendaraan").value = '';
    document.getElementById("nilai").value = '';
    document.getElementById('nilai').setAttribute('readonly', true)

    document.getElementById("hasilBbm").innerHTML = '';
}

// author 
// Taufik Hidayat | Bootcamp Rakamin