import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

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

const CharacterPanel = ({ character }: { character: typeof characters[0] }) => {
  // State to manage whether the panel is zoomed/focused
  const [isZoomed, setIsZoomed] = useState(false);

  // Toggle zoom effect on press
  const handlePress = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
      <View 
        style={[
          styles.comicPanel, 
          { backgroundColor: character.bgColor },
          isZoomed && styles.zoomedPanel
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
          
          {/* Description Caption */}
          <View style={styles.captionBox}>
            <Text style={styles.descriptionText}>{character.description}</Text>
          </View>
          
          {/* Quote Speech Bubble */}
          <View style={styles.speechBubble}>
            <Text style={styles.quoteText}>{character.quote}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ComicBookLayout = () => {
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
      
      {/* Comic Book Footer */}
      <View style={styles.comicFooter}>
        <Text style={styles.footerText}>COLLECT ALL CHARACTERS!</Text>
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  return <ComicBookLayout />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDE7', // Comic page cream color
    paddingVertical: 8,
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
  zoomedPanel: {
    transform: [{ scale: 1.05 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 15,
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
});