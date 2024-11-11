<script lang="ts" setup>
import clsx from "clsx";
import styles from "./Button.module.css";

defineProps<{
  type: "button" | "submit" | "reset";
  disabled: boolean;
  onClick: () => void;
}>();
</script>

<template>
  <button
    :class="
      clsx(styles['Button'], {
        [styles['Button--disabled']]: disabled,
      })
    "
    :type="type"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>
