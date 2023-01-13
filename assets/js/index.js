import { Field } from './field.js';
import { Form } from './form.js';
import { TextField } from './textfield.js';
import { EmailField } from './emailfield.js';
import { PasswordField } from './passwordfield.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confrimPassword = document.getElementById('confirm-password');
    
    let firtNameField = new TextField(firstName);
    let lastNameField = new TextField(lastName);
    let emailField = new EmailField(email);
    let passwordField = new PasswordField(password);
    let confPasswordField = new PasswordField(confrimPassword);
    
    
    
});