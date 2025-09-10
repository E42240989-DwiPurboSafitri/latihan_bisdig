function jalankanNative() {
    alert("Selamat datang di website Dwi!()");

    var yakin = confirm("Apakah kamu ingin melihat portofolio?");
    if (yakin) {
        alert("Oke, membuka profil...()");
    } else {
        alert("Aksi dibatalkan()");
    }

    var nama = prompt("Masukkan namamu:");
    if (nama) {
    alert("Halo " + nama + "! Senang bisa mengenalmu()");}
    else {
        alert("Kamu bekum memasukkan nama.")
    }

    var now = new Date();
    alert("Sekarang adalah: " + now);

    var angka = parseInt("123");
    alert("parseInt('123') menghasilkan angka: " + angka);

    setTimeout(function () {
        alert("Popup ini muncul setelah 3 detik (setTimeout)");
    }, 3000);
}

// Custom functions
function foo() {
    alert("Custom function foo() baru saja dijalankan!");
}

function alertArraySize(arr) {
    alert("Ukuran array adalah: " + arr.length);
}

function jalankanCustom() {
    foo();

    var test = [1, 2, 3, 4, 5];
    alertArraySize(test);
}
