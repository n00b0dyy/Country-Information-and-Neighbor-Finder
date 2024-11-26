---

# **Country Information and Neighbor Finder**

## **Overview**

This project is a concept web application designed to fetch and display country information, including details about a random neighboring country. It uses the **REST Countries API** for retrieving real-time data and is built as an exercise to practice the following concepts:

- **Asynchronous JavaScript** with `fetch` for API calls.
- Error handling for robust application behavior.
- Implementing **responsiveness** for different screen sizes, focusing on small screens.
- Dynamic DOM manipulation using JavaScript.

The app is designed mainly for learning purposes but it is functional and responsive, providing a seamless user experience on devices of various screen sizes. As I'm still learning, the app is quite simplistic. 

---

**Dynamic Rendering**

- Country details are fetched and displayed dynamically in beautifully styled cards.
- If the country has neighbors, a random neighbor is fetched and displayed below the main country card.

**Error Handling**

- If you try to use special charafters or numbers, entered country name is invalid or if there are no neighbors, an error message appears at the top of the page and disappears automatically.

## **Technologies Used**

- **HTML5**: For the app's structure.
- **CSS3**: For styling and responsive design.
- **JavaScript (ES6)**: For asynchronous operations, API integration, and DOM manipulation.

---

## **How to Use**

1. Clone the repository or download the files.
2. Open the `index.html` file in your browser.
3. Click the button to fetch country data.
4. Try to use letters or special characters (2323, ##, ! etc. ) invalid inputs (xsxxssxx, nonameland etc.) or countries without neighbors (Australia, Japan) to test error handling.

## **Future Improvements**

- Add a search bar for user input.
- Display multiple neighboring countries instead of one.
- Add animations for better visual feedback.
- Improve accessibility with ARIA roles and labels.

---

Feel free to explore, modify, and experiment with the code to deepen your knowledge.

---
