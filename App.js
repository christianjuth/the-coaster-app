import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions } from 'react-native';

let quotes = [
  "WHERE THERE'S A WINE THERE'S A WAY",
  "THIS DRINK IS ON ME",
  "FORGIVE ME, FOR I HAVE GIN-NED",
  "ALE YEAH!",
  "GIVE INTO BEER PRESSURE",
  "BEER MAKES ME HOPPY!",
  "GO AHEAD, PUT YOUR BOTTOM ON ME",
  "I ENJOY BEING USED",
  "I LIKE A TALL DRINK OF WATER ON TOP OF ME",
  "LET THE PARTY BE GIN!",
  "JUST RENEWED MY GIN MEMBERSHIP",
  "SOBRIETY IS NOT IN MY VODKABULARY",
  "LIQUOR MIGHT NOT SOLVE ALL YOUR PROBLEMS, BUT ITS WORTH A SHOT!",
  "MY RELATIONSHIP WITH WHISKEY IS ON THE ROCKS",
  "ALCOHOL YOU LATER",
  "ACCORDING TO CHEMISTRY, ALCOHOL IS A SOLUTION",
  "HE CARRIED RUM OVER HIS HEAD ATTEMPTING TO LIFT HIS SPIRITS!"
];

export default function App() {
  let [size, setSize] = useState(0),
    [quote, setQuote] = useState('');

  function onLayout() {
    let { height, width } = Dimensions.get('window');
    setSize(Math.min(height, width, 400) * 0.9);
  }

  useEffect(() => {
    const random = (max) => Math.floor(Math.random() *  max);
    setQuote(quotes[random(quotes.length)]);
  }, []);

  return (
    <View
      onLayout={onLayout}
      style={{ 
        flex: 1 ,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{
        marginBottom: 20,
        fontStyle: 'italic',
        color: '#888'
      }}>The Coaster App</Text>
      <View style={{ 
        height: size, 
        width: size,
        padding: 20,
        backgroundColor: '#000',
        borderRadius: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{ 
          color: '#fff', 
          fontSize: size * 0.05,
          textAlign: 'center'
        }}>{quote}</Text>
      </View>
      <Text style={{
        marginTop: 20,
        fontStyle: 'italic',
        color: '#888'
      }}>(refresh the page for more bad jokes)</Text>
    </View>
  );
}
