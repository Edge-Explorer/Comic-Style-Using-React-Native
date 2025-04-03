import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Modal, Dimensions } from 'react-native';

// Character data array with comic-themed background colors
const characters = [
  {
    name: 'SON GOKU',
    title: 'SAIYAN RAISED ON EARTH',
    description:
      'Goku, born Kakarot, is a Saiyan sent to Earth who became its greatest defender. Known for his love of training and combat, he constantly seeks to surpass his limits.',
    quote:
      '"I am the hope of the universe... I am the answer to all living things that cry out for peace."',
    imageUri:
      'https://tse1.mm.bing.net/th?id=OIP.FDqffXi7e3_BaDAeZG7qiAHaHy&pid=Api&P=0&h=220',
    bgColor: '#FFC107', // bright yellow
    actionWord: 'KAME-HAME-HA!',
  },
  {
    name: 'VEGETA',
    title: 'PRINCE OF ALL SAIYANS',
    description:
      "Vegeta, the Saiyan prince, is a proud and powerful warrior. Initially an antagonist, he becomes one of Earth's strongest defenders and Goku's greatest rival.",
    quote:
      '"I do not fear this new challenge. Rather like a true warrior I will rise to meet it."',
    imageUri:
      'https://tse3.mm.bing.net/th?id=OIP.pcWUK7EazwUfGlIrZQc_SwHaJM&pid=Api&P=0&h=220',
    bgColor: '#2196F3', // bright blue
    actionWord: 'FINAL FLASH!',
  },
  {
    name: 'LORD BEERUS',
    title: 'GOD OF DESTRUCTION',
    description:
      'Beerus is the God of Destruction of Universe 7. He maintains balance by destroying planets, making way for new creation and ensuring the universe remains stable.',
    quote: '"Before creation comes destruction."',
    imageUri:
      'https://tse3.mm.bing.net/th?id=OIP.AhDZI_lX6pp4Zv54XhPpMgFNC7&pid=Api&P=0&h=220',
    bgColor: '#9C27B0', // purple
    actionWord: 'HAKAI!',
  },
  {
    name: 'GOHAN',
    title: 'HALF SAIYAN, HALF HUMAN',
    description:
      'Gohan, the son of Goku, is a gentle and intelligent warrior with immense latent power. He strives to balance his compassion with his incredible fighting abilities.',
    quote:
      '"The future is always changing. It is up to us to make it the best."',
    imageUri:
      'https://i.pinimg.com/originals/6f/86/da/6f86dab41e9e07b73c040aa8e1c3f0e7.png',
    bgColor: '#4CAF50', // green
    actionWord: 'MASENKO!',
  },
];

// Create additional characters for the collection screen
const allCharacters = [
  ...characters,
  {
    name: 'PICCOLO',
    title: 'NAMEKIAN WARRIOR',
    description: 'Once a villain, Piccolo became one of Earth\'s greatest defenders and Gohan\'s mentor.',
    quote: '"Just remember not to push your luck. Even the underdog can bite."',
    imageUri: 'https://dragonball.guru/wp-content/uploads/2021/03/Piccolo-Profile-Pic-415x415.png',
    bgColor: '#4CAF50', // green
    actionWord: 'SPECIAL BEAM CANNON!',
  },
  {
    name: 'OX-KING',
    title: 'MIGHTY GUARDIAN',
    description: 'The formidable and protective ruler of Fire Mountain, Ox-King is renowned for his immense strength and unwavering dedication to his family.',
    quote: '"No one threatens my family and gets away with it!"',
    imageUri: 'https://www.kindpng.com/picc/m/95-952456_dragonball-ox-king-render-ox-king-hd-png.png',
    bgColor: '#FF5722', // deep orange
    actionWord: 'FIRE MOUNTAIN DEFENSE!'
  },
  {
    name: 'TRUNKS',
    title: 'TIME TRAVELER',
    description: 'Future Trunks traveled back in time to save the world from the androids and Cell.',
    quote: '"I\'ve come here to kill you."',
    imageUri: 'https://pbs.twimg.com/media/E3lvkz9XwAAZXUH.png',
    bgColor: '#3F51B5', // indigo
    actionWord: 'BURNING ATTACK!',
  },
  {
    name: 'BULMA',
    title: 'GENIUS INVENTOR',
    description: 'Brilliant scientist and inventor who has supported the Z Fighters from the beginning.',
    quote: '"I\'ll have you know I\'m the richest woman in the world!"',
    imageUri: 'https://dragonball.guru/wp-content/uploads/2021/03/bulma-profile.png',
    bgColor: '#E91E63', // pink
    actionWord: 'DRAGON RADAR!',
  },
  {
    name: 'GOTEN',
    title: 'PLAYFUL WARRIOR',
    description: 'A cheerful Saiyan with remarkable power and an adventurous spirit, always ready to step into battle with a smile.',
    quote: '"Time to power up and have some fun!"',
    imageUri: 'https://images4.alphacoders.com/652/thumb-1920-652183.png',
    bgColor: '#2196F3', // blue
    actionWord: 'KAMEHAMEHA!'
  },
  {
    name: 'CHI-CHI',
    title: 'STURDY MOTHER & FIERCE WARRIOR',
    description: 'A determined and passionate woman known for her fiery spirit and unwavering dedication to her family and training.',
    quote: '"I may be a mother, but I can fight just as hard!"',
    imageUri: 'https://i.pinimg.com/originals/68/f8/33/68f8338c39e831c0fc1a9076af1a4074.jpg',
    bgColor: '#F44336', // red
    actionWord: 'NO SLACKING!'
  },
  {
    name: 'PAN',
    title: 'SPIRITED YOUTH',
    description: 'The energetic granddaughter of Goku and daughter of Gohan and Videl, Pan is a quarter-Saiyan with immense potential and a fearless heart.',
    quote: "\"I'm gonna train too, Grandpa. I want to be big and strong like you, and save the world too!\"",
    imageUri: 'https://www.clipartmax.com/png/middle/296-2968313_pan-dbs-by-jaredsongohan-pan-baby-dragon-ball.png',
    bgColor: '#FF9800', // orange
    actionWord: 'LET\'S GO!'
  },
  {
    name: 'VIDEL',
    title: 'FEARLESS FIGHTER',
    description: 'A determined and spirited warrior, Videl combines tenacity with skill, always ready to defend justice both on and off the battlefield.',
    quote: '"I never back down from a challenge!"',
    imageUri: 'https://vignette1.wikia.nocookie.net/dragonuniverse/images/b/b9/Videl_Face.png/revision/latest?cb=20160915120256',
    bgColor: '#9C27B0', // purple
    actionWord: 'SKY STRIKE!'
  },
  {
    name: 'MR. SATAN',
    title: 'WORLD MARTIAL ARTS CHAMPION',
    description: 'Renowned as Earth\'s strongest martial artist, Mr. Satan is celebrated for his bravado and showmanship, often taking credit for heroic feats accomplished by others.',
    quote: 'Leave it to me, the great Mr. Satan, to save the day!',
    imageUri: 'https://i.pinimg.com/originals/ee/f6/7f/eef67fcb59757a65fa38698d957f3344.jpg',
    bgColor: '#795548', // brown
    actionWord: 'DYNAMITE KICK!'
  },
  {
    name: 'MAJIN BUU',
    title: 'ANCIENT FORCE OF DESTRUCTION',
    description: 'An ageless and enigmatic being of immense power, Majin Buu\'s unpredictable nature and formidable abilities make him one of the most formidable adversaries in the universe.',
    quote: '\"Buu turn you into candy!\"',
    imageUri: "https://www.kindpng.com/picc/m/27-274584_majin-buu-png-majin-buu-transparent-png.png",
    bgColor: "#FF4081", // pink
    actionWord: "CHOCOLATE BEAM!"
  } 
];

interface Character {
  name: string;
  title: string;
  description: string;
  quote: string;
  imageUri: string;
  bgColor: string;
  actionWord: string;
}

const CharacterPanel = ({ character, fullScreen = false }: { character: Character; fullScreen?: boolean }) => {
  // State to manage whether the popup modal is visible
  const [modalVisible, setModalVisible] = useState(false);
  
  // Handle panel press - now opens modal instead of just zooming
  const handlePress = () => {
    setModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
        <View 
          style={[
            styles.comicPanel, 
            { backgroundColor: character.bgColor },
            fullScreen && styles.fullScreenPanel
          ]}
        >
          {/* Character Image Panel */}
          <View style={styles.imageContainer}>
            <Image source={{ uri: character.imageUri }} style={styles.characterImage} />
            
            {/* Action Word Burst */}
            <View style={[styles.actionBurst, { transform: [{ rotate: `${Math.random() * 20 - 10}deg` }] }]}>
              <Text style={styles.actionText}>{character.actionWord}</Text>
            </View>
          </View>
          
          {/* Character Info Box */}
          <View style={styles.infoBox}>
            <Text style={styles.characterName}>{character.name}</Text>
            <View style={styles.titleStrip}>
              <Text style={styles.characterTitle}>{character.title}</Text>
            </View>
            
            {/* Description Caption - only showing in full-screen or collection view */}
            {fullScreen && (
              <View style={styles.captionBox}>
                <Text style={styles.descriptionText}>{character.description}</Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>

      {/* Character Detail Modal Popup */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { borderColor: character.bgColor, borderWidth: 6 }]}>
            {/* Close Button */}
            <TouchableOpacity 
              style={[styles.closeButton, { backgroundColor: character.bgColor }]} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            
            {/* Character Title Banner */}
            <View style={[styles.modalTitleBanner, { backgroundColor: character.bgColor }]}>
              <Text style={styles.modalCharacterName}>{character.name}</Text>
              <Text style={styles.modalCharacterTitle}>{character.title}</Text>
            </View>
            
            {/* Character Image */}
            <View style={styles.modalImageContainer}>
              <Image source={{ uri: character.imageUri }} style={styles.modalCharacterImage} />
              
              {/* Action Word Burst */}
              <View style={[styles.modalActionBurst, { transform: [{ rotate: `${Math.random() * 20 - 10}deg` }] }]}>
                <Text style={styles.modalActionText}>{character.actionWord}</Text>
              </View>
            </View>
            
            {/* Character Bio */}
            <View style={styles.modalCaptionBox}>
              <Text style={styles.modalDescriptionText}>{character.description}</Text>
            </View>
            
            {/* Character Quote */}
            <View style={styles.modalSpeechBubble}>
              <Text style={styles.modalQuoteText}>{character.quote}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

// Collection Item Component - Smaller version for the grid
const CollectionItem = ({ character }: { character: Character }) => {
  // State to manage whether the popup modal is visible
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <>
      <TouchableOpacity 
        style={styles.gridItem} 
        onPress={() => setModalVisible(true)}
        activeOpacity={0.9}
      >
        <View style={[styles.collectionComicPanel, { backgroundColor: character.bgColor }]}>
          {/* Character Image Panel */}
          <View style={styles.collectionImageContainer}>
            <Image source={{ uri: character.imageUri }} style={styles.collectionCharacterImage} />
            
            {/* Action Word Burst */}
            <View style={[styles.collectionActionBurst, { transform: [{ rotate: `${Math.random() * 20 - 10}deg` }] }]}>
              <Text style={styles.collectionActionText}>{character.actionWord}</Text>
            </View>
          </View>
          
          {/* Character Info Box */}
          <View style={styles.collectionInfoBox}>
            <Text style={styles.collectionCharacterName}>{character.name}</Text>
            <View style={styles.collectionTitleStrip}>
              <Text style={styles.collectionCharacterTitle}>{character.title}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Character Detail Modal Popup */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { borderColor: character.bgColor, borderWidth: 6 }]}>
            {/* Close Button */}
            <TouchableOpacity 
              style={[styles.closeButton, { backgroundColor: character.bgColor }]} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            
            {/* Character Title Banner */}
            <View style={[styles.modalTitleBanner, { backgroundColor: character.bgColor }]}>
              <Text style={styles.modalCharacterName}>{character.name}</Text>
              <Text style={styles.modalCharacterTitle}>{character.title}</Text>
            </View>
            
            {/* Character Image */}
            <View style={styles.modalImageContainer}>
              <Image source={{ uri: character.imageUri }} style={styles.modalCharacterImage} />
              
              {/* Action Word Burst */}
              <View style={[styles.modalActionBurst, { transform: [{ rotate: `${Math.random() * 20 - 10}deg` }] }]}>
                <Text style={styles.modalActionText}>{character.actionWord}</Text>
              </View>
            </View>
            
            {/* Character Bio */}
            <View style={styles.modalCaptionBox}>
              <Text style={styles.modalDescriptionText}>{character.description}</Text>
            </View>
            
            {/* Character Quote */}
            <View style={styles.modalSpeechBubble}>
              <Text style={styles.modalQuoteText}>{character.quote}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

// Home Screen Component
const HomeScreen = ({ navigateToCollection }: { navigateToCollection: () => void }) => {
  // State to manage the scroll orientation (horizontal/vertical)
  const [isHorizontal, setIsHorizontal] = useState(true);

  // Toggle scroll direction
  const toggleOrientation = () => {
    setIsHorizontal(!isHorizontal);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Comic Book Title Banner */}
      <View style={styles.titleBanner}>
        <Text style={styles.comicTitle}>DRAGON BALL Z</Text>
        <Text style={styles.issueNumber}>CHARACTER SHOWCASE</Text>
      </View>
      
      {/* Scroll Direction Button - Comic Style */}
      <TouchableOpacity onPress={toggleOrientation} style={styles.directionButton}>
        <Text style={styles.directionButtonText}>
          {isHorizontal ? 'READ VERTICALLY!' : 'READ HORIZONTALLY!'}
        </Text>
      </TouchableOpacity>
      
      {/* Character Panels Scroll View */}
      <ScrollView
        horizontal={isHorizontal}
        contentContainerStyle={[
          styles.scrollViewContent, 
          !isHorizontal && styles.verticalScroll
        ]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {characters.map((character, index) => (
          <CharacterPanel key={index} character={character} />
        ))}
      </ScrollView>
      
      {/* Comic Book Footer - Now Clickable */}
      <TouchableOpacity 
        style={styles.comicFooter}
        onPress={navigateToCollection}
      >
        <Text style={styles.footerText}>COLLECT ALL CHARACTERS!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Collection Screen Component
const CollectionScreen = ({ navigateToHome }: { navigateToHome: () => void }) => {
  return (
    <View style={styles.containerNoTopPadding}>
      {/* Collection Title Banner - Flush with the top edge */}
      <View style={[styles.titleBanner, styles.collectionTitleBanner]}>
        <Text style={styles.comicTitle}>CHARACTER</Text>
        <Text style={styles.issueNumber}>COLLECTION</Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity 
        onPress={navigateToHome}
        style={[styles.directionButton, { backgroundColor: '#E91E63' }]}
      >
        <Text style={styles.directionButtonText}>BACK TO SHOWCASE!</Text>
      </TouchableOpacity>

      {/* Grid of All Characters */}
      <ScrollView
        contentContainerStyle={styles.collectionGrid}
        showsVerticalScrollIndicator={false}
      >
        {allCharacters.map((character, index) => (
          <CollectionItem key={index} character={character} />
        ))}
      </ScrollView>
      
      {/* Collection Footer */}
      <View style={[styles.comicFooter, { backgroundColor: '#E91E63' }]}>
        <Text style={styles.footerText}>A Saiyan has no limits!💥</Text>
      </View>
    </View>
  );
};

// Main App Component
export default function App() {
  // State to track current screen
  const [currentScreen, setCurrentScreen] = useState('home');

  // Navigation functions
  const navigateToCollection = () => setCurrentScreen('collection');
  const navigateToHome = () => setCurrentScreen('home');

  // Render the appropriate screen based on state
  return (
    <>
      {currentScreen === 'home' && <HomeScreen navigateToCollection={navigateToCollection} />}
      {currentScreen === 'collection' && <CollectionScreen navigateToHome={navigateToHome} />}
    </>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDE7', // Comic page cream color
    paddingVertical: 8,
  },
  // Container without top padding for collection screen
  containerNoTopPadding: {
    flex: 1,
    backgroundColor: '#FFFDE7', // Comic page cream color
    paddingBottom: 8,
    paddingTop: 0, // No padding at the top
  },
  titleBanner: {
    backgroundColor: '#FF5722',
    padding: 10,
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#000',
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
    transform: [{ rotate: '-2deg' }],
  },
  // Special styling for collection title banner to be at the very top
  collectionTitleBanner: {
    backgroundColor: '#E91E63',
    marginTop: 0,
    marginBottom: 15,
    borderRadius: 0,
    borderTopWidth: 0, // No border at the top
    transform: [{ rotate: '0deg' }], // No rotation for cleaner top alignment
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginHorizontal: 0,
    width: '100%',
  },
  comicTitle: {
    fontWeight: '900',
    fontSize: 32,
    color: '#FFEB3B',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    letterSpacing: 3,
  },
  issueNumber: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  directionButton: {
    alignSelf: 'center',
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: '#000',
    marginBottom: 16,
    transform: [{ rotate: '2deg' }],
  },
  directionButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Courier',
  },
  scrollViewContent: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  verticalScroll: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  comicPanel: {
    width: 320,
    borderWidth: 4,
    borderColor: '#000',
    margin: 8,
    overflow: 'hidden',
  },
  fullScreenPanel: {
    width: '100%',
  },
  imageContainer: {
    position: 'relative',
    height: 200,
    backgroundColor: '#FFF',
  },
  characterImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  actionBurst: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#FFEB3B',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#000',
  },
  actionText: {
    fontWeight: '900',
    fontSize: 16,
    color: '#FF0000',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  infoBox: {
    padding: 10,
    backgroundColor: '#FFF',
  },
  characterName: {
    fontSize: 24,
    fontWeight: '900',
    color: '#000',
    textAlign: 'center',
    marginBottom: 5,
    letterSpacing: 1,
    textShadowColor: '#ccc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  titleStrip: {
    backgroundColor: '#000',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  characterTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  captionBox: {
    backgroundColor: '#FFFDE7',
    borderWidth: 2,
    borderColor: '#000',
    padding: 8,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Courier',
    color: '#000',
  },
  speechBubble: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000',
    padding: 10,
    marginBottom: 5,
    position: 'relative',
  },
  quoteText: {
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  comicFooter: {
    backgroundColor: '#000',
    paddingVertical: 8,
    alignItems: 'center',
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#FF5722',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    letterSpacing: 2,
  },
  
  // Collection Grid styles 
  collectionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  gridItem: {
    width: '48%',
    marginBottom: 16,
    height: 200,
  },
  collectionComicPanel: {
    width: '100%',
    height: '100%',
    borderWidth: 4,
    borderColor: '#000',
    overflow: 'hidden',
  },
  collectionImageContainer: {
    position: 'relative',
    height: '60%',
    backgroundColor: '#FFF',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  collectionCharacterImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  collectionActionBurst: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    backgroundColor: '#FFEB3B',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000',
    transform: [{ scale: 0.8 }],
  },
  collectionActionText: {
    fontWeight: '900',
    fontSize: 5,
    color: '#FF0000',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  collectionInfoBox: {
    padding: 6, 
    backgroundColor: '#FFF',
    height: '40%',
    justifyContent: 'center',
  },
  collectionCharacterName: {
    fontSize: 16,
    fontWeight: '900',
    color: '#000',
    textAlign: 'center',
    marginBottom: 3,
    letterSpacing: 1,
  },
  collectionTitleStrip: {
    backgroundColor: '#000',
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  collectionCharacterTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  
  // Modal Popup Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
  },
  modalContent: {
    width: width * 0.85,
    maxHeight: height * 0.85,
    backgroundColor: '#FFFDE7',
    borderRadius: 15,
    padding: 0,
    overflow: 'hidden',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
  },
  modalTitleBanner: {
    width: '100%',
    padding: 10,
    backgroundColor: '#FF5722',
    alignItems: 'center',
  },
  modalCharacterName: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FFEB3B',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    letterSpacing: 2,
    marginBottom: 4,
  },
  modalCharacterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  modalImageContainer: {
    position: 'relative',
    height: 220,
    backgroundColor: '#FFF',
    borderBottomWidth: 3,
    borderBottomColor: '#000',
  },
  modalCharacterImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  modalActionBurst: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    backgroundColor: '#FFEB3B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#000',
  },
  modalActionText: {
    fontWeight: '900',
    fontSize: 9,
    color: '#FF0000',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  modalCaptionBox: {
    backgroundColor: '#FFFDE7',
    borderWidth: 2,
    borderColor: '#000',
    padding: 12,
    margin: 10,
  },
  modalDescriptionText: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Courier',
    color: '#000',
  },
  modalSpeechBubble: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000',
    padding: 12,
    margin: 10,
    marginTop: 0,
    position: 'relative',
  },
  modalQuoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  }
});
