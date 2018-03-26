import React, {Component} from 'react';
import {Platform, View, Dimensions, StyleSheet, Image, TouchableOpacity, PixelRatio} from 'react-native';
import Carousel from 'react-native-snap-carousel';

// todo test data
const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg'
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg'
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg'
  }
];

const IS_IOS = Platform.OS === 'ios';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.18;
const slideWidth = wp(82);
const itemHorizontalMargin = wp(3);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 5;

/**
 * 走马灯效果组件
 */
export default class SnapCarouselComponent extends Component {

  _renderItem({item, index}) {
    return (
        <TouchableOpacity activeOpacity={1} style={styles.slideInnerContainer} onPress={() => {
          alert(`You've clicked '${item.title}'`);
        }}>
          <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{uri: item.illustration}}
            />
          </View>
        </TouchableOpacity>
    );
  }

  render() {
    return (
        <Carousel layout={'default'}
                  data={ENTRIES1}
                  renderItem={this._renderItem}
                  itemWidth={itemWidth}
                  sliderWidth={sliderWidth}
                  loop={true}
        />
    );
  }
}

const styles = StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingBottom: 10, // needed for shadow
    paddingTop: 10
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: entryBorderRadius,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    flex: 1,
    borderRadius: entryBorderRadius,
  },
});
