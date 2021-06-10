import UrlParser from '../../routes/url-parser';
import RestoDataSource from '../../data/resto-datasource';
import { createRestoDetailTemplate } from '../templates/template';

const Detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
      <div id="restaurant" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoDataSource.detailResto(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);
  },
};

export default Detail;
