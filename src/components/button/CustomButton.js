import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  Text,

} from 'react-native';

const styles = StyleSheet.create({

});

const CustomButton = ({
  active, text, style, onPress, children,
}) => {
  const styleObj = {
    ...style,
    justifyContent: 'center',
    width: 300,
    height: 50,
  };
  return (

    <TouchableOpacity
      onPress={active ? onPress : null}
      style={styleObj}
    >
      {
        children || <Text>{text}</Text>
      }
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  active: propTypes.bool,
  text: propTypes.string,
  style: propTypes.instanceOf(Object),
  onPress: propTypes.func,
  children: propTypes.element,
};

CustomButton.defaultProps = {
  active: true,
  text: '',
  style: {},
  onPress: h => h,
  children: null,
};

export default CustomButton;
