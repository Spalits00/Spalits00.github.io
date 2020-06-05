var num = 0;
const windowsize = window.innerWidth;
pictures = [ 'https://www.agara.co.jp/image/article/800x600/f/9/2/7/f9270dc53e4fbd93d4e34a16e781d166_1.jpg', 'https://www.shibumaku.jp/wp-content/uploads/2020/05/IMG_6133A-1024x683.jpg', 'https://kaiseigakuen.jp/150th/wp-content/uploads/2018/07/016.jpg', 'https://www.kaijo.ed.jp/wp-content/themes/kaijo-sp/assets/img/schoolhouse_pic2.jpg' ];
slideshow_counter = 0;
setInterval(slideshow,4000);
function slideshow() {
    if (slideshow_counter == pictures.length - 1) {
        slideshow_counter = 0;
    } else {
        slideshow_counter++;
    }
    

}
slideshow();