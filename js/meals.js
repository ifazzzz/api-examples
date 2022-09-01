const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
     .then(res => res.json())
     .then(data => displayMeal(data.meals))
}

const displayMeal = (meals) => {
      const mealContainer = document.getElementById('meal-container');
      mealContainer.innerText = '';
      meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML =`
        <div onclick="viewDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        mealContainer.appendChild(mealDiv);
      })
}

const searchMeal = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    loadMeal(searchValue);
    searchField.value = '';
}
const viewDetails = mealId => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=(${mealId})`
    //   console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.meals[0]))
}

const displayDetails = meal =>{
     const detailContainer = document.getElementById('detail-container');
     detailContainer.innerHTML = ``;
     const mealDiv = document.createElement('div');
     mealDiv.classList.add('card');
     mealDiv.innerHTML =`
     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
     `;
     detailContainer.appendChild(mealDiv);
}

loadMeal('');