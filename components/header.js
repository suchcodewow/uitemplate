import { Flex, Text, Button, TabNav } from "@radix-ui/themes";

export default function Header() {
  return (
    <Flex direction="column" gap="4">
      <TabNav.Root size="2">
        <TabNav.Link href="/">Home</TabNav.Link>
        <TabNav.Link href="/settings">Settings</TabNav.Link>
      </TabNav.Root>
    </Flex>
  );
}
