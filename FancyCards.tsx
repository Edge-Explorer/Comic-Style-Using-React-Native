import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, Modal, Animated } from 'react-native';

const DragonBallComic = () => {
  const fullDescription =
    "Dragon Ball Z is a legendary anime series that follows the epic adventures of Goku and his friends as they protect Earth and the universe from powerful foes. Known for its high-energy battles, transformative power-ups, and iconic characters, the show inspires with its blend of intense action, heartfelt storytelling, and themes of friendship and perseverance.";
    
  const shortDescription =
    "Dragon Ball Z: A legendary anime series filled with epic battles and transformative power-ups!";
    
  const [description, setDescription] = useState(shortDescription);
  const [showFull, setShowFull] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [showPowerModal, setShowPowerModal] = useState(false);
  const [showNimbusModal, setShowNimbusModal] = useState(false);
  
  // Animation values for Nimbus
  const nimbusPosition = useRef(new Animated.Value(0)).current;
  const nimbusScale = useRef(new Animated.Value(1)).current;

  // Animation for Nimbus cloud
  useEffect(() => {
    if (showNimbusModal) {
      // Reset animation values when modal opens
      nimbusPosition.setValue(0);
      nimbusScale.setValue(1);
      
      // Create animations
      const floatAnimation = Animated.sequence([
        // Move up
        Animated.timing(nimbusPosition, {
          toValue: -15,
          duration: 1000,
          useNativeDriver: true,
        }),
        // Move down
        Animated.timing(nimbusPosition, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        })
      ]);
      
      const pulseAnimation = Animated.sequence([
        // Grow slightly
        Animated.timing(nimbusScale, {
          toValue: 1.05,
          duration: 1000,
          useNativeDriver: true,
        }),
        // Shrink back
        Animated.timing(nimbusScale, {
          toValue: 0.95,
          duration: 1000,
          useNativeDriver: true,
        })
      ]);
      
      // Combine and loop animations
      Animated.loop(
        Animated.parallel([
          floatAnimation,
          pulseAnimation
        ])
      ).start();
    }
  }, [showNimbusModal]);

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

  const togglePowerModal = () => {
    setShowPowerModal(!showPowerModal);
  };

  const toggleNimbusModal = () => {
    setShowNimbusModal(!showNimbusModal);
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
        <Text style={styles.comicTitle}>DRAGON BALL Z🐉</Text>
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
        
        {/* Speech Bubble as a Button */}
        <TouchableOpacity style={styles.speechBubble} onPress={togglePowerModal}>
          <Text style={styles.speechText}>UNLEASH YOUR POWER!</Text>
        </TouchableOpacity>
        
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
      
      {/* Bottom Panel - Now as a TouchableOpacity */}
      <TouchableOpacity style={styles.bottomPanel} onPress={toggleNimbusModal}>
        <Text style={styles.continueText}>TO BE CONTINUED...</Text>
      </TouchableOpacity>

      {/* Power Image Modal - Updated to be smaller and comic-styled */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showPowerModal}
        onRequestClose={togglePowerModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.comicModalContainer}>
            <View style={styles.comicModalHeader}>
              <Text style={styles.comicModalTitle}>POWER UNLEASHED!</Text>
              <TouchableOpacity style={styles.comicCloseButton} onPress={togglePowerModal}>
                <Text style={styles.comicCloseText}>X</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: 'https://c4.wallpaperflare.com/wallpaper/424/108/950/ultra-instinct-goku-dragon-ball-super-4k-wallpaper-preview.jpg'
              }}
              style={styles.comicModalImage}
              resizeMode="cover"
            />
            <View style={styles.comicModalCaption}>
              <Text style={styles.comicModalCaptionText}>Goku Ultra Instinct!</Text>
            </View>
          </View>
        </View>
      </Modal>

      {/* Nimbus Cloud Modal - With Animation */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showNimbusModal}
        onRequestClose={toggleNimbusModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.comicModalContainer}>
            <View style={styles.comicModalHeader}>
              <Text style={styles.comicModalTitle}>COMING SOON!</Text>
              <TouchableOpacity style={styles.comicCloseButton} onPress={toggleNimbusModal}>
                <Text style={styles.comicCloseText}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.nimbusImageContainer}>
              <Animated.Image
                source={{
                  uri: 'http://vignette3.wikia.nocookie.net/princekodi/images/b/b4/Flying-Nimbus-psd61177.png/revision/latest?cb=20140915025054'
                }}
                style={[
                  styles.comicModalImage,
                  {
                    transform: [
                      { translateY: nimbusPosition },
                      { scale: nimbusScale }
                    ]
                  }
                ]}
                resizeMode="contain"
              />
              {/* Animated shadow for the cloud */}
              <Animated.View 
                style={[
                  styles.cloudShadow,
                  {
                    transform: [
                      { scale: Animated.subtract(1.2, Animated.multiply(nimbusPosition, -0.01)) }
                    ],
                    opacity: Animated.subtract(0.7, Animated.multiply(nimbusPosition, -0.02))
                  }
                ]}
              />
            </View>
            <View style={styles.comicModalCaption}>
              <Text style={styles.comicModalCaptionText}>Nimbus Cloud Adventure!</Text>
              <Text style={styles.comicModalSubCaption}>Watch it float through the skies!</Text>
            </View>
          </View>
        </View>
      </Modal>
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
    padding: 5,
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
    // Add button styling
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
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
  // Bottom panel now has button styling
  bottomPanel: {
    backgroundColor: '#FF5722',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#000',
    // Add button styling
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
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
  // Modal overlay
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Comic-Styled Modal
  comicModalContainer: {
    width: '70%',
    backgroundColor: '#FFF8E1',
    borderWidth: 5,
    borderColor: '#000',
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 10,
    transform: [{ rotate: '-1deg' }],
  },
  comicModalHeader: {
    backgroundColor: '#FF5722',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#000',
  },
  comicModalTitle: {
    color: '#FFEB3B',
    fontWeight: '900',
    fontSize: 18,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textTransform: 'uppercase',
  },
  comicCloseButton: {
    backgroundColor: '#FFEB3B',
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  comicCloseText: {
    color: '#FF5722',
    fontWeight: 'bold',
    fontSize: 12,
  },
  comicModalImage: {
    width: '100%',
    height: 180,
  },
  comicModalCaption: {
    backgroundColor: '#FFF176',
    padding: 8,
    borderTopWidth: 3,
    borderTopColor: '#000',
  },
  comicModalCaptionText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#D32F2F',
    fontFamily: 'Courier',
  },
  comicModalSubCaption: {
    textAlign: 'center',
    fontSize: 12,
    color: '#D32F2F',
    fontFamily: 'Courier',
    marginTop: 2,
  },
  // Nimbus animation specific styles
  nimbusImageContainer: {
    height: 180,
    backgroundColor: '#83D3F3', // Sky blue background
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cloudShadow: {
    position: 'absolute',
    bottom: 20,
    width: 100,
    height: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 50,
    zIndex: -1,
  }
});
