import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DragonBallComic = () => {
  const fullDescription =
    "Dragon Ball Z is a legendary anime series that follows the epic adventures of Goku and his friends as they protect Earth and the universe from powerful foes. Known for its high-energy battles, transformative power-ups, and iconic characters, the show inspires with its blend of intense action, heartfelt storytelling, and themes of friendship and perseverance.";
    
  const shortDescription =
    "Dragon Ball Z: A legendary anime series filled with epic battles and transformative power-ups!";
    
  const [description, setDescription] = useState(shortDescription);
  const [showFull, setShowFull] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const toggleDescription = () => {
    if (showFull) {
      setDescription(shortDescription);
    } else {
      setDescription(fullDescription);
    }
    setShowFull(!showFull);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <View style={styles.container}>
      {/* Left Side Popup */}
      {showPopup && (
        <View style={styles.popupContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closePopup}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Image
            source={{
              uri: 'https://pnghq.com/wp-content/uploads/dragon-ball-transparent-768x788.png'
            }}
            style={styles.popupImage}
            resizeMode="contain"
          />
          <Text style={styles.popupText}>NEW CHARACTER!</Text>
        </View>
      )}

      {/* Comic Book Title Banner */}
      <View style={styles.titleBanner}>
        <Text style={styles.comicTitle}>DRAGON BALL Z</Text>
        <Text style={styles.issueNumber}>SPECIAL EDITION</Text>
      </View>
      
      {/* Main Comic Panel */}
      <View style={styles.comicPanel}>
        <Image
          source={{
            uri: 'https://www.seekpng.com/png/detail/320-3202429_dragon-ball-z-characters-png.png'
          }}
          style={styles.panelImage}
          resizeMode="cover"
        />
        
        {/* Speech Bubble */}
        <View style={styles.speechBubble}>
          <Text style={styles.speechText}>UNLEASH YOUR POWER!</Text>
        </View>
        
        {/* Action Words */}
        <View style={styles.actionWordContainer}>
          <Text style={styles.actionWord}>POW!</Text>
        </View>
        
        <View style={[styles.actionWordContainer, styles.actionWordRight]}>
          <Text style={[styles.actionWord, styles.actionWordYellow]}>BOOM!</Text>
        </View>
      </View>
      
      {/* Caption Box */}
      <View style={styles.captionBox}>
        <Text style={styles.captionTitle}>THE ULTIMATE BATTLE BEGINS!</Text>
        <Text style={styles.captionText}>{description}</Text>
        <TouchableOpacity style={styles.readMoreButton} onPress={toggleDescription}>
          <Text style={styles.buttonText}>
            {showFull ? "SHOW LESS" : "READ MORE"}
          </Text>
        </TouchableOpacity>
      </View>
      
      {/* Bottom Panel */}
      <View style={styles.bottomPanel}>
        <Text style={styles.continueText}>TO BE CONTINUED...</Text>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <DragonBallComic />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF8E1'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1',
    padding: 10,
  },
  titleBanner: {
    backgroundColor: '#FF5722',
    padding: 10,
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#000',
    marginBottom: 15,
    transform: [{ rotate: '-2deg' }],
  },
  comicTitle: {
    fontWeight: '900',
    fontSize: 36,
    color: '#FFEB3B',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  issueNumber: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    textTransform: 'uppercase',
  },
  comicPanel: {
    borderWidth: 4,
    borderColor: '#000',
    height: 300,
    marginBottom: 15,
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden',
  },
  panelImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#83D3F3', // Light blue comic background
  },
  speechBubble: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    borderWidth: 3,
    borderColor: '#000',
    maxWidth: '60%',
    transform: [{ rotate: '5deg' }],
  },
  speechText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#FF5722',
  },
  actionWordContainer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    transform: [{ rotate: '-15deg' }],
    zIndex: 2,
  },
  actionWordRight: {
    bottom: 80,
    left: 150,
    transform: [{ rotate: '10deg' }],
  },
  actionWord: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FF5722',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
    letterSpacing: 2,
  },
  actionWordYellow: {
    color: '#FFEB3B',
  },
  captionBox: {
    backgroundColor: '#FFF176', // Light yellow
    borderWidth: 3,
    borderColor: '#000',
    padding: 10,
    marginBottom: 15,
  },
  captionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#D32F2F', // Comic red
    textTransform: 'uppercase',
  },
  captionText: {
    fontFamily: 'Courier',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
  },
  readMoreButton: {
    backgroundColor: '#FF5722',
    padding: 8,
    borderRadius: 0,
    marginTop: 10,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  bottomPanel: {
    backgroundColor: '#FF5722',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#000',
  },
  continueText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFEB3B',
    fontStyle: 'italic',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  // Popup styles
  popupContainer: {
    position: 'absolute',
    left: 10,
    top: 100,
    zIndex: 10,
    backgroundColor: '#FFEB3B',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: 150,
    overflow: 'hidden',
    transform: [{ rotate: '-5deg' }],
  },
  popupImage: {
    width: 120,
    height: 120,
  },
  popupText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FF5722',
    textAlign: 'center',
    marginTop: 5,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  closeButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    width: 24,
    height: 24,
    backgroundColor: '#FF5722',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 11,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});