import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
   if (index === this.props.data.length - 1) {
     return (
       <Button
         title="Get started"
         raised
         buttonStyle={styles.slideButton}
         onPress={this.props.onComplete}
       />
     );
   }
 }

  renderSlides() {
    return this.props.data.map((slide, index) => (
        <View
          key={index}
          style={[styles.slide, { backgroundColor: slide.color }]}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
          <View style={{marginTop: 15}}>
            {this.renderLastSlide(index)}
          </View>
        </View>
    ));
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 30,
    color: 'white',
    padding: 10,
  },
  slideButton: {
    backgroundColor: '#AF4425',
  }
};

export default Slides;
