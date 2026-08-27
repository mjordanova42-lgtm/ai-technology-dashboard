const insightText = document.getElementById("insight-text");
const insightButton = document.getElementById("insight-button");
const errorMessage = document.getElementById("error-message");
const saveButton = document.getElementById("save-button");
const savedInsights = document.getElementById("saved-insights");


async function fetchInsight() {
    try {
        insightText.textContent = "Loading...";
        errorMessage.textContent = "";
        insightButton.disabled = true;

        const response = await fetch("https://api.adviceslip.com/advice");

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        displayInsight(data.slip.advice);

    } catch (error) {
        showError();
    } finally {
        insightButton.disabled = false;
    }
}


function displayInsight(insight) {
    insightText.textContent = `"${insight}"`;
    saveButton.disabled = false;
}


function showError() {
    insightText.textContent = "";
    errorMessage.textContent =
        "Unable to load an insight. Please try again.";
}


function saveInsight() {
    const insight = insightText.textContent;

    if (!insight || insight.includes("Click generate")) {
        return;
    }

    const saved =
        JSON.parse(localStorage.getItem("savedInsights")) || [];

    const newInsight = {
        text: insight,
        savedAt: new Date().toLocaleString()
    };

    saved.push(newInsight);

    localStorage.setItem(
        "savedInsights",
        JSON.stringify(saved)
    );

    displaySavedInsights();
}


function displaySavedInsights() {
    const saved =
        JSON.parse(localStorage.getItem("savedInsights")) || [];

    if (saved.length === 0) {
        savedInsights.innerHTML = `
            <div class="empty-state">
                <span>♡</span>
                <p>No saved insights yet.</p>
                <small>
                    Generate an insight and save the ones you find interesting.
                </small>
            </div>
        `;
        return;
    }

    savedInsights.innerHTML = saved
        .map((insight, index) => `
            <div class="saved-item">
                <span>${String(index + 1).padStart(2, "0")}</span>

                <div class="saved-content">
                    <p>${insight.text}</p>
                    <small>Saved ${insight.savedAt}</small>
                </div>

                <button
                    class="delete-button"
                    onclick="deleteInsight(${index})">
                    Delete
                </button>
            </div>
        `)
        .join("");
}


function deleteInsight(index) {
    const saved =
        JSON.parse(localStorage.getItem("savedInsights")) || [];

    saved.splice(index, 1);

    localStorage.setItem(
        "savedInsights",
        JSON.stringify(saved)
    );

    displaySavedInsights();
}


insightButton.addEventListener("click", fetchInsight);

saveButton.addEventListener("click", saveInsight);

displaySavedInsights();