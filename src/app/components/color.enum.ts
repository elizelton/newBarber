// colors.enum.ts
export enum Color {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
  Dark = 'dark',
  Link = 'link',
  Disabled = 'disabled',
}

// tailwind-colors.enum.ts
export const TailwindColors = {
  [Color.Primary]: 'bg-gray-800 text-white',
  [Color.Secondary]: 'bg-gray-500 text-white',
  [Color.Success]: 'bg-green-500 text-white',
  [Color.Danger]: 'bg-red-500 text-white',
  [Color.Warning]: 'bg-yellow-500 text-black',
  [Color.Info]: 'bg-teal-500 text-white',
  [Color.Light]: 'bg-gray-100 text-black',
  [Color.Dark]: 'bg-gray-800 text-white',
  [Color.Link]: 'text-blue-500 underline',
  [Color.Disabled]: 'bg-gray-300 text-gray-500',
};
