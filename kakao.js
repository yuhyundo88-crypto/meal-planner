let geocoder;

kakao.maps.load(function () {
  geocoder = new kakao.maps.services.Geocoder();
});

function searchAddress(keyword, callback) {
  if (!geocoder) {
    document.getElementById("addressResult").innerText = "지도 로딩 중... 다시 시도하세요";
    return;
  }

  geocoder.addressSearch(keyword, function(result, status) {
    if (status === kakao.maps.services.Status.OK) {
      callback(result[0].address_name, result[0].y, result[0].x);
    } else {
      document.getElementById("addressResult").innerText = "주소 검색 실패";
    }
  });
}
