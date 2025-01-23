function searchExperiments(query) {
    const experimentBoxes = document.querySelectorAll('.experiment1_1, .experiment1_2, .experiment1_3, .experiment2_1, .experiment2_2, .experiment2_3, .experiment3_1, .experiment3_2, .experiment3_3');
    
    // Loop through each experiment box and check for the search term in titles and paragraphs
    experimentBoxes.forEach(function (box) {
        const title = box.querySelector('h2');
        const description = box.querySelector('p');

        // Clear previous highlights
        title.innerHTML = title.innerHTML.replace(/<span class="highlight">.*?<\/span>/g, title.textContent);
        if (description) {
            description.innerHTML = description.innerHTML.replace(/<span class="highlight">.*?<\/span>/g, description.textContent);
        }

        // Check if the query matches any part of the title or description
        if (title.textContent.toLowerCase().includes(query) || (description && description.textContent.toLowerCase().includes(query))) {
            // Show the box
            box.style.display = 'block';

            // Highlight the matching text
            if (title.textContent.toLowerCase().includes(query)) {
                const regEx = new RegExp(query, 'gi');
                title.innerHTML = title.textContent.replace(regEx, `<span class="highlight">${query}</span>`);
            }
            if (description && description.textContent.toLowerCase().includes(query)) {
                const regEx = new RegExp(query, 'gi');
                description.innerHTML = description.textContent.replace(regEx, `<span class="highlight">${query}</span>`);
            }
        } else {
            // Hide the box if no match
            box.style.display = 'none';
        }
    });
}
