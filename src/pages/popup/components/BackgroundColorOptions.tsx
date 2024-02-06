import { ColorSwatch, Group } from '@mantine/core';

export default function BackgroundColorOptions() {
  return (
    <div>
      <Group>
        <ColorSwatch color="#009790" />
        <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
        <ColorSwatch color="var(--mantine-color-orange-5)" />
      </Group>
    </div>
  );
}