<p align="center">
    <h1 align="center">Vue Music App</h1>
 </p>
 <p align="center">
    A music app that displays the top tracks for the day, week, month, year, and lifetime!
</p>

------

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Dependencies
### Front-End
* Vue JS
* Axios
  
## Languages Used
### Front-End
* HTML
* SCSS / CSS
* Javascript

## Future Development
I plan on adding a system that will also allow the user to enter in an artists name or album that will then give the user the preview of the songs.
I will also need to fix the audio player. it currently doesnt update until you pause the previous song which causes a visual error with the Current Track and Song playing.
For this to be fixed I must use VueX to store the states of the project so that the song and its information will sync together to update properly.

## Bugs
* Need to find a way to have the function loadTracks() work on my Tracks component which is causing me the issues of songs not changing properly.