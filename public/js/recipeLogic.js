const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#recipe-name').value.trim();
    const ingredients = document.querySelector('#recipe-ingredients').value.trim();
    const description = document.querySelector('#recipe-description').value.trim();
    const category = document.querySelector('#recipe-category').value.trim();
  
    if (name && ingredients && description && category) {
      const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({ name, ingredients, description, category }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/createrecipe');
      } else {
        alert('Failed to create recipe');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/recipes/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/createrecipe');
      } else {
        alert('Failed to delete recipe');
      }
    }
  };
  
  document
    .querySelector('.new-recipe-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
  