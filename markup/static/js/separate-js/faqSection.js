var faqList = document.getElementById('faqQuestionsList-js');
var faqExpandLink = document.getElementById('faqExpandLink-js');

faqExpandLink.onclick = function(event) {
    event.preventDefault();

    for (var count = 0; count < faqList.querySelectorAll("input").length; count ++) {
        faqList.querySelectorAll("input").item(count).checked = true;
    }
}