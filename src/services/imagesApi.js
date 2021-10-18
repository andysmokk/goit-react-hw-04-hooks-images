const BASE_URL = 'https://pixabay.com/api/';
const KEY = '23025169-5a1370e5bf826cff1ac1e8732';

function fetchImages(name, page) {
  return fetch(
    `${BASE_URL}?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => response.json());
}

const api = {
  fetchImages,
};

export default api;
