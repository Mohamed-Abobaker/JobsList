# JobsList

## `The Challenge`

Imagine we have a list of jobs, each represented by a character. Because certain jobs must be done before others, a job may have a
dependency on another job. For example, a may depend on b, meaning the final sequence of jobs should place b before a. If a has no
dependency, the position of a in the final sequence does not matter.
Given you’re passed an empty string (no jobs), the result should be an empty sequence.

## `Installation`

Zip Folder:
Unzip / extract 'JobsList' folder then open the folder. This can be done using the terminal using the code below.

Github:
Fork then clone this repository onto you device then open the folder. This can be done using the terminal using the code below.

\$ cd JobsList

Then run this folder using VScode or similar programme. In the terminal run the code below to install the node modules

\$ npm install

You can now run the following command which runs the spec file as it's default command.:

\$ npm test

## `The Design & Assumptions`

The primary purpose of the project has been to demonstrate development skills. With this in mind, I chose to use JavaScript language as it is the language I am most comfortable with.

Assumption that were made:

- That the input would always be a string.
- That the input would always be in the correct required form as displayed in the challenge spec.
- That any error incurred results only in a returned error statement.

## `Built With`

- Javascript
- Jest
