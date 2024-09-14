// Select the form and output container elements
var form = document.getElementById('resumeForm');
var outputContainer = document.getElementById('resumeOutput');
// Add event listener to the form submission
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Extract input values from the form fields
    var profilePicture = (_a = document.getElementById('profilePicture').files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePicture ? URL.createObjectURL(profilePicture) : '';
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('exprience').value;
    var skills = document.getElementById('skills').value;
    // Create the resume HTML string
    var resumeHTML = "\n    <h2>Resume</h2>\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile Picture\" class=\"profilePicture\">") : '', "\n    <p><strong>Name:</strong><span id=\"edit-name\" class=\"editable\"> ").concat(name, " </span></p>\n    <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span></p>\n    <p><strong>Phone:</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span></p>\n    <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n    <h3>Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n  ");
    // Insert the resume HTML into the output container
    outputContainer.innerHTML = resumeHTML;
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // replace content
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
