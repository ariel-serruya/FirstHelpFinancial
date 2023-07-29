# React + Vite

### Get started:

1. `npm install`
2. `npm run dev`

### Technologies used:

Vite: This is a create-react-app alternative. Much faster load times and easy to set up.

JSON-Server: This is a great NPM package that allows you to mock an API with a local JSON file. My fabricated events can be found in db.json.

Concurrently: This allows me to run the vite server and json server at the same time.

Chakra-UI: This is an extensive component library with decent built-in styles. I used Chakra for all the buttons, checkboxes, flex layouts, form fields, and text headings. The form fields have great support for form validation (see Future Enhancements).

React-Query: This is a fantastic JS library that allows you to cache API responses and get loading/error states. Because responses are cached by their unique keys, they can be invalidated based on certain criteria, ultimately refreshing that data across your entire application. I prefer it to redux when it comes to managing API response state.

Redux-Toolkit: A lightweight version of redux with less code bloat/overhead. I used this to save global credit card and cart information. Refer to the `slices` in the redux directory for more information.

React Router: This helps manage page routes and navigation. I used it to set up the Events page and the Checkout page, and to navigate between each one.

### Future Enhancements:

Given more time, I would have:

Added Typescript support

Added Formik form validation for credit card entries

Set up custom, reusable components to prevent duplicate styling

Factored out the react-query hooks into their own api folder (Im currently calling the same hook twice)

Expanded our routes infrastucture
