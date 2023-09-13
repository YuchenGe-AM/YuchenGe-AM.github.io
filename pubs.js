// Define your BibTeX data as a string (you can also load it from a file).
var bibTeXData = `
@article{groebner_2023,
    year = {2023},
    eprint = {2303.06724},
    archivePrefix = {arXiv},
    primaryClass = {90C15},
    url = {https://arxiv.org/abs/2303.06724},
    author = "Yuchen Ge",
    title = {Gröbner and Graver Bases for Calculating Opportunity Cost Matrices}
}

@conference{deeplearning_2022,
    title = {Breast Cancer Classification Based on Various CNNs and Classifiers},
    booktitle = {2022 International Symposium on Advances in Informatics, Electronics and Education (ISAIEE)},
    author = "Yuchen Ge",
    year = {2022},
    url = {https://ieeexplore.ieee.org/document/10071319/authors#authors}
}
`;

// Parse BibTeX data into a JavaScript object
var parsedBibTeX = bibtexParse.toJSON(bibTeXData);

// Function to create HTML for a publication entry
function createPublicationHTML(entry) {
    return `
    <li>
        <strong>${entry.entryTags.title}</strong><br>
        ${entry.entryTags.author}<br>
        Year: ${entry.entryTags.year}<br>
        <a href="${entry.entryTags.url}" target="_blank">Link</a>
    </li>
    `;
}

// Add publication entries to the publication list
var publicationList = document.getElementById("publication-list");
parsedBibTeX.forEach(function (entry) {
    publicationList.innerHTML += createPublicationHTML(entry);
});



