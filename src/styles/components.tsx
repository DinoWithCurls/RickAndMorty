import {StyleSheet} from 'react-native';
//All the CSS for the components are inside here
const ComponentStyle = StyleSheet.create({
  cardContainer: {
    width: '100%',
    flex: 1,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 25,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    width: '50%',
    height: '25%',
    position: 'absolute',
    top: 25,
  },
  imageStyle: {
    resizeMode: 'stretch',
    height: '100%',
    width: '100%',
    borderRadius: 25,
  },
  textContainer: {
    flexDirection: 'column',
    width: '95%',
    height: '70%',
    paddingTop: 20,
    paddingLeft: 5,
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: 5,
  },
  headerText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Copperplate-Bold',
    fontSize: 30,
  },
  contentText: {
    fontFamily: 'Copperplate-Bold',
    fontSize: 18,
    flexWrap: 'wrap',
  },
  subHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subHeaderLine: {flex: 1, height: 1, backgroundColor: 'black'},
  subHeaderText: {
    fontFamily: 'Copperplate-Bold',
    fontSize: 22,
  }
});

export default ComponentStyle;
