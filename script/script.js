$(document).ready(function () {
  let tempTotalHarga = 0;

  $("input#totalBelanja").keyup(function () {
    let totalBelanja = $(this).val();
    let diskon = 0;
    if (totalBelanja >= 200000) {
      diskon = 5;
    } else if (totalBelanja >= 150000) {
      diskon = 3;
    }
    let totalHarga = totalBelanja - (diskon / 100) * totalBelanja;
    tempTotalHarga = totalHarga;
    $("input#diskon").val(diskon);
    $("input#totalHarga").val(totalHarga.toLocaleString("id-ID"));
  });

  $("input#tunai").keyup(function () {
    let kembalian = $(this).val() - tempTotalHarga;
    $("input#kembalian").val(kembalian.toLocaleString("id-ID"));
  });
});
