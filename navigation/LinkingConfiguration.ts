import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Stocks: {
            screens: {
              StocksScreen: 'stocks',
            },
          },
          Search: {
            screens: {
              SearchScreen: 'search',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
