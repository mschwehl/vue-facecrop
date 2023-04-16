<template>



<section id="header" class="bg-[#F8FAFC]" x-data="{ open: false }">
    <div class="container mx-auto overflow-hidden">
        <div class="flex items-center justify-between px-2 py-2 bg-[#F8FAFC]">
        <div class="w-auto">
            <div class="flex flex-wrap items-center">
            <div class="w-auto mr-14">
                <a class="max-w-max inline-flex items-center font-bold text-2xl text-gray-900 uppercase tracking-wider"
                href="#">
                <img class="h-8" src="https://tailwindsites.com/images/themes/happy/logo.png" alt=""><span
                    class="ml-2">Image Cropper</span>
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>

  <section id="features" class="py-3 bg-white overflow-hidden">
    <div class="container px-1 mx-auto">

      <div class="flex flex-wrap xl:items-start -m-8">
        <div class="w-full md:w-3/4 p-8">
          <cropper class="rounded-xl object-fill" ref="cropper" 
                :src="image" 
                :location="location"
                :zoomable="false"
                :auto-zoom="false"
                :default-boundaries="fit"
                :resizeImage="{ wheel: false }"
                :move-image="false"
                :fit-visible-area="visibleArea"
                :default-visible-area="visibleArea"

                :stencil-props="{
                  handlers: {},
                  movable: true,
                  resizable: true,
                  aspectRatio: 3/4,
                }" />
        </div>

        
        <div class="w-full md:w-1/4 p-8">
            <div class="md:max-w-md">
              <div class="flex flex-wrap -m-4">
                <div class="w-auto p-4">
                  <div class="flex flex-wrap -m-2">
                    <div class="w-auto p-2">
                      <svg width="28" height="28" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.66669 5.83329C4.66669 5.18896 5.18902 4.66663 5.83335 4.66663H22.1667C22.811 4.66663 23.3334 5.18896 23.3334 5.83329V8.16663C23.3334 8.81096 22.811 9.33329 22.1667 9.33329H5.83335C5.18902 9.33329 4.66669 8.81096 4.66669 8.16663V5.83329Z"
                          stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                          d="M4.66669 15.1666C4.66669 14.5223 5.18902 14 5.83335 14H12.8334C13.4777 14 14 14.5223 14 15.1666V22.1666C14 22.811 13.4777 23.3333 12.8334 23.3333H5.83335C5.18902 23.3333 4.66669 22.811 4.66669 22.1666V15.1666Z"
                          stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                          d="M18.6667 15.1666C18.6667 14.5223 19.189 14 19.8334 14H22.1667C22.811 14 23.3334 14.5223 23.3334 15.1666V22.1666C23.3334 22.811 22.811 23.3333 22.1667 23.3333H19.8334C19.189 23.3333 18.6667 22.811 18.6667 22.1666V15.1666Z"
                          stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>
                    <div class="flex-1 p-2">
                      <h3 class="text-lg font-semibold">Upload File</h3>
                    </div>
                    <div class="w-full p-2">
                      <div class="pb-8 border-b">
                        <input class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                          type="file"
                          ref="file"
                          @change="uploadImage($event)"
                          accept="image/*"  />
                        <p class="text-gray-600 font-medium leading-relaxed">Upload file</p>
                      </div>
                    </div>
                  </div>
                </div>
            
                <div class="w-auto p-4">
                  <div class="flex flex-wrap -m-2">
                    <div class="w-auto p-2">
                      <svg width="28" height="28" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.66669 5.83329C4.66669 5.18896 5.18902 4.66663 5.83335 4.66663H22.1667C22.811 4.66663 23.3334 5.18896 23.3334 5.83329V8.16663C23.3334 8.81096 22.811 9.33329 22.1667 9.33329H5.83335C5.18902 9.33329 4.66669 8.81096 4.66669 8.16663V5.83329Z"
                          stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                          d="M4.66669 15.1666C4.66669 14.5223 5.18902 14 5.83335 14H12.8334C13.4777 14 14 14.5223 14 15.1666V22.1666C14 22.811 13.4777 23.3333 12.8334 23.3333H5.83335C5.18902 23.3333 4.66669 22.811 4.66669 22.1666V15.1666Z"
                          stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                          d="M18.6667 15.1666C18.6667 14.5223 19.189 14 19.8334 14H22.1667C22.811 14 23.3334 14.5223 23.3334 15.1666V22.1666C23.3334 22.811 22.811 23.3333 22.1667 23.3333H19.8334C19.189 23.3333 18.6667 22.811 18.6667 22.1666V15.1666Z"
                          stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>
                    <div class="flex-1 p-2">
                      <h3 class="text-lg font-semibold">Save selected Area</h3>
                    </div>
                    <div class="w-full p-2">
                      <div class="pb-8 border-b">
                        <p class="text-gray-600 font-medium leading-relaxed">Save selected Area</p>
                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span @click="cropImageAndSave">Save Image</span>
        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-auto p-4">
                  <div class="flex flex-wrap -m-2">
                    <div class="w-auto p-2">
                      <svg width="28" height="28" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.66669 5.83329C4.66669 5.18896 5.18902 4.66663 5.83335 4.66663H22.1667C22.811 4.66663 23.3334 5.18896 23.3334 5.83329V8.16663C23.3334 8.81096 22.811 9.33329 22.1667 9.33329H5.83335C5.18902 9.33329 4.66669 8.81096 4.66669 8.16663V5.83329Z"
                          stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                          d="M4.66669 15.1666C4.66669 14.5223 5.18902 14 5.83335 14H12.8334C13.4777 14 14 14.5223 14 15.1666V22.1666C14 22.811 13.4777 23.3333 12.8334 23.3333H5.83335C5.18902 23.3333 4.66669 22.811 4.66669 22.1666V15.1666Z"
                          stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                          d="M18.6667 15.1666C18.6667 14.5223 19.189 14 19.8334 14H22.1667C22.811 14 23.3334 14.5223 23.3334 15.1666V22.1666C23.3334 22.811 22.811 23.3333 22.1667 23.3333H19.8334C19.189 23.3333 18.6667 22.811 18.6667 22.1666V15.1666Z"
                          stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>
                    <div class="flex-1 p-2">
                      <h3 class="text-lg font-semibold">Open Area in new Tab</h3>
                    </div>
                    <div class="w-full p-2">
                      <div class="pb-8 border-b">
                        <p class="text-gray-600 font-medium leading-relaxed">Open Area in new Tab</p>
                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                          <span @click="cropImage">Image in new Tab</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-auto p-4">
                  <div class="flex flex-wrap -m-2">
                    <div class="w-auto p-2">
                      <svg width="28" height="28" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.66669 5.83329C4.66669 5.18896 5.18902 4.66663 5.83335 4.66663H22.1667C22.811 4.66663 23.3334 5.18896 23.3334 5.83329V8.16663C23.3334 8.81096 22.811 9.33329 22.1667 9.33329H5.83335C5.18902 9.33329 4.66669 8.81096 4.66669 8.16663V5.83329Z"
                          stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                          d="M4.66669 15.1666C4.66669 14.5223 5.18902 14 5.83335 14H12.8334C13.4777 14 14 14.5223 14 15.1666V22.1666C14 22.811 13.4777 23.3333 12.8334 23.3333H5.83335C5.18902 23.3333 4.66669 22.811 4.66669 22.1666V15.1666Z"
                          stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                          d="M18.6667 15.1666C18.6667 14.5223 19.189 14 19.8334 14H22.1667C22.811 14 23.3334 14.5223 23.3334 15.1666V22.1666C23.3334 22.811 22.811 23.3333 22.1667 23.3333H19.8334C19.189 23.3333 18.6667 22.811 18.6667 22.1666V15.1666Z"
                          stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>
                    <div class="flex-1 p-2">
                      <h3 class="text-lg font-semibold">Settings</h3>
                    </div>
                    <div class="w-full p-2">
                      <div class="pb-8 border-b">
                        

                        <form class="w-full max-w-lg">

                          <div class="flex flex-wrap -mx-3 mb-2">
                      
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                Ratio
                              </label>
                              <div class="relative">
                                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                  <option>Fixed</option>
                                  <option>Free</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                              </div>
                            </div>

                            <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                Filename
                              </label>
                              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="cropped_{filename}">
                            </div>

                           </div>
                          
                          <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                x-pixel
                              </label>
                              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="X">
                              </div>
                            <div class="w-full md:w-1/2 px-3">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                y-pixel
                              </label>
                              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Y">
                            </div>
                          </div>
 
             
                        </form>



                      </div>
                    </div>
                  </div>
                </div>

            
                
                

              </div>
            </div>
          </div>
      </div>
    </div>
  </section>


</template>

<script>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

import Pica from "pica";
import {  Resizer, ImageSize } from "@/assets/js/resizer"

export default {
  name: "App",
  data() {
    return {
      image:
        "",
      fileName : "",
    };
  },
  
  methods: {
    async cropImage() {
      const pica = new Pica();
      
      const { canvas } = this.$refs.cropper.getResult();
      const resultCanvas = document.createElement("canvas");

      resultCanvas.height = 800;
      resultCanvas.width = 600;
      
      await pica.resize(canvas, resultCanvas, {
        unsharpAmount: 25,
        unsharpRadius: 1,
        unsharpThreshold: 1,
        quality: 3,
      });

      // Perhaps you need to parse the image like in this example: https://norserium.github.io/vue-advanced-cropper/guides/recipes.html#load-image-from-a-disc
      const newTab = window.open();
      newTab.document.body.innerHTML = `<img src="${resultCanvas.toDataURL(
        "image/jpeg" 
      )}"></img>`;

      
      document.removeChild(resultCanvas);
    },


    async cropImageAndSave() {
      const pica = new Pica();
      
      const { canvas } = this.$refs.cropper.getResult();
      const resultCanvas = document.createElement("canvas");

      resultCanvas.height = 800;
      resultCanvas.width = 600;
      
      await pica.resize(canvas, resultCanvas, {
        unsharpAmount: 25,
        unsharpRadius: 1,
        unsharpThreshold: 1,
        quality: 3,
      });

     
      var ancor = document.createElement("a");
      ancor.href = resultCanvas.toDataURL(
        "image/jpeg" 
      );
      ancor.download = "bka_".concat (this.$data.fileName);
      ancor.click();

      document.removeChild(ancor);
      
      document.body.removeChild(resultCanvas);
    },

    async uploadImage(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
  
          var uploadImage = e.target.result;
          this.fileName = input.files[0].name;
          
          ImageSize(uploadImage).then(

          sizE => {

            var imageW = sizE[0];
            var imageH = sizE[1];

          //    this.image = "";
              if (imageW < 600 || imageH < 800) {

                console.log("need resize: " + imageW + "," + imageH);   
                const sized = Resizer(input.files[0],600,800).then( e =>
                    this.image = e
                )
                
              } else {
                this.image = e.target.result;
              }

            }
          )
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
  components: {
    Cropper,
  },
};


</script>
