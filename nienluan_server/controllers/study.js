const con = require('../configs/db')
const studyService = require('../service/study')
class Study {
    getListStudyByLevelId(req, res) {
        con.query(`SELECT * FROM chude where idCapDo = ${req.params.id}`, function (err, result, fields) {
            if (err) throw err;

            res.json(result)
        });
    }
    getStudyById(req, res) {
        con.query(`SELECT * FROM chude where id = ${req.params.id}`, function (err, result, fields) {
            if (err) throw err;

            res.json(result)
        });
    }

    async getExam(req, res) {
        let exam = [];
        try {
            const questions = await studyService.getQuestionByStudyId(req.params.id);
            const sum = await studyService.getCountQuestion(req.params.id);
            for (let i = 0; i < questions.length; i++) {
                let answers = await studyService.getAnswerByQuestionId(questions[i].id);
                exam.push({
                    question: questions[i].cauHoi,
                    answers,
                });
            }
            res.json({ exam, sum });
        } catch (error) {
            console.error('Lỗi trong quá trình xử lý:', error);
            res.status(500).json({ error: 'Lỗi trong quá trình xử lý' });
        }
    }
}

module.exports = new Study()