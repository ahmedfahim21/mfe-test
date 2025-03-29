import { Meta, StoryObj } from "@storybook/angular";
import { CardComponent } from "../lib/card/card.component";


export default {
  title: "Components/Card",
  component: CardComponent,
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

type Story = StoryObj<CardComponent>;

const Template: Story = {
  render: (args: CardComponent) => ({
    props: { ...args },
  }),
};

export const Default: Story = {
  ...Template,
  args: {
    title: "Title",
    content: "This is a card component",
  },
};
