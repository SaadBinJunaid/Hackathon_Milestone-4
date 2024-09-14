// Select the form and output container elements
const form = document.getElementById('resumeForm') as HTMLFormElement;
const outputContainer = document.getElementById('resumeOutput') as HTMLDivElement;

// Add event listener to the form submission
form.addEventListener('submit', (event) => {
event.preventDefault();

  // Extract input values from the form fields
  const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).files?.[0];
  const profilePictureURL = profilePicture ? URL.createObjectURL(profilePicture) : '';
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('exprience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Create the resume HTML string
  const resumeHTML = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile Picture" class="profilePicture">` : ''}
    <p><strong>Name:</strong><span id="edit-name" class="editable"> ${name} </span></p>
    <p><strong>Email:</strong><span id="edit-email" class="editable"> ${email} </span></p>
    <p><strong>Phone:</strong><span id="edit-phone" class="editable"> ${phone} </span></p>
    <h3>Education</h3>
    <p id="edit-education" class="editable">${education}</p>
    <h3>Experience</h3>
    <p id="edit-experience" class="editable">${experience}</p>
    <h3>Skills</h3>
    <p id="edit-skills" class="editable">${skills}</p>
  `;

  
  // Insert the resume HTML into the output container
  outputContainer.innerHTML = resumeHTML;
});


function makeEditable(){
  const editableElements = document.querySelectorAll('.editable');
  editableElements.forEach(element => {
    element.addEventListener('click', function(){
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "";

      // replace content
      if(currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
        const input = document.createElement('input')
        input.type = 'text'
        input.value = currentValue
        input.classList.add('editing-input')
        

        input.addEventListener('blur', function () {
          currentElement.textContent = input.value;
          currentElement.style.display = 'inline'
          input.remove()
        })



        currentElement.style.display = 'none'
        currentElement.parentNode?.insertBefore(input, currentElement)
        input.focus()
      }
   })
})
}