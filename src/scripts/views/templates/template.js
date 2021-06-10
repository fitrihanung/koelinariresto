import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Restaurant Name :</h4>
    <p>${restaurant.name}</p>
    <h4>Restaurant City :</h4>
    <p>${restaurant.city}</p>
    <h4>Rating :</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
`;

const createRestoItemTemplate = (restaurant) => `
  <div class="restaurant-items">
    <div class="restaurant-items__header">
      <img class="restaurant-items__header__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId} alt="${restaurant.name}" />
      <div class="restaurant-items__header__rating">
        <p>⭐️<span class="restaurant-items__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-items__content">
      <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
      <p>${restaurant.descripton}</p>
    </div>
  </div>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
};
