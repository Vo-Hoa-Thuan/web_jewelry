document.addEventListener('DOMContentLoaded', function () {
    // Tạo phần tử footer
    const footer = document.createElement('footer');
    footer.className = 'footer-widget-area';

    // Tạo nội dung cho footer
    footer.innerHTML = `
    <div class="footer-top section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="widget-item">
                        <div class="widget-title">
                            <div class="widget-logo">
                                <a href="/">
                                    <img src="./images/Logo-loc-phuc-footer.png" alt="Lộc Phúc Fine Jewelry">
                                </a>
                            </div>
                        </div>
                        <div>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="widget-item">
                        <h6 class="widget-title">Liên hệ</h6>
                        <div>
                            <address class="contact-block">
                                <ul>
                                    <li><i class="fa fa-home"></i>532-534 Cộng Hòa, Phường 13, Quận Tân Bình, TP. Hồ Chí Minh</li>
                                    <li><i class="fa fa-envelope"></i><a href="mailto:chamsoc@locphuc.com.vn">chamsoc@locphuc.com.vn</a></li>
                                    <li><i class="fa fa-phone"></i><a href="tel:1900636526">1900636526</a> - <a href="tel:02862818818">(028) 62 818 818</a></li>
                                    <li><i class="fa fa-map-marker-alt"></i><a href="/he-thong-showroom">Hệ thống Showrooms</a></li>
                                </ul>
                            </address>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="widget-item">
                        <h6 class="widget-title">Lộc Phúc Fine Jewelry</h6>
                        <div>
                            <ul class="info-list" style="font-style:normal">
                                <li><a href="/public/about.html">Giới thiệu</a></li>
                                <li><a href="/">Chính sách bảo mật</a></li>
                                <li><a href="/">Tuyển dụng</a></li>
                                <li><a href="/">Điều khoản sử dụng</a></li>
                                <li><a href="/public/contact.html">Liên hệ</a></li>
                                <li><a href="/">Chính sách thu đổi</a></li>
                                <li><a href="/">FAQ</a></li>
                                <li><a href="/">Hướng dẫn mua hàng</a></li>
                                <li><a href="/">Chế độ bảo hành</a></li>
                                <li><a href="/">Hướng dẫn đo size</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="widget-item">
                        <h6 class="widget-title">Kết nối với chúng tôi</h6>
                        <div class="widget-body social-link">
                            <a href="#facebook"><i class="fab fa-facebook"></i></a>
                            <a href="#instagram"><i class="fab fa-instagram"></i></a>
                            <a href="#youtube"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row align-items-center mt-20">
                <div class="col-md-6">
                    <div class="newsletter-wrapper">
                        <h6 class="widget-title-text">Đăng ký nhận bản tin</h6>
                        <div class="newsletter-inner">
                            <input type="email" name="email" class="news-field" autocomplete="off" placeholder="Enter your email address">
                            <button type="button" class="news-btn">Đăng ký</button>
                        </div>
                        <div class="mailchimp-alerts">
                            <div class="mailchimp-submitting"></div>
                            <div class="mailchimp-success"></div>
                            <div class="mailchimp-error"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="logo mt-20">
                        <a href="http://online.gov.vn/Home/WebDetails/57052" target="_blank"><img src="./images/logoSaleNoti.png" class="img-fluid" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="copyright-text text-center">
                        <p>Powered By <a href="#">Lộc Phúc Fine Jewelry</a> © 2023</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    // Thêm footer vào cuối body
    document.body.appendChild(footer);
});
