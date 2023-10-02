import { ILivro } from "../../../screens/Listar";
import { api } from "../../api";

class LivroData {
    index() {
        return api.get<ILivro[]>('/livro')
    }
    store(data: ILivro) {
        return api.post('/livro', data)
    }
    delete(id: number) {
        return api.delete(`/livro/${id}`)
    }
}
export default new LivroData()
