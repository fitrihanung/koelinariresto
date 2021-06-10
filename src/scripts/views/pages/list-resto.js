import RestoDataSource from '../../data/resto-datasource';
import { createRestoItemTemplate } from '../templates/template';

const ListResto = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">List Restaurant</h2>
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurant = await RestoDataSource.listRestoCulinarys();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurant.forEach((restaurants) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurants);
    });
  },

};

export default ListResto;
