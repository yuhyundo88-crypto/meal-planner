function searchAddress(keyword, callback) {
  if (!window.kakao || !kakao.maps) {
    document.getElementById("addressResult").innerText = "지도 로딩 중... 다시 시도하세요";
    return;
  }

  kakao.maps.load(function () {
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(keyword, function(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        callback(result[0].address_name, result[0].y, result[0].x);
      } else {
        document.getElementById("addressResult").innerText = "주소 검색 실패";
      }
    });
  });
}
