<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop="prevent">
          <div class="modal-header">
            <slot name="header"></slot>
            <button class="close-button" @click="$emit('close')">X</button>
          </div>

          <div class="modal-body">
            <slot name="body">
              <template v-if="!showImage">
                <div @click.prevent="toggleImage">
                  <p><v-icon name="camera" scale="5" /></p>
                  <p>撮影</p>
                </div>
              </template>
              <template v-else>
                <img src="../assets/busstop.jpg" @click="$emit('shooted')" />
              </template>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"> </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

export default {
  name: "CameraModal",
  components: {
    "v-icon": Icon
  },
  data() {
    return {
      showImage: false
    };
  },
  methods: {
    prevent(e) {},
    toggleImage() {
      this.showImage = !this.showImage;
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  height: 60vh;
  width: 60vw;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  position: relative;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body p:first-child {
  margin-top: 12rem;
}

.modal-body p:last-child {
  font-size: 3rem;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.close-button {
  position: absolute;
  top: 5px;
  right: 5px;
  font-weight: bold;
  font-size: 1.5rem;
}

img {
  width: 100%;
  height: 100%;
}
</style>
