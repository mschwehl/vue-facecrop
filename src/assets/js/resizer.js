export async function Resizer(file, sizeX, sizeY)  {
    
    sizeX ??= 600
    sizeY ??= 800

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
  
    canvas.width = sizeX
    canvas.height = sizeY
  
    const bitmap = await createImageBitmap(file)
    const { width, height } = bitmap
  
    const ratio = Math.max(sizeX / width, sizeY / height)
  
    const x = (sizeX - (width * ratio)) / 2
    const y = (sizeY - (height * ratio)) / 2
  
    ctx.drawImage(bitmap, 0, 0, width, height, x, y, width * ratio, height * ratio)
  
    return canvas.toDataURL("image/jpeg");


  }


  export async function ImageSize(image) {
      
      var img = new Image();

      img.src = image;
      await img.decode();

      var foo = [];
      foo.push(img.height);
      foo.push(img.width);

    	return foo;

  } 

