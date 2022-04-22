<template>
  <div class="flex h-12 px-2 items-center text-txt2 clickable-highlight">
    <div
      class="rounded-full flex-none relative w-8 h-8 mr-3"
      :class="colorClass"
      :style="
        picUrl && {
          background: `url('${this.picUrl}')`,
          'background-size': 'cover',
        }
      "
    >
      <div
        v-if="online"
        class="online-status absolute rounded-full w-3 h-3 bg-green-400 border-2 border-dc3 bottom-0 right-0"
      ></div>
    </div>
    <div class="flex-auto truncate">
      <p class="text-base truncate" :class="[this.admin && 'text-green-400']">
        {{ userName }}
      </p>
      <p class="text-xs font-bold truncate text-txt2">{{ userStatus }}</p>
    </div>
  </div>
</template>

<script>
import { getRandomColor } from "../utils/util";

export default {
  name: "UserSummary",
  props: {
    userName: String,
    userStatus: String,
    admin: Boolean,
    online: Boolean,
    picUrl: String,
  },
  data() {
    return {};
  },
  computed: {
    colorClass() {
      return "bg-" + getRandomColor();
    },
  },
};
</script>
