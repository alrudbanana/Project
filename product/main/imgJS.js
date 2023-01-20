var pics = document.getElementsByClassName("pic");
var lightbox = document.getElementById("lightbox");
var lightboxImage = document.getElementById("lightboxImage");

// for 루프를 돌리면서 썸네일을 클릭시 showLightbox() 함수를 호출
for (var i = 0; i < pics.length; i++) {
    pics[i].addEventListener("click", showLightbox);
    // pics 배열의 i번재 요소를 클릭시 showLightbox() 함수를 호출
}



// 섬네일을 클릭시 img 태그의 원본 이미지를 적용하는 함수, 화면에 출력하는 함수
function showLightbox() {
    var biglocation = this.getAttribute("data-src");   //data-src 의 값을 가져와서 biglocation 변수에 할당
    lightboxImage.setAttribute("src", biglocation);
    lightbox.style.display = "block";      /*화면에 출력되도록 설정 : none => block*/

}

// // 출력된 화면을 클릭시 다시 원래대로 되돌리는 함수
// lightbox.onclick = function () {
//     lightbox.style.display = "none";
// }