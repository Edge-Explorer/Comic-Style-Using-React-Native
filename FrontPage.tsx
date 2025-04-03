import { StyleSheet, Text, View, Image, Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';

export default function FrontPage() {
  // Create animated value for vertical movement
  const floatAnim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    // Create floating animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 15,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dragon Ball Z🐉</Text>
      
      <Animated.View
        style={[
          styles.imageContainer,
          {
            transform: [{ translateY: floatAnim }]
          }
        ]}
      >
        {/* Using an online placeholder image to avoid missing local asset error */}
        <Image 
          source={{ uri: 'https://vignette.wikia.nocookie.net/dragonball/images/e/ef/Shen_Long_Artwork.png/revision/latest?cb=20160919225353&path-prefix=es' }} 
          style={styles.dragonImage} 
          resizeMode="contain"
        />
      </Animated.View>
      
      <Text style={styles.instruction}>
        Make Your 3 wishes!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFEB3B',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    marginBottom: 40,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  imageContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragonImage: {
    width: 300,
    height: 300,
  },
  instruction: {
    fontWeight: '900',
    fontSize: 36,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 30,
  }
});
