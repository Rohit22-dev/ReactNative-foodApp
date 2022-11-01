import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: '#1AC073',
  },
  navbar: {
    height: '10%',
    width: '100%',
    paddingHorizontal: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  nTitle: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'SquadaOne-Regular',
  },
  nIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  hData: {
    width: '100%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  hDataTitle: {
    fontSize: 40,
    fontWeight: '500',
  },
  hImg: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
});

export default styles;
