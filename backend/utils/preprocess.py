# helper preprocess functions for images
from tensorflow.keras.preprocessing import image
import numpy as np

def preprocess_image(path, target_size=(224,224)):
    img = image.load_img(path, target_size=target_size)
    arr = image.img_to_array(img) / 255.0
    arr = np.expand_dims(arr, axis=0)
    return arr
