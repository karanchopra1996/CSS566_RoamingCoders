Online Vocab game
This document describes the detailed design of our word game Wordle. The purpose
of the word game here is to understand the workings of the software development. We have chosen a letter arrangement game as our product. A five letter
word is chosen which needs to be guessed by the user. After each turn, the guessed alphabet is
marked correct or incorrect. It follows a basic architecture of a webpage being connected to a
local database. Multiple users are required to sign up for playing the game. It also includes the
option to share their scores and see their best scores in a session. The color and appearance of
the page makes it accessible. The placement of various sections is done in a way so as to make
the game user friendly and acceptable to a wide range of audience

System Architecture:
Architecture used is the Client Server Architecture.
● Client-side user interface and game logic: The user interface (UI) and game logic are
at the front end of the application that users interact with. The UI can be built using a
combination of HTML, CSS, and JavaScript, and can run in a web browser or as a
mobile app. The UI displays the game board, the player's score, the timer, and any other
relevant information. It also handles user input, such as guesses or requests to start a
new game.

Additionally, the game logic handles the core functionality of the game, and will be
written in JavaScript. The game logic handles tasks such as selecting valid words from a
list, verifying player guesses, updating the game state, and managing the game timer. It
also communicated with the database to store and retrieve game data

● Database: The database stores the game data, such as player scores, game results,
and other relevant information.

● Authentication and authorization: Authentication and authorization ensure that only
authorized users can access the game and that user data is secure. It can be
implemented using any authentication and authorization service, such as OAuth or JWT.
Authentication and authorization also allow players to sign in using their social media
accounts, such as Facebook or Google, and provide a more convenient and seamless
user experience.

This basic architecture provides a solid foundation for building an online world game that is
interactive, engaging, and secure.
Software architecture →
Here we are using the client server architecture in order to depict the connection between the
user and the game.
● Multiple users will be accessing the game through the internet, it will be a basic client
server architecture, where users will be able to interact with the game using different
modes of electronic devices like computer, phone, tablet, etc.
● A user acting as a client will send the request to the server, where the game is hosted.
The game details will be stored in a database connected to the server.
● It will be a bi-directional flow between the game and user.

Components and Modules:
1. Homepage
2. Account page
● Login Screen
● Sign up Screen
● Account Details
3. Game Screen
● Guessing textboxes
● Give Up button
4. Sharing Screen
● Share button -> Facebook, Twitter, Copy link

Interface Specifications and Protocols:
1. User Interface - The user interface will be designed to be user-friendly. Allowing players
to easily navigate and submit their guesses.
2. Input Validation - The input taken from users should have an input validation which
checks for english words in the given list and the limitation of characters.
3. Score Keeping - The application will keep track of the user's scores in a session.
4. Response time - The application will give feedback on the user's guesses on time.
5. Error Handling - Errors should be handled correctly, allowing users to continue with their
game and in case of any error, the application should return clear error messages to the
users.
6. Communication protocols - The application will be able to connect with the game servers
using reliable and secure protocol.
7. Privacy and security - The application will protect users’ privacy and data by
implementing secure authentication protocols and encryption. The application will be
transparent with its data privacy policy with the users.
8. Testing and debugging - The application will have thorough testing and debugging to
ensure it meets all the specifications and protocols.

Data Structures and Algorithms:
Lists: lists will be used to store the set of words valid for gameplay.
Hashmaps: Hashmaps will be used to store user accounts. Accounts will hold relevant user
information such as recent games and their outcomes.
Testing and Quality Assurance Plan:

https://docs.google.com/spreadsheets/d/1F4ptBVcI_NQrDAi9ppM-wW-iZP-ppx6hlQGR_o
54Hqg

Unit Testing:
● Develop unit tests for each component of the application.
● Ensure that each unit test accurately reflects the expected behavior of the component
being tested.

Integration Testing:
● Develop integration tests to verify the interaction between different components of the
application.
● Test the application under various scenarios to ensure that it behaves correctly under
different conditions.

Acceptance Testing:
● Develop acceptance tests that reflect the user stories defined in the Product
Requirements Document.
● Ensure that acceptance tests cover all possible use cases and are aligned with the
business requirements.

Performance Testing:
● Develop performance tests to evaluate the application's scalability and responsiveness
under different loads.
● Identify and address any bottlenecks or performance issues to ensure that the
application can handle a large number of simultaneous users.

Usability Testing:
● Conduct usability testing to ensure that the application is easy to use and meets the
needs of its target users.
● Gather feedback from real users and use it to improve the application's design and user
experience.

User Documentation Requirements:
Instructions: An instructions page will be included to tell users how to play the game, including
menu navigation, the game itself, and additional features such as the leaderboard.
Deployment and Maintenance Approach and Measures:
● Code will be deployed and maintained using Github.
● Any changes to the code will be version controlled
