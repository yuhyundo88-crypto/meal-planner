function searchAddress(keyword, callback) {
  const geocoder = new kakao.maps.services.Geocoder();

  geocoder.addressSearch(keyword, function(result, status) {
    if (status === kakao.maps.services.Status.OK) {
      callback(result[0].address_name, result[0].y, result[0].x);
    } else {
      document.getElementById("addressResult").innerText = "주소 검색 실패";
    }
  });
}