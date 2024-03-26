const commentService = require('../service/comment')
class Comment {
    async findAllByIdBlog(req, res) {
        const id = req.params.id
        const comments = await commentService.findAllByIdBlog(id)
        res.json(comments)
    }

    async insertComment(req, res) {
        const { taikhoan, idBlog, noiDung } = req.body
        const result = await commentService.insertComment(taikhoan, idBlog, noiDung)
        res.json(result)

    }
}
module.exports = new Comment()