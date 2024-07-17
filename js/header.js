document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
        <div class="top-bar">
            <div class="social-media-icons">
                <a href="https://www.facebook.com/" class="list_social"><i class="fa-brands fa-facebook" style="color: #000000;"></i></a>
                <a href="https://www.instagram.com/" class="list_social"><i class="fa-brands fa-instagram" style="color: #000000;"></i></a>
                <a href="https://www.youtube.com/" class="list_social"><i class="fa-brands fa-youtube" style="color: #000000;"></i></a>
                <a href="mailto:your@email.com" class="list_social"><i class="fa-solid fa-location-dot" style="color: #000000;"></i></a>
            </div>
            <div class="logo">
                <h1>Lộc Phúc Fine Jewelry</h1>
            </div>
            <div class="search-bar">
                <a href="#"><i class="fa-solid fa-search" style="color: #000000;"></i></a>
                <input type="text" placeholder="Tìm sản phẩm...">
                <a href="#"><i class="fa-solid fa-user" style="color: #000000;"></i></a>
                <a href="#"><i class="fa-solid fa-shopping-cart" style="color: #000000;"></i><span class="cart-count">0</span></a>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#">TRANG CHỦ</a></li>
                <li><a href="#">TRANG SỨC VÀNG</a><i class="fa-solid fa-chevron-down"></i></li>
                <li><a href="#">TRANG SỨC CƯỚI</a><i class="fa-solid fa-chevron-down"></i></li>
                <li><a href="#">TRANG SỨC CAO CẤP</a><i class="fa-solid fa-chevron-down"></i></li>
                <li><a href="#">KIM CƯƠNG</a></li>
                <li><a href="#">BỘ SƯU TẬP</a></li>
                <li><a href="#">TIN TỨC</a></li>
                <li><a href="#">LIÊN HỆ</a></li>
            </ul>
        </nav>
    `;

    const header = document.createElement('header');
    header.innerHTML = headerHTML;
    document.body.insertBefore(header, document.body.firstChild);
});
