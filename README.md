# Dunning Read Natural Area App

## Getting Started

### Prerequisites

To run this project, you will need to have Node.js and npm installed on your machine. Additionally, since this project uses Expo, you'll need to install the Expo CLI.


>``npm install -g expo-cli``

You also need to install the dependencies for the project:


>``npm install``


To start the project, you can use the following command:
>``expo start``

>This will start the Expo developer tools in your browser. From there, you can choose to run the project on an iOS simulator, Android emulator, or your physical device by scanning the QR code with the Expo Go app.

## Project Structure
- `app/`: Contains all the React components and screens.
  - `audio1.tsx`, `audio2.tsx`, `audio3.tsx`: Components for different audio sections of the app. Change the source file in the `<Video>` component to alter the audio that is played.
  - `audioTourMap.tsx`: Provides the map and navigation for the audio tour.
  - `markers.tsx`: Manages the data for map markers. Each marker represents a point of interest with coordinates, name, and associated audio track number. Modify this file to change the location data or add new points of interest.
- `assets/`
  - `music/`: Contains audio files used in the project.
  - `images/`: Holds images used across the app.
  - `fonts/`: Custom fonts for styling the application.
- `constants/`: Universal styles or constants used throughout the app.

## Modifying Audio Playback
To change what audio is played in a specific part of your application, navigate to the respective audioX.tsx file (where X is the audio section number). Look for the ``<Video>`` component and modify the source prop:

``<Video
  ref={video}
  style={styles.video}
  source={require("../assets/music/your-audio-file.mp3")}
  useNativeControls={showControls}
/>``

>Replace "../assets/music/your-audio-file.mp3" with the path to the new audio file you want to use.