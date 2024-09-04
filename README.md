# lucky_number_guessing_game

Description
This is a simple web-based guessing game where the user has to guess a lucky number between 1 and 100. The user is given 5 chances to guess the correct number. The game provides feedback if the guessed number is too high or too low. The project is built using HTML, CSS, and JavaScript, with some server-side logic handled by Django.

Features
Users can input their guess and receive feedback on whether their guess is too high, too low, or correct.
The number of remaining chances is displayed, and the game ends when chances run out or the correct number is guessed.
The project uses localStorage to persist the number of chances across page reloads.
Responsive design for better user experience across devices.
Getting Started

Prerequisites
Python 3.x
Django 3.x (or newer)

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/vvyguptha/lucky_number_guessing_game.git
cd game1
Set up the Django environment:

bash
Copy code
python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
pip install -r requirements.txt
Run the Django server:

bash
Copy code
python manage.py runserver
Open your web browser and navigate to http://127.0.0.1:8000/.

Usage
The user is prompted to guess a number between 1 and 100.
Feedback is provided for each guess.
The game ends when the user guesses the correct number or runs out of chances.
Project Structure
bash
Copy code
├── game1/
│   ├── home/
│   │   ├── templates/
│   │   │   └── home.html
│   │   ├── static/
│   │   │   ├── style.css
│   │   │   └── app.js
│   │   └── views.py
│   ├── manage.py
│   └── ...
├── README.md
└── requirements.txt
Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or suggestions, feel free to contact me via your- vvyguptha@gmail.com.

You can adjust this template by adding more sections (e.g., Known Issues, Future Enhancements) or modifying the existing ones to better fit your project.






