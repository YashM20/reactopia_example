import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
  interpolate,
} from "react-native-reanimated";
import theme from '../theme.ts'

export const Ring = ({ delay }) => {
  const ring = useSharedValue(0);

  const ringStyle = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - ring.value,
      transform: [
        {
          scale: interpolate(ring.value, [0, 1], [0, 4]),
        },
      ],
    };
  });
  useEffect(() => {
    ring.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 4000,
        }),
        -1,
        false
      )
    );
  }, []);
  return <Animated.View style={[styles.ring, ringStyle]} />;
};

const AnimatedRingExample = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Ring delay={0} />
      <Ring delay={1000} />
      <Ring delay={2000} />
      <Ring delay={3000} />
    </View>
  );
}

export default AnimatedRingExample;

const styles = StyleSheet.create({
  ring: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 100,
    // borderColor: "tomato",
    borderColor: theme.colors.accent,
    borderWidth: 10,
  },
});