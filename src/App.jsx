
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>🍽️ FoodieStudents</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#recipes">Recipes</a>
          <a href="#budget">Budget Meals</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <h1>Good Food, Happy Students!</h1>
        <p>
          Discover delicious recipes and affordable meals
          made especially for students.
        </p>
        <a href="#recipes" className="hero-btn">
          Explore Recipes
        </a>
      </section>

      <section className="recipes" id="recipes">
        <h2>Explore Our Food Categories</h2>

        <div className="food-cards">
          <div className="food-card">
            <h3>🥞 Breakfast</h3>
            <p>Healthy morning meals.</p>
          </div>

          <div className="food-card">
            <h3>🍛 Lunch</h3>
            <p>Delicious filling meals.</p>
          </div>

          <div className="food-card">
            <h3>🍜 Dinner</h3>
            <p>Easy dinner ideas.</p>
          </div>

          <div className="food-card">
            <h3>🍟 Snacks</h3>
            <p>Quick bites for study breaks.</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">

<section className="featured" id="budget">
  <h2>Popular Student Meals</h2>
  <p className="section-subtitle">
    Delicious food that won't empty your pocket!
  </p>

  <div className="recipe-grid">
    <div className="recipe-card">
      <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600" alt="Vegetable rice" />
      <div className="recipe-info">
        <h3>Vegetable Rice</h3>
        <p>Easy, healthy and perfect for lunch.</p>
        <span>₹40 - ₹50</span>
      </div>
    </div>

    <div className="recipe-card">
      <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600" alt="Pizza" />
      <div className="recipe-info">
        <h3>Homemade Pizza</h3>
        <p>A tasty treat for your evening snack.</p>
        <span>₹60 - ₹80</span>
      </div>
    </div>

    <div className="recipe-card">
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600" alt="Healthy salad" />
      <div className="recipe-info">
        <h3>Healthy Salad</h3>
        <p>Fresh and nutritious student meal.</p>
        <span>₹30 - ₹40</span>
      </div>
    </div>
  </div>
</section>

        <h2>About FoodieStudents</h2>
        <p>
          Helping students discover tasty,
          simple and budget-friendly food.
        </p>
      </section>

      <footer>
        © 2026 FoodieStudents | Made with ❤️
      </footer>
    </div>
  )
}

export default App
