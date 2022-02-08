import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

import colors from '../theme/Colors';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

export default class Camera extends Component {
    constructor(props){
        super(props);
    }

    options = {
        title: 'Foto',
        storageOptions: {
          skipBackup: true,
          cameraRoll: true,
          path: 'images'
        },
        cancelButtonTitle: 'Cancel',
        takePhotoButtonTitle: 'Take a picture',
        chooseFromLibraryButtonTitle: 'Library',
        mediaType: 'photo',
        maxWidth: 800,
        maxHeight: 800,
    };

    optionsCrop = {
        width: 400,
        height: 400,
        includeBase64: true,
        mediaType: 'photo'
    };

    openCamera() {
        if (this.props.edit) {
            ImagePicker.showImagePicker({...this.options, maxWidth: this.props.cropWidth*2, maxHeight: this.props.cropHeight*2}, (response) => {
                // console.log('Response = ', response);

                if (response.didCancel) {
                //   console.log('User cancelled image picker');
                }
                else if (response.error) {
                //   console.log('ImagePicker Error: ', response.error);
                }
                else if (response.customButton) {
                //   console.log('User tapped custom button: ', response.customButton);
                }
                else {
                    ImageCropPicker.openCropper({...this.optionsCrop, path: response.uri, width: this.props.cropWidth, height: this.props.cropHeight}).then(image => {
                        // console.log(image);
                        this.props.ret(image.path, image.data);
                    });
                }
            });
        }
    }

    getImage() {
        // if (this.props.user && (this.props.image + "").indexOf("http") < 0 && (this.props.image + "").indexOf("file") < 0) {
        //     return (
        //         <Image style={{width: this.props.backWidth, height: this.props.backHeight ,backgroundColor: colors.azulClaro,}} source={require('../assets/images/user.png')} />
        //     );
        // }

        if (!this.props.user && (this.props.image + "").indexOf("http") < 0 && (this.props.image + "").indexOf("file") < 0) {
            return (
                <Image resizeMode={'cover'} style={{backgroundColor: colors.azulClaro, margin: this.props.margin, width: this.props.backWidth, height: this.props.backHeight}} source={require('../assets/imgs/no-image.png')} />
            );
        }

        return (
            <Image resizeMode={'stretch'} style={{padding: 30,width: this.props.imageWidth, height: this.props.imageHeight, borderRadius: this.props.containerRadius,}} source={{uri: this.props.image}} />
        );
    }

  render() {

    // console.log(this.props);

    return (
        
        <TouchableHighlight style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: this.props.containerWidth,
            height: this.props.containerHeight,
            paddingBottom: this.props.paddingBottom,
            elevation: this.props.containerElevation,
            borderRadius: this.props.containerRadius,
            //backgroundColor: this.props.conatinerColor,
            }} onPress={() => this.openCamera() } underlayColor={'transparent'} >

            {this.getImage()}

        </TouchableHighlight>
    );
  }
}
