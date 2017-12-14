import api from "./init";

export function getBreeds() {
  return api.get("/breeds").then(res => res.data);
}

export function newBreed(data) {
  return api.post("/breeds", data).then(res => res.data);
}

export function deleteBreed(id) {
  return api.delete(`/breeds/${id}`).then(res => res.data);
}
export function updateBreed(id, data) {
  return api.patch(`/breeds/${id}`, data).then(res => res.data);
}
