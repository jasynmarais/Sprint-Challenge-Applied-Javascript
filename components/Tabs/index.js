// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function topicComponent(topic) {
    // Add element
    const tab = document.createElement('div');

    // Add classes and textContent
    tab.classList.add('tab');
    tab.textContent = topic;

    // Add to the DOM
    document.querySelector('.topics').appendChild(tab);

    // Return component
    return tab;
}