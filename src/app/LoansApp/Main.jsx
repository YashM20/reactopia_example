import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Ring } from './components/Ring/'
import TruncatedText from './components/TruncatedText'
import Animated, { ReduceMotion, useAnimatedReaction, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import {
  Canvas, LinearGradient, vec, Circle, Group
} from '@shopify/react-native-skia';
const _color = "#FFA500";
const _size = 100;

const LoanApp = () => {
  const size = useSharedValue(0);
  const displayRing = useSharedValue(false);
  // const [displayRing, setDisplayRing] = useState(false);
  // const displayRing = useRef(false);

  // first time load increase the size of image to 100
  useEffect(() => {
    size.value = withSpring(_size, {
      duration: 1800,
      dampingRatio: 0.6,
      stiffness: 10,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 2,
      reduceMotion: ReduceMotion.System,
    });

  }, []);


  const animatedImgStyle = useAnimatedStyle(() => {
    return {
      width: size.value,
      height: size.value,
    };
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: displayRing.value ? 1 : 0,
    };
  });

  useAnimatedReaction(
    () => size.value,
    (sizeValue) => {
      if (sizeValue > _size / 1.2) {
        displayRing.value = true;
      }
    },
    [size]
  );

  const width = 256;
  const height = 256;
  const r = 128;


  return (
    <View style={{flex:1}}>
      {/* <Canvas style={{ width, height }}>
        <Circle cx={r} cy={r} r={r}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(2 * r, 2 * r)}
            colors={["#00ff87", "#60efff"]}
          />
        </Circle>

        <Group>
          <LinearGradient
            start={vec(2 * r, 2 * r)}
            end={vec(4 * r, 4 * r)}
            colors={["#0061ff", "#60efff"]}
          />
          <Circle cx={3 * r} cy={3 * r} r={r} />
        </Group>
      </Canvas> */}

      <View className='flex-1 items-center justify-center' >
        <Animated.View
          className="justify-center items-center"
          style={[{
            // backgroundColor: _color,
            borderRadius: _size / 2,
          }, animatedImgStyle]}
        >
          <Animated.View style={[animatedStyle, {
            alignItems: 'center',
          }]}>
            {[...Array(4).keys()].map((_, index) => {
              return (
                <Ring key={index} delay={index * 1000} />
              )
            })}
          </Animated.View>
          <Image
            source={{
              uri: 'https://picsum.photos/seed/picsum/200'
            }}
            className='w-full h-full rounded-full'
            resizeMode='cover'
          />
        </Animated.View>
        {/* <TruncatedText /> */}
      </View>
      <Text className="text-2xl text-center text-white">Get Loans in Minutes</Text>
      <Text className="text-2xl text-center text-white">Meet Financial needs and achieve specific goals.</Text>
    </View>
  );
}

export default LoanApp;

const styles = StyleSheet.create({
  // dot: {
  //   width: _size,
  //   height: _size,
  //   backgroundColor: _color,
  //   borderRadius: _size
  // },
})