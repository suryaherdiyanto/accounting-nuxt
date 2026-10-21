# Component reference
The raw ui component design of the components can be found on `../../ui-templates/tailwick` folders.

# Mismiscellaneous
- When building page, all terms should be in `Bahasa Indonesia`

# Component naming convention
The official Vue.js Style Guide outlines a clear hierarchy of component naming conventions designed to prevent errors, avoid HTML conflicts, and improve project readability
- For layout example Header, Sidebar or Footer usualy only have one per of this component the naming should be: `TheHeader.vue`, `TheFooter.vue` and `TheSidebar.vue`
- For components like button, card, table should be: `AppButton.vue`, `AppCard.vue` etc.

# Form Component Creation
All form related component must be stored in app/components/forms folder, naming convention will remain the same as other component.
Input Form Spec:
- The form component will include the label, so the label won't be sepate component
- Must include `errorMessage` option as optional props, if this option filled it will render the error message below the form and add the error class `!border-danger`
- Form inputs must only have 1 size which the medium variant.
- For input text must support input group prefix and append, use component slot
- Add `isRequired` option if it's true form label will be have asterisk `*` with red color.

# Table Component Creation Spec
- Has 2 child components `AppTableRow`, `AppTableCol`
- Has `search` emit event
- Has `order` emit event when user click on the each table head, this order event is optional when it is defined in the props
- Has options to have ability to select/check rows, it will returns selected row data.