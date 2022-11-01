import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    foodData: {
    width: '100%',
    height: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  foodBox: {
    display: 'flex',
    width: '100%',
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
  },

  // shadowProp isn't working
  shadowProp: {
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity:2,  
    shadowRadius: 3,  
    elevation: 1,
  },
  fImg: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
  fData: {
    width: '100%',
    height: '20%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  }
});

export default styles;
