<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <p class="point-text">10</p>
              <p class="unit-text">point</p>
              <p class="point-get">ゲット！</p>
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
export default {
  name: "GetPoint"
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
  position: relative;
  justify-content: center;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  border-radius: 2px;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  position: relative;
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

.point-text, .unit-text, .point-get {
  margin: 0;
  padding: 0;
  text-shadow: -3px 1px 2px #ff2222, 0 0 1em #ff2222, 0 0 0.2em #ff2222;
}

.modal-body .point-text {
    font-size: 4rem;
    font-weight: bold;
}

.modal-body .unit-text {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.modal-body .point-get {
    font-size: 2rem;
}
</style>
