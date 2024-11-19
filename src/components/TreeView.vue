<template>
  <ul>
    <li v-for="node in data" :key="node.name">
      <div>
        {{ node.name }}
        Salary: {{ calculateSalary(node) }} Age: {{ calculateAverageAge(node) }}
      </div>
      <TreeView
        v-if="node.children && node.children.length > 0"
        :data="node.children"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {City, Shop, Employee} from "@/types/tree";

type TreeNode = City | Shop | Employee;

const props = defineProps<{
  data: TreeNode[];
}>();

function calculateSalary(node: TreeNode): number {
  if ("children" in node) {
    return node.children.reduce(
      (sum, child) => sum + calculateSalary(child),
      0
    );
  }
  return node.salary || 0;
}

function calculateAverageAge(node: TreeNode): number {
  if ("children" in node) {
    const ages = node.children.map((child) => calculateAverageAge(child));
    const totalAge = ages.reduce((sum, age) => sum + age, 0);
    return Math.round(totalAge / ages.length);
  }
  return node.age || 0;
}
</script>
