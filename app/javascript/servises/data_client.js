import axios from "axios";

class DataClientServise {
  get_all_boards() {
    return axios.get("/api/v1/boards");
  }

  get_board(id) {
    return axios.get(`/api/v1/boards/${id}`);
  }

  createBoard(data) {
    return axios.post("/api/v1/boards/", data);
  }

  update(id, data) {
    return axios.put(`/api/v1/boards/${id}`, data);
  }

  delete(id) {
    return axios.delete(`/api/v1/boards/${id}`);
  }

  get_all_columns() {
    return axios.get("/api/v1/columns")
  }

  get_column(id) {
    return axios.get(`/api/v1/columns/${id}`);
  }

  createColumn(data) {
    return axios.post(`/api/v1/columns/`, data);
  }

  deleteColumn(id) {
    return axios.delete(`/api/v1/columns/${id}`)
  }

  createCard(data) {
    return axios.post(`/api/v1/cards/`, data);
  }

  changeCardName(id, new_name) {
    return axios.patch(`/api/v1/cards/${id}`, {title: new_name})
  }

  deleteCard(id) {
    return axios.delete(`/api/v1/cards/${id}`)
  }
}

export default new DataClientServise();
