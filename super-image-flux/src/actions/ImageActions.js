import Dispatcher from '../Dispatcher';

class ImageActions {

    onImage(image, name) {
        Dispatcher.dispatch({
            type: "ON_IMAGE",
            image: image,
            name: name
        });
    }

}

export default new ImageActions();