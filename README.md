# Studio Ghibli Trivia

## Project Description
Browser based trivia game with Studio Ghibli themes. As the timer counts down, answer as many questions as possible correctly to gather points. If question is answered incorrectly, will not be counted. You'll be unable to click on other answer options after the first answer is clicked. The game ends when timer runs out or when the questions finish.

## Technologies Used
Vanilla JavaScript, CSS and HTML.

## Wire Frames
Start page of the game, it contains the game's title, Start Game button and About Studio Ghibli modal.
![Project 1 - Start Page](https://user-images.githubusercontent.com/85954693/162788024-a839323c-6065-4207-bbf5-43dacf9d2542.png)

Open About Studio Ghibli modal which contains brief description about Studio Ghibli and functional close button to close the modal.
![Project 1 - Modal](https://user-images.githubusercontent.com/85954693/162788408-15431927-5fd1-47b4-8690-b281a4848a0f.png)

Once Start Game button is clicked, Start Page opens. In it, Total Score and Time Left can be found on the top left and right of the question Card.
Inside the question card, the question is on the top, followed by 4 clickable answer options and the Next button on the bottom.
![Project 1 - Scoring:Timer](https://user-images.githubusercontent.com/85954693/162797538-71970ca9-2c83-4c28-afae-b4ecbddb77c5.png)

If answer is selected incorrectly, the background of the answer turns red.
If answer is selected correctly, the background of the answer turns green.
After the first click selecting the answer, the answer cannot be changed/clicked again.
![Project 1 - Incorrect Answer](https://user-images.githubusercontent.com/85954693/162797921-9cdcda78-be77-4b48-870c-8e86a6dc4f1e.png)
![Project 1 - Correct Answer](https://user-images.githubusercontent.com/85954693/162797928-f4a4bf9e-459e-428d-814a-c0f8e6340d4a.png)

The game ends once time runs out or if all the questions have been answered. At the end page, total score achieved is shown.
![Project 1 - End Page](https://user-images.githubusercontent.com/85954693/162798316-fb2aa79f-262e-4b3a-8274-70fa2bdb60ce.png)

## Getting Started
### Installations
1. Download the repository and copy HTTPS or SSH key.
2. On your terminal, create a directory where you'd like to save this repository, enter this directory.
3. Once you're in the new directory, run git clone command with the copied HTTPS/SSH key.
4. Now that this repository is saved locally, you are able to use the terminal to go to where you saved this repository.
5. In the repository, there is a HTML document, open it using a browser and play the game!

Resource if you're having trouble - 
[How to use Git Clone](https://github.com/git-guides/git-clone)

### Play the game
1. Click the Start Game button.
2. You only have 30 seconds to complete the questions - there are 5 total.
3. If the question is answered correctly, 1 point will be added to the Total Score and background will turn green.
4. If the question is answered incorrectly, nothing will be added to the Total Score and background will turn red.
5. If time runs out before you complete all the questions you'll be brought to the End Page with Total Score and Restart button.
6. If you complete the game before time runs out, you'll be brought to the End Page with Total Score and Restart button.
7. If you'd like to play again, click the Restart button!

## Next Steps
The current version of the game doesn't contain different categories. I'd like to implement that with each category being a different Studio Ghibli movie.
Also, I'd like to implement different point amount awarded depending on the difficulty of the question.

## Acknowledgments
- [Modal reference by Carlos Godoy](https://git.generalassemb.ly/carlos-godoy720/modals)
- [Reference about Studio Ghibli](https://ghiblicollection.com/about)
- [Animated image reference by Geisiane Alves](https://github.com/GeisianeAlves/Moving-Castle-animate-landing-page)
- [Color Palette](https://colorswall.com/palette/15701/)

## References Used for Game Logic
- [Refresh the page - location.reload](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)
- [Use setAttribute in DOM 1](https://stackoverflow.com/questions/30446152/how-to-add-parameters-onto-function-in-setattribute-method-in-javascript)
- [Use setAttribute in DOM 2](https://stackoverflow.com/questions/28685407/this-setattributeonclick-javascript-doesnt-works)
- [Store value in element - element.value](https://www.w3schools.com/jsref/prop_attr_value.asp)
- [Array method - map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
