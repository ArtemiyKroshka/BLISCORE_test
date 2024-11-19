<template>
  <div>
    <h1>Tree View</h1>
    <TreeView :data="treeData" />
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import TreeView from "./components/TreeView.vue";
import type {City} from "@/types/tree.ts";
import data from "./assets/data.json";

const treeData = ref<City[]>([]);

onMounted(() => {
  treeData.value = data;
});
</script>
