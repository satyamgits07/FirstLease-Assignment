const freelanceLink = document.getElementById('freelanceLink');
const freelanceDropdown = document.getElementById('freelanceDropdown');

freelanceLink.addEventListener('click', function(e) {
  e.preventDefault();
  const isVisible = freelanceDropdown.style.display === 'flex';
  freelanceDropdown.style.display = isVisible ? 'none' : 'flex';
  freelanceDropdown.style.flexDirection = 'column';
});


document.addEventListener('click', function(e) {
  if (!freelanceLink.contains(e.target) && !freelanceDropdown.contains(e.target)) {
    freelanceDropdown.style.display = 'none';
  }
});

const minRange = document.getElementById('minRange');
const maxRange = document.getElementById('maxRange');
const minPrice = document.getElementById('min-price');
const maxPrice = document.getElementById('max-price');

minRange.addEventListener('input', () => {
  let value = parseInt(minRange.value);
  minPrice.textContent = `Rs.${value.toLocaleString()}`;
});





// fetch('./models.json')
//   .then(response => response.json())
//   .then(data => {
//     const container = document.querySelector('.cards-container');
//     container.innerHTML = '';
//     data.forEach(model => {
//       let discountSection = '';
//       if (model.oldPrice && model.discount) {
//         discountSection = `
//           <span class="old">Rs.${model.oldPrice.toLocaleString()}</span>
//           <span class="off">(${model.discount} Off)</span>
//         `;
//       }
//       container.innerHTML += `
//         <div class="card">
//           <img src="${model.image}" alt="${model.name}">
//           <h4>3D Model</h4>
//           <p class="flight-name">${model.name}</p>
//           <p class="price">
//             Rs.${model.price.toLocaleString()} ${discountSection}
//           </p>
//           <p class="format">${model.formats.join(', ')}</p>
//         </div>
//       `;
//     });
//   })
//   .catch(err => {
//     console.error('Error loading JSON:', err);
//   });

