import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import { RecipeContext } from '../Context/RecipeContext';

const Favorite = () => {
  const { recipes, favorites } = useContext(RecipeContext);

  // If recipes or favorites are not available, return null to avoid rendering errors
  if (!recipes || !favorites) return null;

  return (
    <div className="favorites mt-5">
      <h4 className="text-black font-bold text-[1.2em] my-10 pb-3 border-b-2 border-red-600 inline-block">Favorite Recipes</h4>
      <div className="row">
        {Object.keys(favorites).map((index) => {
          if (!favorites[index]) return null; // Skip non-favorite recipes
          const recipe = recipes[index]?.recipe;
          if (!recipe) return null; // Skip if recipe data is not available

          return (
            <Col lg='3' md='4' sm='6' xs='12' className="mb-5" key={index}>
              <div className="recipe-item bg-white shadow-lg rounded-md overflow-hidden">
                <img src={recipe.image} alt={recipe.label} className="w-full h-60 object-cover" />
                <div className="p-2 text-center">
                  <h5 className="text-xl font-semibold">{recipe.label}</h5>
                  <Link to='/' className='no-underline text-xs btn btn-danger mt-2'>Get Recipe</Link>
                </div>
              </div>
            </Col>
          );
        })}
      </div>
    </div>
  );
};

export default Favorite;

