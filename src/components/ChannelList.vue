<template>
  <div class="text-xs pt-4">
    <channel-group
      v-for="group in groups"
      :key="group.id"
      :groupName="group.name"
    >
      <template v-for="channel in channels" :key="channel.id">
        <channel-summary
          v-if="channel.group == group.id"
          :type="channel.type"
          :channelName="channel.name"
          :isActive="$store.state.currentChannel.id === channel.id"
          @click="
            channel.type === 'text' &&
              $store.dispatch('changeCurrentChannel', channel.id)
          "
        />
      </template>
    </channel-group>
  </div>
</template>

<script>
import ChannelGroup from "./ChannelGroup";
import ChannelSummary from "./ChannelSummary";
import { channels, groups } from "../data/data";
export default {
  name: "ChannelList",
  components: {
    ChannelGroup,
    ChannelSummary,
  },
  data() {
    return {
      groups: [],
      channels: [],
    };
  },
  created() {
    this.groups = groups;
    this.channels = channels;
  },
};
</script>
