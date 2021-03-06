import http from "../http-common";

class JobPostDataService {
  getAll() {
    return http.get("/jobPosts");
  }

  get(id) {
    return http.get(`/jobPosts/${id}`);
  }

  create(data) {
    return http.post("/jobPosts", data);
  }

  update(id, data) {
    return http.put(`/jobPosts/${id}`, data);
  }

  delete(id) {
    return http.delete(`/jobPosts/${id}`);
  }

  deleteAll() {
    return http.delete(`/jobPosts`);
  }

  findByTitle(title) {
    return http.get(`/jobPosts?title=${title}`);
  }
}

export default new JobPostDataService();