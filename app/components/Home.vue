<template>
  <Page class="page" actionBarHidden="true">
    <GridLayout rows="auto, *, auto" columns="*, *, *">
      <Image
        src="~/assets/logo.png"
        width="195"
        marginTop="20"
        row="0"
        col="0"
        colSpan="3"
      />
      <component
        v-for="(component, index) in componentsArray"
        v-show="component === currentComponent"
        :key="index"
        :is="component"
        row="1"
        col="0"
        colSpan="3"
      />
      <Button
        text.decode="&#xf015;"
        :class="navigationButtonClasses('CardOfTheDay')"
        @tap="currentComponent = 'CardOfTheDay'"
        row="2"
        col="0"
      />
      <Button
        text.decode="&#xf0c9;"
        :class="navigationButtonClasses('CardList')"
        @tap="currentComponent = 'CardList'"
        row="2"
        col="1"
      />
      <Button
        text.decode="&#xf24d;"
        :class="navigationButtonClasses('Reading')"
        @tap="currentComponent = 'Reading'"
        row="2"
        col="2"
      />
    </GridLayout>
  </Page>
</template>

<script>
import CardOfTheDay from "../components/CardOfTheDay";
import CardList from "../components/CardList";
import Reading from "../components/Reading";

export default {
  components: {
    CardOfTheDay,
    CardList,
    Reading,
  },
  data() {
    return {
      currentComponent: "CardOfTheDay",
      componentsArray: ["CardOfTheDay", "CardList", "Reading"],
    };
  },
  computed: {
    navigationButtonClasses() {
      return (component) => ({
        fa: true,
        "nav-btn": true,
        purple: component === this.currentComponent,
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}

.nav-btn {
  color: #9d95b4;
  margin: 20;
  font-size: 30;
  padding: 10;
}

.purple {
  background-color: #5326bf;
  color: white;
  font-size: 30;
  border-radius: 10;
}

Button {
  background-color: rgba(255, 0, 0, 0);
  border-color: rgba(255, 0, 0, 0);
  border-width: 1;
}
</style>
