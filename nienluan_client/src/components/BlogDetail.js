import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../assets/css/blog1.css'

import moment from 'moment';

export default function BlogDetail(props) {
    const { id } = useParams();
    const { setShow } = props
    const [username, setUsername] = useState()

    const [formData, setFormData] = useState({
        taikhoan: '',
        idBlog: '',
        noiDung: '',
    });

    const [comments, setComments] = useState([])


    useEffect(() => {
        setShow(true)
        getComment(id)
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            const taikhoan = parsedUser.taiKhoan
            setUsername(taikhoan)
            setFormData({
                taikhoan: taikhoan,
                idBlog: id,
                noiDung: '',
            })
        }
    }, []);

    const getComment = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/comment/${id}`);
            const data = await response.json();
            if (data) {
                setComments(data)
                console.log(data)
            }
        } catch (error) {
            console.log('Đã xảy ra lỗi:', error);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.noiDung.length > 0) {
            fetch('http://localhost:4000/comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    getComment(id)
                    setFormData({
                        taikhoan: username,
                        idBlog: id,
                        noiDung: '',
                    })

                })
                .catch((error) => {
                    console.log(error)
                });

        } else {
            alert("Hãy nhập nội dung");
        }

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    return (
        <main>
            <div class="box__common">
                <div class="blog__content">
                    <h1 class="blog__title">Khám phá lộ trình học tiếng Anh cho người mất gốc</h1>
                    <div class="blog__content__img">
                        <img src="/img/blog1.jpg" alt="blog1" />
                    </div>
                    <p>
                        Sống trong thời đại hội nhập hiện nay, nếu vốn ngoại ngữ mà cụ thể là tiếng Anh
                        của bạn không tốt thì chắc chắn sẽ là rào cản. Bạn sẽ không thể có được những công việc với mức thu nhập như ý tại các tập đoàn lớn.
                        Nếu bạn đang tìm kiếm câu trả lời cho câu hỏi “Mất gốc tiếng Anh nên bắt đầu từ đâu?” Đừng bỏ qua bài viết dưới đây!
                    </p>
                    <h2>1. Tại sao bạn lại bị mất gốc tiếng Anh?</h2>
                    <p>
                        Mất gốc tiếng Anh là gì? Người mất gốc tiếng Anh nên bắt đầu từ đâu?
                        Ai cũng được học tiếng Anh từ nhỏ. Nhưng hiện nay nhiều người lại bị mất gốc tiếng Anh.
                        Vậy nguyên nhân của tình trạng này bắt đầu từ đâu? Chỉ khi hiểu được nguyên nhân bạn bị mất gốc thì bạn mới xây dựng được cho mình lộ trình học tiếng Anh hiệu quả.
                    </p>
                    <h3>1.1. Nguyên nhân chủ quan</h3>
                    <p>
                        Mất gốc tiếng Anh bắt đầu từ chính bản thân các bạn học sinh. Các bạn thiếu kiên nhẫn cũng như không xây dựng được tâm thế nghiêm túc với việc học tiếng Anh. Nhiều học sinh học lệch, không chú trọng đến môn tiếng Anh, học chỉ để đối phó. Chính vì vậy những kiến thức tiếng Anh cơ bản cũng không nắm được. Lâu dần, kiến thức ngày càng nhiều lên, các bạn sẽ cảm thấy sợ mỗi khi học tiếng Anh.

                        Ngoài ra, thiếu kiên nhẫn và quyết tâm cũng sẽ khiến cho việc học tiếng Anh gặp nhiều khó khăn. Như các bạn đã biết, tiếng Anh là bộ môn cần tích hợp đầy đủ các kỹ năng. Lượng kiến thức của môn học này khá lớn, bạn không thể học và nhớ được ngay. Học tiếng Anh là một quá trình. Nó đòi hỏi sự cần cù và kết hợp nhuần nhuyễn giữa lý thuyết với thực tế.

                        Nhiều bạn học sinh mặc dù xác định được vai trò cũng như tầm quan trọng của môn học này. Nhưng các bạn vẫn chấp nhận bỏ dở giữa chừng bởi không vượt qua được “độ lười” của bản thân. Vì vậy, mất gốc tiếng Anh là điều dễ hiểu.
                    </p>
                    <h3>1.2. Nguyên nhân khách quan</h3>
                    <p>
                        Ngoài nguyên nhân chủ quan thì việc mất gốc tiếng Anh ở các bạn trẻ hiện nay còn có một phần do nguyên nhân khách quan. Nguyên nhân này bắt nguồn từ cách giảng dạy và truyền đạt của giáo viên tại các trường Phổ thông.

                        Như chúng ta cũng biết, chương trình tiếng Anh trong giáo dục Phổ thông hiện nay khá nặng. Kiến thức nhiều kết hợp với phương pháp giảng dạy của giáo viên theo lối mòn, khô cứng khiến cho học sinh có cảm giác bị “ngột thở”. Chính vì vậy học sinh cảm thấy không hứng thú với các giờ học tiếng Anh. Cùng từ đó mà kiến thức ngày càng bị thui chột, mất gốc.
                    </p>
                    <h2>2. Lộ trình học tiếng Anh cho người mất gốc hiệu quả</h2>
                    <p>Những gợi ý này sẽ giúp giải quyết câu hỏi mất gốc tiếng Anh nên bắt đầu học từ đâu trong thời gian ngắn nhất.</p>
                    <h3>2.1. Xác định mục tiêu của việc học tiếng Anh?</h3>
                    <p>
                        Mất gốc tiếng Anh nên bắt đầu từ đâu? Bạn đang bị mất gốc tiếng Anh, nhưng bạn muốn học lại tiếng Anh từ đầu. Vậy bước đầu tiên là bạn phải xác định được mục đích của hành động. Bạn phải tự đặt ra và trả lời được câu hỏi “học tiếng Anh để làm gì?”, “Học tiếng Anh có tác dụng gì với cuộc sống và công việc của bạn sau này?”,…

                        Lúc này bạn sẽ biết được lộ trình học tiếng Anh của mình bắt đầu từ đâu. Bạn tiết kiệm được rất nhiều thời gian, chỉ tập trung vào mục đích cụ thể, tránh lan man. Phương pháp học tiếng Anh như thế nào để có hiệu quả nhất.

                    </p>
                    <h3>2.2. Lập kế hoạch cho lộ trình học tiếng Anh</h3>
                    <p>
                        Sau khi đã xác định được mục tiêu cụ thể của việc học tiếng Anh thì bước tiếp theo bạn cần xây dựng được kế hoạch cụ thể cho lộ trình học tiếng Anh của mình. Lộ trình học tiếng Anh của bạn trong khoảng thời gian là bao lâu? Kết quả bạn muốn nhận được sau quãng thời gian ấy là gì? Bạn sẽ dùng phương pháp học như thế nào để đạt kết quả cao nhất?

                        Sau khi đã trả lời được những câu hỏi cơ bản trên thì chắc chắn bạn sẽ thấy lộ trình học tiếng Anh cho người mất gốc không còn mông lung nữa. Và câu trả lời cho câu hỏi mất gốc tiếng Anh nên bắt đầu từ đâu  đang dần được hé lộ.

                        Ứng dụng học tiếng Anh Babie English sẽ dùng bạn đạt được mục tiêu trong thời gian sớm nhất. Với lộ trình học cụ thể được chia theo 3 cấp độ Sơ cấp - Trung cấp - Cao cấp, nhiều trò chơi, game học tiếng Anh thú vị, việc học tiếng Anh sẽ trở nên dễ dàng hấp dẫn hơn bao giờ hết.
                    </p>
                    <h3>2.3. Học bảng phiên âm IPA</h3>
                    <p>
                        Bước đầu tiên trong lộ trình tự học tiếng Anh cho người mất gốc chính là bạn phải chuẩn phát âm theo bảng phiên âm IPA. Bởi phát âm được coi là nền tảng giúp bạn nói rõ và giao tiếp thành thạo. Hãy học xem vị trí đặt lưỡi ở đâu, âm gió phát âm như thế nào? Bật hơi ra sao,…

                        Cách rèn kỹ năng này nhanh nhất chính là thông qua các chương trình bằng tiếng Anh hoặc các chương trình bạn yêu thích. Hãy kiên nhẫn nghe đi nghe đi nghe lại nhiều lần và tập theo họ thì chắc chắn phát âm của bạn sẽ sớm chuẩn như người bản địa. Khi tập nói, hãy đứng trước gương để kiểm tra và điều chỉnh khẩu hình của mình cho đúng.

                        Bên cạnh đó, hãy tạo cho mình thói quen ghi chép và sử dụng từ điển. Việc làm này sẽ giúp bạn ghi nhớ cũng như cải thiện những lỗi sai hay mắc phải trong khi phát âm.
                    </p>
                    <h3>2.4. Nắm vững ngữ pháp tiếng Anh</h3>
                    <p>
                        Mất gốc tiếng Anh nên bắt đầu từ đâu? Nhắc đến học ngữ pháp tiếng Anh chắc chắn nhiều bạn sẽ cảm thấy chán nản. Nhưng đây là bước không thể thiếu trong lộ trình học tiếng Anh cho người mất gốc.

                        Học ngữ pháp tiếng Anh không chỉ giúp bạn nói tốt, mà còn phục vụ cho các bạn thi lấy chứng chỉ như IELTS hoặc TOEIC. Cách học ngữ pháp tiếng Anh hiệu quả đó là đọc sách, xem phim, nghe và nói theo càng nhiều thì phản xạ ngôn ngữ càng nhanh.
                    </p>
                    <h3>2.5. Trau dồi từ vựng tiếng Anh</h3>
                    <p>
                        Học tiếng Anh không thể không học từ vựng. Có từ vựng thì bạn mới có thể giao tiếp được. Vì vậy, mất gốc tiếng Anh nên bắt đầu từ đâu? Câu trả lời đó là trau dồi vốn từ vựng hàng ngày. Bạn hãy đặt cho mình mục tiêu mỗi ngày học được bao nhiêu từ? Những từ đó thuộc chủ đề nào. Và cũng đừng quên ôn tập hàng ngày để tránh tình trạng “học trước quên sau”.

                        Hãy nhớ chuẩn bị cho mình cuốn từ điển, sổ ghi chép cũng như những tấm flashcard để ghi chép những từ khó nhớ. Học từ vựng bạn cũng đừng chỉ học đơn thuần 1 từ đó. Hãy đặt nó trong câu với những ngữ cảnh cụ thể để ghi nhớ tốt hơn. Cách này cũng giúp bạn rèn luyện thêm về ngữ pháp nữa đấy!
                    </p>
                    <h3>2.6. Luyện kỹ năng nghe Tiếng Anh</h3>
                    <p>Trong lộ trình tự học tiếng Anh tại nhà thì bạn nên luyện kỹ năng nghe tiếng Anh hàng ngày. Hãy áp dụng theo chia sẻ dưới đây để cải thiện khả năng nghe tiếng Anh của mình trong thời gian ngắn nhé.</p>
                    <h4>2.6.1. Nghe toàn bộ file</h4>
                    <p>Với bước này bạn sẽ biết được chủ đề bài nghe nói về cái gì. Cách người bản xứ phát âm, nhấn nhá ra sao? Trong nội dung bài nghe có cái gì là trọng tâm, cái gì là bổ sung cho nội dung trọng tâm đó. Với bước này bạn đừng dừng file lại và nghe từng câu nhé. Nếu như đã nghe đi nghe lại quá nhiều lần mà không nắm được chủ đề, hãy chuyển sang bài nghe phù hợp với trình độ của mình hơn.</p>
                    <h4>2.6.2. Ghi chép ý chính</h4>
                    <p>Khi nghe bạn nên chuẩn bị sẵn bút và giấy. Trong quá trình nghe hãy ghi chép lại những gì mà bạn cho là quan trọng. Nếu chưa nghe và ghi chép được thì bạn cũng đừng quá lo lắng. Bởi lúc này cũng chỉ là lúc chúng ta tổng hợp những thông tin đã nghe và hiểu.</p>
                    <h4>2.6.3. Ghi chép chi tiết</h4>
                    <p>Ở bước này bạn sẽ tiến hành nghe từ đầu với tốc độ chậm. Sau đó bạn chép lại cả câu nghe được. Hãy cố gắng chép thật chính xác những già người ta nói. Bước này vừa giúp bạn củng cố từ vựng, ngữ pháp, phát âm, lại vừa giúp bạn phát hiện lỗi sai để sửa ngay.</p>
                    <h4>2.6.4. Nghe và check lại</h4>
                    <p>
                        Ở bước này, bạn hãy đối kiểm tra bài mình nghe và viết lại với file gốc để xem chỗ nào mình chưa nghe được và cần phải sửa chữa.

                        Để tăng kỹ năng nghe, bạn nên nghe nhạc, xem phim hoặc những show truyền hình thực tế mỗi ngày nhé.
                    </p>
                    <h3>2.7. Rèn luyện kỹ năng nói tiếng Anh</h3>
                    <p>
                        Mất gốc tiếng Anh nên bắt đầu từ đâu? Việc rèn luyện kỹ năng nói tiếng Anh hàng ngày cũng sẽ giúp bạn rút ngắn thời gian của lộ trình học tiếng Anh cho người mất gốc. Nếu bắt đầu luyện nói, bạn đừng cố gắng nhồi nhét quá nhiều từ vựng và ngữ pháp trong cùng 1 câu. Thay vào đó, hãy nói những câu đơn giản với nội dung ngắn gọn, dễ hiểu.

                        Hãy nói từng cụm từ thay bằng việc bạn nói một câu tiếng Việt sau đó dịch sang tiếng Anh. Bởi ngữ pháp của tiếng Anh và tiếng Việt là khác nhau. Làm theo cách này càng khiến cho bạn ngại nói hơn.

                        Điều quan trọng hơn cả trong lộ trình học tiếng Anh tại nhà chính là bạn phải tự tạo cho mình được môi trường để giao tiếp. Bởi muốn nói tốt, phản xạ nhanh thì bạn hải giao tiếp. Bạn có thể tự lập nhóm để ôn luyện hoặc đến các trung tâm tiếng Anh để cải thiện và nâng cao khả năng giao tiếp của mình.
                    </p>
                    <h3>2.8. Luyện đọc tiếng Anh hàng ngày</h3>
                    <p>
                        Mất gốc tiếng Anh nên bắt đầu từ đâu? Để lộ trình học tiếng Anh của mình nhanh có hiệu quả, song song với các kỹ năng nghe và nói thì bạn cũng nên dành thời gian cho kỹ năng đọc. Đọc sẽ giúp bạn ghi nhớ được từ mới, phát âm lâu hơn, chuẩn hơn.

                        Bạn hãy đọc thật to, phát âm thật chậm rãi, thật chuẩn cho từng từ thay vì đọc thầm trong miệng. Bởi chỉ có đọc to mới giúp bạn phát hiện được những lỗi sai của mình. Đồng thời khi đọc to sẽ giúp bạn rèn luyện được sự tự tin trước đám đông.

                        Hãy luyện cho mình thói quen đọc bao quát. Bởi đọc sẽ giúp bạn hiểu được nội dung bảo quát mà văn bản muốn truyền tải. Trong những trường hợp gặp phải từ mới chưa biết nghĩa thì bạn hãy dịch nghĩa dựa trên ngữ cảnh câu đang nhắc đến và sau khi đọc xong bạn tra từ điển để biết nghĩa chính xác của nó.
                    </p>
                    <h3>2.9. Luyện kỹ năng viết</h3>
                    <p>
                        Trong lộ trình học tiếng Anh cho người mất gốc thì luyện viết là kỹ năng khó và rất quan trọng. Song song với các kỹ năng khác thì bạn cần luyện viết mỗi ngày. Viết tiếng Anh đòi hỏi sự kiên trì, nhẫn nại. Hãy bắt đầu từ những câu đơn giản. Viết những gì mình thấy hứng thú và muốn viết. Đừng bắt ép mình phải viết theo một khuôn mẫu nhất định nào cả.

                        Để viết tốt thì bạn cũng phải đọc thật nhiều. Khi vốn từ vựng phong phú, ngữ pháp nắm chắc trong tay thì bạn thoải mái viết những gì mình muốn mà không thua kém người bản xứ. Bạn có luyện viết hàng ngày bằng cách viết nhật ký hoặc chat với bạn bè bằng tiếng Anh.
                    </p>
                    <h2>3. Những bí quyết học tiếng Anh cho người mất gốc hoặc mới bắt đầu nên tham khảo</h2>
                    <p>Nếu bạn muốn học tiếng Anh, bạn đang mông lung với băn khoăn mất gốc tiếng Anh nên bắt đầu từ đâu? Những bí quyết dưới đây chắc chắn sẽ giúp bạn tự tin chinh phục bộ môn ngoại ngữ này.</p>
                    <h3>3.1. Học bằng tai, không học bằng mắt</h3>
                    <p>
                        Đây là một trong những bí quyết giúp bạn học tiếng Anh nhanh nhất. Chỉ khi nghe nói nhiều bạn sẽ nhanh thuộc, còn nhìn bằng mắt nhưng không thực hành thì bạn cũng không thể ghi nhớ lâu được.
                    </p>
                    <h3>3.2. Học sâu để nắm vững kỹ năng nói tiếng Anh</h3>
                    <p>Sau khi đã ghi nhớ được cách phát âm, nhớ được về từ vựng thì bạn cần luyện nói thật nhiều để thành thạo kỹ năng giao tiếp, hình thành cho mình phản xạ giao tiếp nhanh.</p>
                    <h3>3.3. Học bằng cả cơ thể</h3>
                    <p>Với nguyên tắc học tiếng Anh này, bạn không chỉ dùng đầu để ghi nhớ. Hãy dùng động tác để diễn đạt những gì bạn muốn nói. Hành động của cơ thể cũng giúp bạn ghi nhớ được kiến thức lâu hơn.</p>
                    <h3>3.4. Không học từ đơn lẻ, luôn học theo cụm từ</h3>
                    <p>Luôn đặt cụm từ vào trong ngữ cảnh cụ thể của nó để nói hoặc viết. Làm như vậy sẽ giúp bạn hoàn thiện kỹ năng viết và giao tiếp.</p>
                    <h3>3.5. Nghe rõ trả lời với Mini - Story</h3>
                    <p>Nguyên tắc này giúp bạn tăng khả năng tư duy cũng như phản xạ tiếng Anh. Trong các cuộc hội thoại, từ vựng tiếng Anh được sử dụng nhanh chóng mà không phải suy nghĩ đến ngữ pháp.</p>
                    <h3>3.6. Học tiếng Anh thực và tích cực</h3>
                    <p>Ở đây hướng đến phương pháp học tiếng Anh từ người bản xứ. Bạn có thể học qua sách báo, tạp chí của người bản địa. Hoặc bạn cũng có thể học tiếng Anh qua những thước phim, đoạn video do người bản xứ nói. Nhưng để đạt được hiệu quả cao nhất thì bạn hãy học những gì mình cảm thấy yêu thích và có hứng thú trước.</p>
                    <h3>3.7. Phát âm tiếng Anh chuẩn cùng IPA</h3>
                    <p>Đây là một trong những nguyên tắc tối quan trọng. Bởi bảng chữ cái IPA là nền tảng cho việc học từ vựng và phát âm sau này.</p>
                    <h3>3.8. Học phát âm bằng nguyên tắc nhập vai</h3>
                    <p>Đừng bao giờ học tiếng Anh một cách khô khan trên sách vở. Hãy biết vận dụng những kiến thức tiếng Anh ấy vào việc tự xây dựng nên các vở kịch hoặc các tình huống giao tiếp. Lúc này bạn sẽ thấy khả năng sử dụng từ vựng và giao tiếp của mình tăng lên đáng kể.</p>

                </div>
                <div class="blog__more">
                    <div class="blog__more__pad">
                        <h2 class="blog__more__title">Các bài viết khác</h2>
                    </div>
                    <div class="blog__more__content">
                        <div class="blog__more__content__img">
                            <img src="/img/blog5.jpg" alt="blog5" />
                        </div>
                        <p>7 mẹo học tiếng Anh hữu ích cho người mới bắt đầu</p>
                    </div>
                    <div class="blog__more__content">
                        <div class="blog__more__content__img">
                            <img src="/img/blog3.jpg" alt="blog5" />
                        </div>
                        <p>9 cách giúp bạn học tiếng Anh giao tiếp tại nhà</p>
                    </div>
                    <div class="blog__more__content">
                        <div class="blog__more__content__img">
                            <img src="/img/blog2.jpg" alt="blog5" />
                        </div>
                        <p>Tự tin giao tiếp Tiếng Anh với 3000 từ vựng thông dụng nhất</p>
                    </div>
                    <div class="blog__more__content">
                        <div class="blog__more__content__img">
                            <img src="/img/blog11.jpg" alt="blog5" />
                        </div>
                        <p>TOEIC là gì? Tất tần tật thông tin về chứng chỉ tiếng Anh</p>
                    </div>
                    <div class="blog__more__content">
                        <div class="blog__more__content__img">
                            <img src="/img/blog7.jpg" alt="blog5" />
                        </div>
                        <p>Chia động từ Tiếng Anh: Các quy tắc cơ bản cần biết</p>
                    </div>
                    <div class="blog__more__content">
                        <div class="blog__more__content__img">
                            <img src="/img/blog6.jpg" alt="blog5" />
                        </div>
                        <p>Lợi ích không ngờ từ việc cho trẻ em học tiếng Anh từ sớm</p>
                    </div>
                    <a class="blog__more__all" href=""><i>Xem tất cả blog...</i></a>
                </div>
            </div>
            <div>
                {username ? (
                    <form onSubmit={handleSubmit} className="user">
                        {/* <div className="user__logo">
                        <img src="/img/user.png" alt="user__logo" width={'100px'} />
                    </div> */}
                        <div className="user__comment">
                            <textarea name="noiDung" value={formData.noiDung} onChange={handleChange} id="" cols="50" rows="6" placeholder="Nhận xét !!!"></textarea>
                        </div>

                        <div>
                            <button type="submit" className="add__comment">Bình luận</button>
                        </div>
                    </form>
                ) : (
                    <div>
                        <h1 className='title__coment'>Đăng nhập để bình luận</h1>
                    </div>
                )}

            </div>
            <div className='danhgia_cmt'>
                {comments && comments.map(item => (
                    <div key={item.id}>
                        <span>{item.taiKhoan}: </span>
                        <span>{item.noiDung} </span>
                        <span>{moment(item.created_at).format('DD/MM/YYYY HH:mm:ss')}</span>
                    </div>
                ))}
            </div>
        </main >
    )
}

