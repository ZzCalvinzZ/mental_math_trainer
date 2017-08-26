import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  column: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  digitText: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
    marginTop: 20,
    fontSize: 30,
  },
  digitSelect: {
    flexDirection: 'column',
  },
  ok: {
    width: 150,
    height: 60,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  operatorButton: {
    width: 60,
    height: 60,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  btnText: {
    fontSize: 30,
    color: 'white',
  },
  number: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontSize: 40,
    textAlign: 'right',
  },
  calcContainer: {
  },
  lastNumber: {
    borderBottomWidth: 2,
  }
});
