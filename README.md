# vue-facecrop

Crop an Image 
Uploaded Image is scaled up to meet at least 600x800. Cropped is to saved as 600x800 px

This simple page use the superb https://github.com/advanced-cropper/vue-advanced-cropper

## Browser-App
The Images are not processed serverside, the Imges stays in the Browser-Window

## Screenshots
![screenshot](/doc/media/screenshot.jpg?raw=true "Screenshot")

## Docker

```docker run --rm -p 80:8080 mschwehl/vue-facecrop:latest```

# TODO
- Settings are just a mockup, code to make them work
- Face-Detect

---
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
