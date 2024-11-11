import type { Meta, StoryObj } from "@storybook/react";

import { ButtonAction } from "./ButtonAction";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ButtonAction",
  component: ButtonAction,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: "text" },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["default", "ghost"],
      },
    },
    rounded: {
      control: {
        type: "select",
        options: ["none", "sm", "md", "lg", "xl"],
      },
    },
    underline: {
      control: "boolean",
      table: {
        defaultValue: {
          summary: `"false"`,
        },
      },
    },
    disabled: {
      control: "boolean",
      table: {
        defaultValue: {
          summary: `"false"`,
        },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof ButtonAction>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  name: "Default",
  args: {
    children: "Botón",
    disabled: false,
    underline: false,
  },
};

export const PrimarySM: Story = {
  name: "Primary / SM",
  args: {
    children: "Default",
    size: "sm",
    variant: "primary",
  },
};

export const PrimarySMHover: Story = {
  name: "Primary / SM / Hover",
  args: {
    children: "Hover",
    size: "sm",
    variant: "primary",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const PrimarySMPressed: Story = {
  name: "Primary / SM / Pressed",
  args: {
    children: "Pressed",
    size: "sm",
    variant: "primary",
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const PrimarySMDisabled: Story = {
  name: "Primary / SM / Disabled",
  args: {
    children: "Disabled",
    size: "sm",
    variant: "primary",
    disabled: true,
  },
};

export const PrimarySMRoundedNone: Story = {
  name: "Primary / SM / Rounded None",
  args: {
    children: "Botón",
    size: "sm",
    variant: "primary",
    rounded: "none",
  },
};

export const PrimarySMRoundedSM: Story = {
  name: "Primary / SM / Rounded SM",
  args: {
    children: "Botón",
    size: "sm",
    variant: "primary",
    rounded: "sm",
  },
};

export const PrimarySMRoundedMD: Story = {
  name: "Primary / SM / Rounded MD",
  args: {
    children: "Botón",
    size: "sm",
    variant: "primary",
    rounded: "md",
  },
};

export const PrimarySMRoundedLG: Story = {
  name: "Primary / SM / Rounded LG",
  args: {
    children: "Botón",
    size: "sm",
    variant: "primary",
    rounded: "lg",
  },
};

export const PrimarySMRoundedXL: Story = {
  name: "Primary / SM / Rounded XL",
  args: {
    children: "Botón",
    size: "sm",
    variant: "primary",
    rounded: "xl",
  },
};

export const PrimarySMIcon: Story = {
  name: "Primary / SM / Icon",
  args: {
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "16px", height: "16px" }}
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    size: "sm",
    variant: "primary",
  },
};

export const PrimarySMIconText: Story = {
  name: "Primary / SM / Icon with Text",
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ width: "16px", height: "16px", marginRight: "8px" }}
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
        <span>Botón</span>
      </>
    ),
    size: "sm",
    variant: "primary",
  },
};

export const PrimaryMD: Story = {
  name: "Primary / MD",
  args: {
    children: "Default",
    size: "md",
    variant: "primary",
  },
};

export const PrimaryMDHover: Story = {
  name: "Primary / MD / Hover",
  args: {
    children: "Hover",
    size: "md",
    variant: "primary",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const PrimaryMDPressed: Story = {
  name: "Primary / MD / Pressed",
  args: {
    children: "Pressed",
    size: "md",
    variant: "primary",
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const PrimaryMDDisabled: Story = {
  name: "Primary / MD / Disabled",
  args: {
    children: "Disabled",
    size: "md",
    variant: "primary",
    disabled: true,
  },
};

export const PrimaryMDRoundedNone: Story = {
  name: "Primary / MD / Rounded None",
  args: {
    children: "Botón",
    size: "md",
    variant: "primary",
    rounded: "none",
  },
};

export const PrimaryMDRoundedSM: Story = {
  name: "Primary / MD / Rounded SM",
  args: {
    children: "Botón",
    size: "md",
    variant: "primary",
    rounded: "sm",
  },
};

export const PrimaryMDRoundedMD: Story = {
  name: "Primary / MD / Rounded MD",
  args: {
    children: "Botón",
    size: "md",
    variant: "primary",
    rounded: "md",
  },
};

export const PrimaryMDRoundedLG: Story = {
  name: "Primary / MD / Rounded LG",
  args: {
    children: "Botón",
    size: "md",
    variant: "primary",
    rounded: "lg",
  },
};

export const PrimaryMDRoundedXL: Story = {
  name: "Primary / MD / Rounded XL",
  args: {
    children: "Botón",
    size: "md",
    variant: "primary",
    rounded: "xl",
  },
};

export const PrimaryMDIcon: Story = {
  name: "Primary / MD / Icon",
  args: {
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "20px", height: "20px" }}
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    size: "md",
    variant: "primary",
  },
};

export const PrimaryMDIconText: Story = {
  name: "Primary / MD / Icon with Text",
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ width: "20px", height: "20px", marginRight: "8px" }}
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
        <span>Botón</span>
      </>
    ),
    size: "md",
    variant: "primary",
  },
};

export const PrimaryLG: Story = {
  name: "Primary / LG",
  args: {
    children: "Default",
    size: "lg",
    variant: "primary",
  },
};

export const PrimaryLGHover: Story = {
  name: "Primary / LG / Hover",
  args: {
    children: "Hover",
    size: "lg",
    variant: "primary",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const PrimaryLGPressed: Story = {
  name: "Primary / LG / Pressed",
  args: {
    children: "Pressed",
    size: "lg",
    variant: "primary",
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const PrimaryLGDisabled: Story = {
  name: "Primary / LG / Disabled",
  args: {
    children: "Disabled",
    size: "lg",
    variant: "primary",
  },
  parameters: {
    pseudo: {
      disabled: true,
    },
  },
};

export const PrimaryLGRoundedNone: Story = {
  name: "Primary / LG / Rounded None",
  args: {
    children: "Botón",
    size: "lg",
    variant: "primary",
    rounded: "none",
  },
};

export const PrimaryLGRoundedSM: Story = {
  name: "Primary / LG / Rounded SM",
  args: {
    children: "Botón",
    size: "lg",
    variant: "primary",
    rounded: "sm",
  },
};

export const PrimaryLGRoundedMD: Story = {
  name: "Primary / LG / Rounded MD",
  args: {
    children: "Botón",
    size: "lg",
    variant: "primary",
    rounded: "md",
  },
};

export const PrimaryLGRoundedLG: Story = {
  name: "Primary / LG / Rounded LG",
  args: {
    children: "Botón",
    size: "lg",
    variant: "primary",
    rounded: "lg",
  },
};

export const PrimaryLGRoundedXL: Story = {
  name: "Primary / LG / Rounded XL",
  args: {
    children: "Botón",
    size: "lg",
    variant: "primary",
    rounded: "xl",
  },
};

export const PrimaryLGIcon: Story = {
  name: "Primary / LG / Icon",
  args: {
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "24px", height: "24px" }}
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    size: "lg",
    variant: "primary",
  },
};

export const PrimaryLGIconText: Story = {
  name: "Primary / LG / Icon with Text",
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ width: "24px", height: "24px", marginRight: "8px" }}
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
        <span>Botón</span>
      </>
    ),
    size: "lg",
    variant: "primary",
  },
};

export const OutlineSM: Story = {
  name: "Outline / SM",
  args: {
    children: "Default",
    size: "sm",
    variant: "outline",
  },
};

export const OutlineSMHover: Story = {
  name: "Outline / SM / Hover",
  args: {
    children: "Hover",
    size: "sm",
    variant: "outline",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const OutlineSMPressed: Story = {
  name: "Outline / SM / Pressed",
  args: {
    children: "Pressed",
    size: "sm",
    variant: "outline",
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const OutlineSMDisabled: Story = {
  name: "Outline / SM / Disabled",
  args: {
    children: "Disabled",
    size: "sm",
    variant: "outline",
    disabled: true,
  },
};

export const OutlineSMRoundedNone: Story = {
  name: "Outline / SM / Rounded None",
  args: {
    children: "Botón",
    size: "sm",
    variant: "outline",
    rounded: "none",
  },
};

export const OutlineSMRoundedSM: Story = {
  name: "Outline / SM / Rounded SM",
  args: {
    children: "Botón",
    size: "sm",
    variant: "outline",
    rounded: "sm",
  },
};

export const OutlineSMRoundedMD: Story = {
  name: "Outline / SM / Rounded MD",
  args: {
    children: "Botón",
    size: "sm",
    variant: "outline",
    rounded: "md",
  },
};

export const OutlineSMRoundedLG: Story = {
  name: "Outline / SM / Rounded LG",
  args: {
    children: "Botón",
    size: "sm",
    variant: "outline",
    rounded: "lg",
  },
};

export const OutlineSMRoundedXL: Story = {
  name: "Outline / SM / Rounded XL",
  args: {
    children: "Botón",
    size: "sm",
    variant: "outline",
    rounded: "xl",
  },
};

export const OutlineSMIcon: Story = {
  name: "Outline / SM / Icon",
  args: {
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "16px", height: "16px" }}
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    size: "sm",
    variant: "outline",
  },
};

export const OutlineSMIconText: Story = {
  name: "Outline / SM / Icon with Text",
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ width: "16px", height: "16px", marginRight: "8px" }}
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
        <span>Botón</span>
      </>
    ),
    size: "sm",
    variant: "outline",
  },
};

export const OutlineMD: Story = {
  name: "Outline / MD",
  args: {
    children: "Default",
    size: "md",
    variant: "outline",
  },
};

export const OutlineMDHover: Story = {
  name: "Outline / MD / Hover",
  args: {
    children: "Hover",
    size: "md",
    variant: "outline",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const OutlineMDPressed: Story = {
  name: "Outline / MD / Pressed",
  args: {
    children: "Pressed",
    size: "md",
    variant: "outline",
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const OutlineMDDisabled: Story = {
  name: "Outline / MD / Disabled",
  args: {
    children: "Disabled",
    size: "md",
    variant: "outline",
    disabled: true,
  },
};

export const OutlineMDRoundedNone: Story = {
  name: "Outline / MD / Rounded None",
  args: {
    children: "Botón",
    size: "md",
    variant: "outline",
    rounded: "none",
  },
};

export const OutlineMDRoundedSM: Story = {
  name: "Outline / MD / Rounded SM",
  args: {
    children: "Botón",
    size: "md",
    variant: "outline",
    rounded: "sm",
  },
};

export const OutlineMDRoundedMD: Story = {
  name: "Outline / MD / Rounded MD",
  args: {
    children: "Botón",
    size: "md",
    variant: "outline",
    rounded: "md",
  },
};

export const OutlineMDRoundedLG: Story = {
  name: "Outline / MD / Rounded LG",
  args: {
    children: "Botón",
    size: "md",
    variant: "outline",
    rounded: "lg",
  },
};

export const OutlineMDRoundedXL: Story = {
  name: "Outline / MD / Rounded XL",
  args: {
    children: "Botón",
    size: "md",
    variant: "outline",
    rounded: "xl",
  },
};

export const OutlineMDIcon: Story = {
  name: "Outline / MD / Icon",
  args: {
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "20px", height: "20px" }}
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    size: "md",
    variant: "outline",
  },
};

export const OutlineMDIconText: Story = {
  name: "Outline / MD / Icon with Text",
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ width: "20px", height: "20px", marginRight: "8px" }}
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
        <span>Botón</span>
      </>
    ),
    size: "md",
    variant: "outline",
  },
};

export const OutlineLG: Story = {
  name: "Outline / LG",
  args: {
    children: "Default",
    size: "lg",
    variant: "outline",
  },
};

export const OutlineLGHover: Story = {
  name: "Outline / LG / Hover",
  args: {
    children: "Hover",
    size: "lg",
    variant: "outline",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const OutlineLGPressed: Story = {
  name: "Outline / LG / Pressed",
  args: {
    children: "Pressed",
    size: "lg",
    variant: "outline",
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const OutlineLGDisabled: Story = {
  name: "Outline / LG / Disabled",
  args: {
    children: "Disabled",
    size: "lg",
    variant: "outline",
    disabled: true,
  },
};

export const OutlineLGRoundedNone: Story = {
  name: "Outline / LG / Rounded None",
  args: {
    children: "Botón",
    size: "lg",
    variant: "outline",
    rounded: "none",
  },
};

export const OutlineLGRoundedSM: Story = {
  name: "Outline / LG / Rounded SM",
  args: {
    children: "Botón",
    size: "lg",
    variant: "outline",
    rounded: "sm",
  },
};

export const OutlineLGRoundedMD: Story = {
  name: "Outline / LG / Rounded MD",
  args: {
    children: "Botón",
    size: "lg",
    variant: "outline",
    rounded: "md",
  },
};

export const OutlineLGRoundedLG: Story = {
  name: "Outline / LG / Rounded LG",
  args: {
    children: "Botón",
    size: "lg",
    variant: "outline",
    rounded: "lg",
  },
};

export const OutlineLGRoundedXL: Story = {
  name: "Outline / LG / Rounded XL",
  args: {
    children: "Botón",
    size: "lg",
    variant: "outline",
    rounded: "xl",
  },
};

export const OutlineLGIcon: Story = {
  name: "Outline / LG / Icon",
  args: {
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "24px", height: "24px" }}
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    size: "lg",
    variant: "outline",
  },
};

export const OutlineLGIconText: Story = {
  name: "Outline / LG / Icon with Text",
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ width: "24px", height: "24px", marginRight: "8px" }}
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
        <span>Botón</span>
      </>
    ),
    size: "lg",
    variant: "outline",
  },
};

export const GhostSM: Story = {
  name: "Ghost / SM",
  args: {
    children: "Default",
    size: "sm",
    variant: "ghost",
  },
};

export const GhostSMHover: Story = {
  name: "Ghost / SM / Hover",
  args: {
    children: "Hover",
    size: "sm",
    variant: "ghost",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const GhostSMDisabled: Story = {
  name: "Ghost / SM / Disabled",
  args: {
    children: "Disabled",
    size: "sm",
    variant: "ghost",
    disabled: true,
  },
};

export const GhostSMIcon: Story = {
  name: "Ghost / SM / Icon",
  args: {
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "16px", height: "16px" }}
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    size: "sm",
    variant: "ghost",
  },
};

export const GhostSMIconText: Story = {
  name: "Ghost / SM / Icon with Text",
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ width: "16px", height: "16px", marginRight: "8px" }}
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
        <span>Botón</span>
      </>
    ),
    size: "sm",
    variant: "ghost",
  },
};

export const GhostMD: Story = {
  name: "Ghost / MD",
  args: {
    children: "Default",
    size: "md",
    variant: "ghost",
  },
};

export const GhostMDHover: Story = {
  name: "Ghost / MD / Hover",
  args: {
    children: "Hover",
    size: "md",
    variant: "ghost",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const GhostMDDisabled: Story = {
  name: "Ghost / MD / Disabled",
  args: {
    children: "Disabled",
    size: "md",
    variant: "ghost",
    disabled: true,
  },
};

export const GhostMDIcon: Story = {
  name: "Ghost / MD / Icon",
  args: {
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "20px", height: "20px" }}
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    size: "md",
    variant: "ghost",
  },
};

export const GhostMDIconText: Story = {
  name: "Ghost / MD / Icon with Text",
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ width: "20px", height: "20px", marginRight: "8px" }}
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
        <span>Botón</span>
      </>
    ),
    size: "md",
    variant: "ghost",
  },
};

export const GhostLG: Story = {
  name: "Ghost / LG",
  args: {
    children: "Default",
    size: "lg",
    variant: "ghost",
  },
};

export const GhostLGHover: Story = {
  name: "Ghost / LG / Hover",
  args: {
    children: "Hover",
    size: "lg",
    variant: "ghost",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const GhostLGDisabled: Story = {
  name: "Ghost / LG / Disabled",
  args: {
    children: "Disabled",
    size: "lg",
    variant: "ghost",
    disabled: true,
  },
};

export const GhostLGIcon: Story = {
  name: "Ghost / LG / Icon",
  args: {
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: "24px", height: "24px" }}
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    size: "lg",
    variant: "ghost",
  },
};

export const GhostLGIconText: Story = {
  name: "Ghost / LG / Icon with Text",
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ width: "24px", height: "24px", marginRight: "8px" }}
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
        <span>Botón</span>
      </>
    ),
    size: "lg",
    variant: "ghost",
  },
};

export const TextLink: Story = {
  name: "Text Link",
  args: {
    children: "Texto para link",
    variant: "ghost",
    underline: true,
  },
};

export const TextLinkHover: Story = {
  name: "Text Link / Hover",
  args: {
    children: "Texto para link",
    variant: "ghost",
    underline: true,
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};
