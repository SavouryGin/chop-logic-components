import { Meta, StoryObj } from '../../../storybook/react-vite';
import { default as ChopLogicMenu } from '../Menu';
import { default as MenuExample } from './Menu.example';
declare const meta: Meta<typeof ChopLogicMenu>;
export default meta;
type Story = StoryObj<typeof MenuExample>;
export declare const VerticalMenu: Story;
export declare const HorizontalMenu: Story;
