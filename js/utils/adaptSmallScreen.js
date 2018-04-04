import { Dimensions } from "react-native"

const smallWidth = 375;
const scale = .8;
const { width, height } = Dimensions.get('window');

export default {
    adjustFontSizeInSmallScreen(fontSize) {
      if ( width <= smallWidth ) {
          return fontSize * scale;
      }else {
          return fontSize;
      }  
    },

    adjustComponentSizeInSmallScreen(size) {
        if ( width <= smallWidth ) {
            return size * scale;
        }else {
            return size;
        }            
    }

}