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
                <a href="../login.html"><i class="fa-solid fa-user" style="color: #000000;"></i></a>
                <a href="#"><i class="fa-solid fa-shopping-cart" style="color: #000000;"></i><span class="cart-count">0</span></a>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#">TRANG CHỦ</a></li>
                <li class="dropdown">
                    <a href="#">TRANG SỨC VÀNG <i class="fa-solid fa-chevron-down"></i></a>
                    <div class="dropdown-content">
                        <div class="column">
                            <h3>TRANG SỨC KIM CƯƠNG</h3>
                            <a href="#">Nhẫn Kim Cương</a>
                            <a href="#">Bông Tai Kim Cương</a>
                            <a href="#">Dây Chuyền Kim Cương</a>
                            <a href="#">Vòng & Lắc Kim Cương</a>
                            <a href="#">Trang Sức Cưới</a>
                        </div>
                        <div class="column">
                            <h3>TRANG SỨC CZ</h3>
                            <a href="#">Nhẫn CZ</a>
                            <a href="#">Bông Tai CZ</a>
                            <a href="#">Dây Chuyền CZ</a>
                            <a href="#">Vòng & Lắc CZ</a>
                            <a href="#">Trang Sức Cưới</a>
                        </div>
                        <div class="column">
                            <h3>TRANG SỨC ĐÁ MÀU</h3>
                            <a href="#">Nhẫn Đá Màu</a>
                            <a href="#">Bông Tai Đá Màu</a>
                            <a href="#">Dây Chuyền Đá Màu</a>
                            <a href="#">Vòng & Lắc Đá Màu</a>
                        </div>
                        <div class="column">
                            <h3>TRANG SỨC NGỌC TRAI</h3>
                            <a href="#">Nhẫn Ngọc Trai</a>
                            <a href="#">Bông Tai Ngọc Trai</a>
                            <a href="#">Dây Chuyền Ngọc Trai</a>
                            <a href="#">Vòng & Lắc Ngọc Trai</a>
                        </div>
                        <div class="column">
                            <h3>TRANG SỨC KHÔNG GẮN ĐÁ</h3>
                            <a href="#">Nhẫn</a>
                            <a href="#">Bông Tai</a>
                            <a href="#">Dây Chuyền</a>
                            <a href="#">Vòng & Lắc</a>
                            <a href="#">Nhẫn Cưới</a>
                            <a href="#">Charm</a>
                        </div>
                    </div>
                </li>
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
