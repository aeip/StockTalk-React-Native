import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function SearchScreen() {
  const [searchText, setSearchText] = React.useState('');
  React.useEffect(() => { 
    fetch(`https://morning-star.p.rapidapi.com/market/v2/auto-complete?q=${searchText}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "dc2bf32251msh62317fa183f8ffep101b6bjsnb8e120a49238",
		"x-rapidapi-host": "morning-star.p.rapidapi.com"
	}
})
.then(function(response) {
  return response.text();
}).then(function(data) {
  console.log(data);
});
  }, [searchText]);
  return (
    <View style={styles.container}>
          <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setSearchText(text)}
      value={searchText}
    />
      {/* <Text style={styles.title}>Search</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/SearchScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
