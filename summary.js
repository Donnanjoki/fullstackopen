/*
Source: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics




************************************************  PART A **********************************************************************************






HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. 

>. HTML is a markup language that defines the structure of your content.
 HTML consists of a series of elements, which you use to enclose, or wrap, 
 different parts of the content to make it appear a certain way, or act a certain way.


### Anatomy of an HTML Element ###

   1]] This states where the element begins or starts to take effect — in this case where the paragraph begins. e.g <p>
   2]] This states where the element ends 
   3]] This is the content of the element
   4]] The element: The opening tag, the closing tag, and the content together comprise the element.


### Attributes of HTML elements ###

>. Attributes contain extra information about the element that you don't want to appear in the actual content.

    >>> Xtics of Attributes <<<<
        // Example: <p class="editor-note">My cat is very grumpy</p>
           >. Here, class is the attribute name and editor-note is the attribute value. 
    A]] A space between it and the element name (or the previous attribute, if the element already has one or more attributes
    B]] The attribute name followed by an equal sign.
    C]] The attribute value wrapped by opening and closing quotation marks.


   ### Void Elements ###

>. Some elements have no content and are called void elements.
    // Example: <img src="images/firefox-icon.png alt="My text image />

>. The image element doesn't wrap content to affect it. Its purpose is to embed an image in the HTML page in the place it appears.

>. It does this via the src (source) attribute, which contains the path to our image file. We have also included an alt (alternative) attribute.
 In the alt attribute, you specify descriptive text for users who cannot see the image; 

 >. Either because: 
             1]] They are visually impaired
             2]]  Something has gone wrong causing the image not to display. 




     ### Marking up text ###
 A]] Heading

 >. Heading elements allow you to specify that certain parts of your content are headings — or subheadings. 
 >. HTML contains 6 heading levels, <h1> - <h6>.
 >. Don't use heading elements to make text bigger or bold, because they are used for accessibility and other reasons such as SEO. 
 Try to create a meaningful sequence of headings on your pages, without skipping levels.


 B]] Paragraphs

>.  <p> elements are for containing paragraphs of text; you'll use these frequently when marking up regular text content.


C]] Lists

>. A lot of the web's content is lists and HTML has special elements for these. Marking up lists always consists of at least 2 elements. 
    1]] Unordered lists are for lists where the order of the items doesn't matter, such as a shopping list. These are wrapped in a <ul> element.
    2]] Ordered lists are for lists where the order of the items does matter, such as a recipe. These are wrapped in an <ol> element.

>. Each item inside the lists is put inside an <li> (list item) element.




     ### Links ###

>. Links are very important — they are what makes the web a web! To add a link, we need to use a simple element — <a> — "a" being the short form for "anchor".
>. To make a link: 
     A]] Wrap the text in an <a> element
     B]] Give the <a> element an href attribute
     C]] Fill in the value of this attribute with the web address that you want the link to: 

     // Example:  <a href="https://www.mozilla.org/en-US/about/manifesto/">
  Mozilla Manifesto
</a>
 





************************************************ PART B ******************************************************************************************************************


Source: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics

 CSS Basics

>. CSS (Cascading Style Sheets) is the code that styles web content
>. CSS is not a programming language. It's not a markup language either. CSS is a style sheet language.

>. Always link your CSS file to your html page: 
<link href="styles/style.css" rel="stylesheet" />


    ### Anatomy of a CSS ruleset ###

>. The whole structure of a css code is called a ruleset. It contains:

     A]] Selector: This is the HTML element name at the start of the ruleset. It defines the element(s) to be styled.
     B]] Declaration: This is a single rule like color: red;. It specifies which of the element's properties you want to style.
     C]] Properties: These are ways in which you can style an HTML element. (In this example, color is a property of the <p> elements.)
     D]] Property Value: To the right of the property—after the colon—there is the property value.

    !!! Important !!!

    A]] Apart from the selector, each ruleset must be wrapped in curly braces. ({})
    B]] Within each declaration, you must use a colon (:) to separate the property from its value or values.
    C]] Within each ruleset, you must use a semicolon (;) to separate each declaration from the next one.

  // Example: p {
  color: red;
  width: 500px;
  border: 1px solid black;
}

     ### Selecting Multiple Elements ###

>. You can also select multiple elements and apply a single ruleset to all of them. Separate multiple selectors by commas.
  // Example:
 p,
 li,
 h1 {
    color: red;
 }

    

     ### Different Types of Selectors ###

   A]] Element Selector/ Tag or Type Selector: 
               What it does it selects: All HTML elements of the specified type.
               Example: In p - selects <p>

   B]] ID Selector: 
           What it does: The element on the page with the specified ID. On a given HTML page, each id value should be unique. 
           Example: in #my-id selects <p id="my-id"> or <a id="my-id">

   C]] Class Selector: 
             What it does: The element(s) on the page with the specified class. Multiple instances of the same class can appear on a page. 
             Example: in .my-class: selects <p class="my-class"> and <a class="my-class">


   D]] Attribute Selector: 
                 What it does: The element(s) on the page with the specified attribute.
                 Example: img[src] selects <img src="myimage.png"> but not <img>

   E]] Pseudo-class Selector: 
                What it does: The specified element(s), but only when in the specified state. (For example, when a cursor hovers over a link.) 
                Example: a:hover - selects <a>, but only when the mouse pointer is hovering over the link. 


     
       ### CSS: all bout boxes ###
       
>. Most HTML elements on your page can be thought of as boxes sitting on top of other boxes.

>. CSS layout is mostly based on the box model. Each box taking up space on your page has properties like:

    1]] Padding: The space around the content.
    2]] Border: The solid line that is just outside the padding
    3]] Margin: the space around the outside of the border



******************************************************* PART C *********************************************************************************8

Source: https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form



WEB FORMS

>. These are one of the main points of interactions between a user and a website or application.
>. Forms allow the users to enter data, which is generally sent to a web server for processing and storage, or used on the client-side to immediately update the interface in some way
example: add another item to a list or show or hide a UI feature.

>. Form controls can also be programmed to enforce specific formats or values to be entered (form validation), and paired with text labels that describe their purpose to both sighted and visually impaired users.

   

  ### Designing Your Form ### 

>. Before starting your code, we first design a mockup of our form that will help us define the right dataset you want to ask your user to enter.
>. Note: The bigger the form, the more risk of frustrating people and losing users, hence keep it simple amd stay focused. Ask only for the data you absolutely need.



     ### Implementing our form HTML ###

>. To create the HTML for our form we will use the given HTML elements: 
<form>, <label>, <input>, <textarea>, and <button>


   1]] The <form> element

>. All forms start with a <form> element
    // Example: <form action="/my-handling-form-page" method="post">…</form>

>. This element is like a container element, but one that specifically contains forms.
>. It supports specific attributes, which configure the way it behaves. All its attributes are optional but it's standard practices to set atleast the action or method attributes.

    >> The action attribute defines the location (URL) where the form's collected data should be sent when it is submitted.
    >> The method attribute defines which HTTP method to send the data with (usually get or post).


     2]] The <label>, <input>, and <textarea> elements

>. Our contact form is not complex: the data entry portion contains three text fields, each with a corresponding <label>:

    >> The input field for the name is a single-line text field.
    >> The input field for the email is an input of type email: a single-line text field that accepts only email addresses.
    >> The input field for the message is a <textarea>; a multiline text field.


>. Note the syntax of the <input> vs <textarea></textarea:
>. The <input> tag is a void element, meaning that it doesn't need a closing tag. <textarea> is not a void element, meaning it should be closed with the proper ending tag.
>.  This has an impact on a specific feature of forms: the way you define the default value. 

>. To define the default value of an <input> element you have to use the value attribute like this: 
   /// Example: <input type="text" value="by default this element is filled with this text" />


>. While to define a default value for <textarea> you put it between the opening and closing tags of the <textarea> element









        

>. 
































*/
