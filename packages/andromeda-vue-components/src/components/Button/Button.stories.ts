import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import Button from "./Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "components/Button",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/ji3aDP1P9KytBlR2HrgkEu/E-commerce-Cards---Figma-Freebie-(Community)?node-id=23-11510&t=pCyuuutmPXOInJ7p-1",
    },
    layout: "centered",
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["button", "submit", "reset"] },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
    default: { control: "text" },
  },
  args: {
    type: "button",
    disabled: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
    default: "Button",
  },
} satisfies Meta<typeof Button>;

const render = (args: any) => ({
  components: { Button },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Button v-bind="args">{{args.default}}</Button>',
});

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render,
  args: {
    type: "button",
    disabled: false,
    onClick: fn(),
    default: "Button",
  },
};
