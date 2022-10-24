import axios from 'axios';

const API_KEY = '29464761-8707926121d1c682f07c18901';
const options = 'image_type=photo&orientation=horizontal';
export const HITS_PAGE = 12;
axios.defaults.baseURL = `https://pixabay.com/api`;


export const fetchApi = async ({ name, page }) => {
   const resp = await axios.get(
      `/?key=${API_KEY}&${options}&page=${page}&per_page=${HITS_PAGE}&q=${name}`
   );
   return { items: resp.data.hits, total: resp.data.total };
}


