<template>
  <GridLayout rows="auto, auto" verticalAlignment="top">
    <Label row="0" class="title med" text="Card of The Day" textWrap="true" />
    <GridLayout row="1" rows="2*, *, 3*, 3*" class="card">
      <Label row="0" class="card-title" :text="name" textWrap="true" />
      <StackLayout
        v-if="reversed"
        row="1"
        style="margin: 5"
        verticalAlignment="top"
        horizontalAlignment="center"
        orientation="horizontal"
      >
        <Label class="fa status" text.decode="&#xf021;" />
        <Label class="status" text=" REVERSED" />
      </StackLayout>
      <Image row="2" v-if="major" :class="icon" :src="emoji" />
      <StackLayout
        row="2"
        v-if="!major"
        horizontalAlignment="center"
        orientation="horizontal"
      >
        <Image style="margin: 5" v-if="!major" :class="icon" :src="emoji1" />
        <Image style="margin: 5" v-if="!major" :class="icon" :src="emoji2" />
      </StackLayout>
      <Label row="3" class="meaning" textWrap="true" :text="meaning" />
    </GridLayout>
  </GridLayout>
</template>

<script>
import Tarot from "../mixins/tarot";

export default {
  name: "CardOfTheDay",
  mixins: [Tarot],
  data() {
    return {};
  },
  methods: {
    getMyCard(context) {
      let sNum = Math.floor(Math.random() * 2);
      let rNum = Math.round(Math.random() * 72);
      this.getOneCard(context, sNum, rNum);
    },
  },
  created() {
    this.getMyCard();
  },
};
</script>

<style scoped lang="scss">
.meaning {
  font-size: 16;
  color: #131636;
  text-align: center;
  margin: 0 20;
}
.status {
  color: #323340;
  opacity: 0.5;
  font-size: 14;
}
</style>
