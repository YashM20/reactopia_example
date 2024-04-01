import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, ReduceMotion, withSpring } from 'react-native-reanimated';

const TruncatedText = ({ text = "Yash Mahajan Yash MahAJAN" }) => {
  const maxLength = 8;
  const isExpanded = useSharedValue(false);
  const [expanded, setExpanded] = React.useState(false);
  const animatedHeight = useSharedValue(0);

  const truncatedText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  const handlePress = () => {
    isExpanded.value = !isExpanded.value;
    setExpanded(!expanded);
  };

  const animatedStyle = useAnimatedStyle(() => {
    const height = isExpanded.value ? withSpring(animatedHeight.value + 100, {
      mass: 1,
      damping: 10,
      stiffness: 100,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 45.81,
      reduceMotion: ReduceMotion.System,
    }) :
      withSpring(animatedHeight.value - 100, {
        duration: 2600,
        dampingRatio: 0.5,
        stiffness: 100,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
        reduceMotion: ReduceMotion.System,
      });
    return {
      height,
    };
  });


  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ backgroundColor: "blue" }}
    >
      <Animated.Text style={[{ overflow: 'hidden', color: "white" }, animatedStyle]}>
        {expanded ? text : truncatedText}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default TruncatedText;