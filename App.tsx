import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import FrontPage from './components/FrontPage';
import FancyCards from './components/FancyCards';
import Anime from './components/Anime';
import Linking from './components/Linking';

const MainContent = () => (
  <ScrollView>
    <FancyCards />
    <Anime />
    <Linking />
  </ScrollView>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate boot delay before showing main content
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust delay (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <FrontPage /> : <MainContent />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
