function searchAddress(keyword, callback) {

  const places = new kakao.maps.services.Places();

  // 1. 키워드로 장소 검색 (학교, 회사명 가능)
  places.keywordSearch(keyword, function(data, status) {

    if (status === kakao.maps.services.Status.OK) {

      const place = data[0];

      const address = place.address_name;
      const lat = place.y;
      const lng = place.x;

      document.getElementById("addressResult").innerText =
        "검색된 위치: " + place.place_name + " (" + address + ")";

      callback(address, lat, lng);

    } else {
      document.getElementById("addressResult").innerText =
        "장소를 찾을 수 없습니다.";
    }

  });
}
