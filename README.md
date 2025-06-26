Amazing Plant Facts App
=======================

Project Description
-------------------

The Amazing Plant Facts App is a simple Single Page Application (SPA) built with HTML, CSS, and JavaScript. It allows users to explore fascinating facts about various plants. The application fetches its data from a local JSON server, acting as a mock API, and provides interactive features such as searching, filtering, and a "like" button for plant facts.

Features (Minimum Viable Product - MVP)
---------------------------------------

*   **View All Plants:** Upon loading, users can see a list of all available plant facts.
    
*   **Detailed Plant Information:** Each plant card displays the plant's name, type, a fun fact, care level, and an image.
    
*   **Search Functionality:** Users can search for plants by name or keywords present in their fun facts.
    
*   **Filter by Type:** Users can filter the displayed plants by specific categories (e.g., Flower, Tree, Succulent).
    
*   **Clear Filters:** A dedicated button to clear all applied search and filter criteria, reverting to the full list of plants.
    
*   **"Like" Interaction:** Users can click a "like" button on each plant card for a visual indication of their preference. (Note: Likes are not persisted in the MVP, but can be added as a stretch goal).
    

Technologies Used
-----------------

*   **HTML5:** For the structure and content of the web page.
    
*   **CSS3:** For styling and responsive design.
    
*   **JavaScript (ES6+):** For fetching data, dynamic content rendering, and user interactivity.
    
*   **JSON-Server:** A mock REST API used to serve the plant data from a local db.json file.
    

Setup and Installation
----------------------

To get this project up and running on your local machine, follow these steps:

1.  git clone cd Otherwise, ensure all your project files (index.html, style.css, script.js, db.json) are in one directory.
    
2.  npm install -g json-server
    
3.  {"plants": \[{"id": 1,"name": "Sunflower","type": "Flower","funFact": "Sunflowers track the sun across the sky, a phenomenon called heliotropism.","careLevel": "Easy","imageUrl": "https://placehold.co/300x180/4CAF50/FFFFFF?text=Sunflower"},{"id": 2,"name": "Oak Tree","type": "Tree","funFact": "An oak tree can live for hundreds of years and its acorns are a vital food source for wildlife.","careLevel": "Moderate","imageUrl": "https://placehold.co/300x180/8BC34A/FFFFFF?text=Oak+Tree"},{"id": 3,"name": "Venus Flytrap","type": "Carnivorous Plant","funFact": "The Venus Flytrap catches its insect prey by snapping its leaves shut.","careLevel": "Hard","imageUrl": "https://placehold.co/300x180/FF5722/FFFFFF?text=Venus+Flytrap"},{"id": 4,"name": "Aloe Vera","type": "Succulent","funFact": "Aloe Vera gel is widely used in cosmetics and alternative medicine for its soothing properties.","careLevel": "Easy","imageUrl": "https://placehold.co/300x180/CDDC39/FFFFFF?text=Aloe+Vera"},{"id": 5,"name": "Mint","type": "Herb","funFact": "Mint is a fast-growing herb known for its strong, refreshing aroma and flavor.","careLevel": "Easy","imageUrl": "https://placehold.co/300x180/A7D9B4/333333?text=Mint"}\]}_(Remember to replace placehold.co URLs with actual image URLs if you wish.)_
    
4.  json-server --watch db.jsonThis will start a local server, usually on http://localhost:3000. You should see output indicating the routes available (e.g., http://localhost:3000/plants). Keep this terminal window open while you are using the app.
    
5.  **Open the Application:**Open your index.html file in your web browser. If you're using a VS Code extension like Live Server, simply right-click index.html and select "Open with Live Server." Otherwise, navigate to http://localhost:3000 (or the specific URL json-server provides for /) directly in your browser.
    

Usage
-----

*   **Browse Plants:** Upon opening the app, all plant facts will be displayed.
    
*   **Search:** Use the "Search plants by name..." input field to type keywords and filter the list. The list will update as you type.
    
*   **Filter by Type:** Use the "All Types" dropdown to select a specific plant type and view only plants of that category.
    
*   **Clear Filters:** Click the "Clear Filters" button to remove any search terms or type filters and display all plants again.
    
*   **Like:** Click the ❤️ button on any plant card to toggle its "liked" status (visual only for MVP).
    

Data Structure (db.json)
------------------------

The db.json file is structured as follows:

{"plants": \[{"id": \[NUMBER\], // Unique identifier for the plant"name": "\[STRING\]", // Name of the plant (e.g., "Sunflower")"type": "\[STRING\]", // Category of the plant (e.g., "Flower", "Tree")"funFact": "\[STRING\]", // An interesting fact about the plant"careLevel": "\[STRING\]", // Level of care required (e.g., "Easy", "Moderate", "Hard")"imageUrl": "\[STRING\]" // URL of an image for the plant}// ... more plant objects\]}

Future Enhancements (Stretch Goals)
-----------------------------------

*   **Persist Likes:** Implement PATCH requests to json-server to save the "liked" status of plants.
    
*   **Add/Edit Plants:** Create a form to allow users to add new plant facts or edit existing ones.
    
*   **Delete Plants:** Add functionality to remove plant facts.
    
*   **More Filters:** Implement additional filtering options (e.g., by care level).
    
*   **Sorting:** Add options to sort plants (e.g., alphabetically by name).
    
*   **Animations:** Enhance existing CSS transitions and add new animations for a more dynamic feel.
    

License
-------

This project is open source and available under the [MIT License](LICENSE).