import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('discover');
  const [calories, setCalories] = useState(2000);
  const [dietaryPreferences, setDietaryPreferences] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    keto: false,
    paleo: false,
  });

  const feedData = [
    {
      id: 1,
      recipeName: 'Shahi Paneer',
      imageUrl: 'https://example.com/shahiPaneer.jpg',
      description: 'A royal, creamy North Indian curry made with paneer.',
      servings: 4,
    },
    {
      id: 2,
      recipeName: 'Chowmein',
      imageUrl: 'https://example.com/chowmein.jpg',
      description: 'Delicious stir-fried noodles with vegetables and sauce.',
      servings: 2,
    },
    {
      id: 3,
      recipeName: 'Momos',
      imageUrl: 'https://example.com/momos.jpg',
      description: 'Steamed dumplings filled with vegetables or meat.',
      servings: 3,
    },
  ];

  const eventsData = [
    {
      id: 1,
      title: 'Food Tasting Event',
      date: '2024-12-01',
      description: 'A fun and exciting food tasting event. Join us for a day of delicious bites!',
    },
    {
      id: 2,
      title: 'Cooking Workshop',
      date: '2024-12-10',
      description: 'Learn how to cook your favorite dishes from scratch in this hands-on workshop.',
    },
  ];

  const handleSliderChange = (event) => {
    setCalories(event.target.value);
  };

  const toggleDietaryPreference = (preference) => {
    setDietaryPreferences((prev) => ({
      ...prev,
      [preference]: !prev[preference],
    }));
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <h1>BiteBuddy</h1>
        </div>
        <div className="header-center">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="header-right">
          <button className="login-btn">Login</button>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="tabs">
        <button
          className={activeTab === 'discover' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveTab('discover')}
        >
          Discover
        </button>
        <button
          className={activeTab === 'community' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveTab('community')}
        >
          Community
        </button>
        <button
          className={activeTab === 'mealPlan' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveTab('mealPlan')}
        >
          Meal Plan
        </button>
        <button
          className={activeTab === 'profile' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'discover' && (
          <section className="discover">
            <h2>Personalized Recommendations</h2>
            <div className="feed-container">
              {feedData.map((recipe) => (
                <div key={recipe.id} className="feed-item">
                  <h3>{recipe.recipeName}</h3>
                  <div className="image-box">
                    <img src={recipe.imageUrl} alt={recipe.recipeName} className="recipe-image" />
                  </div>
                  <div className="recipe-details">
                    <p>{recipe.description}</p>
                    <p><strong>Servings:</strong> {recipe.servings}</p>
                    <div className="feed-actions">
                      <button className="like-btn">❤️ Like</button>
                      <button className="comment-btn">💬 Comment</button>
                      <button className="share-btn">🔗 Share</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'community' && (
          <section className="community">
            <h2>Community Feed</h2>
            <div className="community-feed-container">
              <div className="community-post-box">
                <div className="community-post">
                  <div className="post-header">
                    <h3>Great Recipe to Try</h3>
                  </div>
                  <div className="post-content">
                    <div className="image-box">
                      <img src="https://example.com/communityPost1.jpg" alt="Recipe Post" />
                    </div>
                    <p>This is a great recipe to try with your family and friends!</p>
                    <div className="post-actions">
                      <button className="like-btn">❤️ Like</button>
                      <button className="comment-btn">💬 Comment</button>
                      <button className="share-btn">🔗 Share</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="community-post-box">
                <div className="community-post">
                  <div className="post-header">
                    <h3>Food Tasting Event</h3>
                  </div>
                  <div className="post-content">
                    <div className="image-box">
                      <img src="https://example.com/communityPost2.jpg" alt="Event Post" />
                    </div>
                    <p>Join us for a fun-filled food tasting event with various cuisines!</p>
                    <div className="post-actions">
                      <button className="like-btn">❤️ Like</button>
                      <button className="comment-btn">💬 Comment</button>
                      <button className="share-btn">🔗 Share</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <h2>Upcoming Events</h2>
            <div className="upcoming-events">
              {eventsData.map((event) => (
                <div key={event.id} className="event-box">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <p><strong>Date:</strong> {event.date}</p>
                  <button className="rsvp-btn">RSVP</button>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'mealPlan' && (
          <section className="mealPlan">
            <h2>This is a weekly meal planner</h2>
            <p>It has 7 boxes horizontally, one for each day of the week. Each box has a plus sign in it, indicating that you can add a meal to that day. The planner also has a button that says "Generate Meal Plan". You can use this planner to plan out what you want to eat each day of the week.</p>
            <div className="meal-plan-container">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <div key={day} className="meal-day">
                  <div className="meal-box">
                    <button className="add-meal-btn">+</button>
                  </div>
                  <p>{day}</p>
                </div>
              ))}
            </div>
            <button className="generate-btn">Generate Meal Plan</button>

            {/* Dietary Preferences Section */}
            <div className="dietary-preferences">
              <h3>Dietary Preferences</h3>
              <label htmlFor="calories">Adjust Your Daily Calorie Intake:</label>
              <input
                type="range"
                id="calories"
                name="calories"
                min="1000"
                max="3000"
                value={calories}
                onChange={handleSliderChange}
                className="calories-slider"
              />
              <p>{calories} Calories</p>

              <div className="dietary-buttons">
                {['vegetarian', 'vegan', 'glutenFree', 'dairyFree', 'keto', 'paleo'].map((diet) => (
                  <button
                    key={diet}
                    className={dietaryPreferences[diet] ? 'dietary-btn active' : 'dietary-btn'}
                    onClick={() => toggleDietaryPreference(diet)}
                  >
                    {diet.charAt(0).toUpperCase() + diet.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Profile Tab Content */}
        {activeTab === 'profile' && (
          <section className="profile">
            <h2>User Profile</h2>
            <div className="profile-card">
              <div className="profile-header">
                <img
                  src="https://example.com/johnDoeProfile.jpg"
                  alt="John Doe"
                  className="profile-photo"
                />
                <div className="profile-info">
                  <h3>John Doe</h3>
                  <p>Food Enthusiast</p>
                  <div className="profile-stats">
                    <p><strong>250</strong> Recipes Tried</p>
                    <p><strong>50</strong> Recipes Shared</p>
                    <p><strong>1000</strong> Followers</p>
                  </div>
                  <div className="achievements">
                    <div className="achievement">
                      <span role="img" aria-label="Master Chef">👨‍🍳</span>
                      <p>Master Chef</p>
                    </div>
                    <div className="achievement">
                      <span role="img" aria-label="Flavor Explorer">🌶️</span>
                      <p>Flavor Explorer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Activity */}
            <h3>Your Activity</h3>
            <div className="activity-feed">
              <div className="activity-item">
                <span role="img" aria-label="new-recipe">🍽️</span>
                <p><strong>You tried a new recipe:</strong> Spicy Thai Basil Chicken. A flavorful and aromatic dish, perfect for spice lovers!</p>
              </div>
              <div className="activity-item">
                <span role="img" aria-label="review">📝</span>
                <p><strong>You left a review:</strong> Italian restaurant 'La Dolce Vita'. A delightful experience with delicious pasta dishes.</p>
              </div>
              <div className="activity-item">
                <span role="img" aria-label="badge">🏅</span>
                <p><strong>You earned a badge:</strong> Flavor Explorer. Awarded for your adventurous palate and love for exploring new cuisines!</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
