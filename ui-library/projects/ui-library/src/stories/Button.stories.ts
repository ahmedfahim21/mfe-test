import { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "../lib/button/button.component";


export default {
  title: "Components/Button",
  component: ButtonComponent,
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

type Story = StoryObj<ButtonComponent>;

const Template: Story = {
  render: (args: ButtonComponent) => ({
    props: { ...args },
  }),
};

export const Default: Story = {
  ...Template,
  args: {
    label: "Click Me"
  },
};
