import { AppShell, Button, Stack, Text } from '@mantine/core';
import { Navbar, Header } from '@mantine/core';
export function Welcome() {
  return (
    <AppShell
    padding="md"
      navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
      header={<Header height={60} p="xs">{/* Header content */}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
>    

    <Stack align="center" mt={50}>
      <Text size="xl" weight={500}>
        Welcome to Mantine!
      </Text>
      <Button>Click the button</Button>
    </Stack>
    </AppShell>
   
  );
}
