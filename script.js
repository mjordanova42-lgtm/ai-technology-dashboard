const insightText = document.getElementById("insight-text");
const insightButton = document.getElementById("insight-button");
const errorMessage = document.getElementById("error-message");

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
}

function showError() {
    insightText.textContent = "";
    errorMessage.textContent =
        "Unable to load an insight. Please try again.";
}

insightButton.addEventListener("click", fetchInsight);