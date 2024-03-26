const con = require('../configs/db')
class Account {
    register(req, res) {
        const { taiKhoan, email } = req.body; // Đảm bảo bạn có thể lấy thông tin từ yêu cầu POST hoặc thay đổi cách lấy thông tin tùy vào cấu trúc của yêu cầu của bạn.
        // Tạo câu lệnh SQL để tìm người dùng với tài khoản và mật khẩu tương ứng.
        const sqlCheck = "SELECT * FROM taikhoan WHERE taiKhoan = ?";
        const sqlCheckEmail = "SELECT * FROM taikhoan WHERE email = ?"

        con.query(sqlCheck, [taiKhoan], function (errCheck, resultCheck) {
            if (errCheck) {
                throw errCheck;
            }
            if (resultCheck.length > 0) {
                // Tài khoản và mật khẩu hợp lệ
                res.status(401).json({ message: "Tài khoản đã tồn tại" });
            } else {
                con.query(sqlCheckEmail, [email], function (err, result, fields) {
                    if (result.length > 0) {
                        res.status(401).json({ message: "Email đã tồn tại" });
                    } else {
                        // Tạo câu lệnh SQL để chèn thông tin người dùng vào bảng thongtin
                        const insertInfoSql = "INSERT INTO thongtin (hoTen, gioiTinh, namSinh, diaChi, anhDaiDien) VALUES (?, ?, ?, ?, ?)";

                        con.query(insertInfoSql, ["", "", "", "", ""], function (err, result, fields) {
                            if (err) throw err;

                            // Sau khi thêm thông tin, lấy id của thông tin vừa thêm
                            const idThongTin = result.insertId;

                            // Tiếp theo, thêm người dùng vào bảng taikhoan với idThongTin
                            const { taiKhoan, matKhau, idVaiTro, email, hoTen } = { taiKhoan: req.body.taiKhoan, matKhau: req.body.matKhau, idVaiTro: 2, email: req.body.email, hoTen: req.body.hoTen };

                            // Tạo câu lệnh SQL để chèn người dùng mới vào bảng taikhoan với idThongTin đã lấy
                            const insertUserSql = "INSERT INTO taikhoan (taiKhoan, matKhau, idVaiTro, idThongTin, email,hoTen) VALUES (?, ?, ?, ?, ?,?)";
                            con.query(insertUserSql, [taiKhoan, matKhau, idVaiTro, idThongTin, email, hoTen], function (err, result, fields) {
                                if (err) throw err;
                                // console.log(result);
                                res.json(result);
                            });
                        });
                    }
                })

            }
        });

    }
    login(req, res) {
        const { taiKhoan, matKhau } = req.body; // Đảm bảo bạn có thể lấy thông tin từ yêu cầu POST hoặc thay đổi cách lấy thông tin tùy vào cấu trúc của yêu cầu của bạn.

        // Tạo câu lệnh SQL để tìm người dùng với tài khoản và mật khẩu tương ứng.
        const sql = "SELECT * FROM taikhoan WHERE taiKhoan = ? AND matKhau = ?";
        con.query(sql, [taiKhoan, matKhau], function (err, result, fields) {
            if (err) {
                throw err;
            }
            if (result.length > 0) {
                // Tài khoản và mật khẩu hợp lệ
                res.json({ message: "Đăng nhập thành công", user: result[0] });
            } else {
                // Tài khoản hoặc mật khẩu không đúng
                res.status(401).json({ message: "Tài khoản hoặc mật khẩu không đúng" });
            }
        });
    }

}
module.exports = new Account()