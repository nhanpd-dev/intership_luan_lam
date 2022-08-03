import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="column">
          <h3>Hỗ trợ khách hàng</h3>
          <ul className="content-footer">
            <li>
              <a>Các câu hỏi thường gặp</a>
            </li>
            <li>
              <a>Gửi yêu cầu hỗ trợ</a>
            </li>
            <li>
              <a>Hướng dẫn cài đặt</a>
            </li>
            <li>
              <a>Phương thức vận chuyển</a>
            </li>
            <li>
              <a>Chính sách hàng nhập khẩu</a>
            </li>
            <li>
              <a>Hỗ trợ khách hàng: hotro@tiki.vn</a>
            </li>
            <li>
              <a>Báo lỗi bảo mật: security@tiki.vn</a>
            </li>
          </ul>
        </div>

        <div className="column">
          <h3>Về Tiki</h3>
          <ul className="content-footer">
            <li>
              <a>Giới thiệu Tiki</a>
            </li>
            <li>
              <a>Tuyển dụng</a>
            </li>
            <li>
              <a>Chính sách bảo mật thanh toán</a>
            </li>
            <li>
              <a>Chính sách giải quyết khiếu nại</a>
            </li>
            <li>
              <a>Điều khoản sử dụng</a>
            </li>
            <li>
              <a>Giới thiệu Tiki Xu</a>
            </li>
            <li>
              <a>SEP - Mua sắm có lời</a>
            </li>
          </ul>
        </div>

        <div className="column">
          <h3>Hợp tác và liên kết</h3>
          <ul className="content-footer">
            <li>
              <a>Quy chế hoạt động Sàn GDTMĐT</a>
            </li>
            <li>
              <a>Bán hàng cùng Tiki</a>
            </li>
            <li>
              <span>Chứng nhận bởi</span>
              <a>
                <img
                  src={require("../../../assets/img/bo-cong-thuong-2.png")}
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
