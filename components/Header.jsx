import { Flex, Text, Button, TabNav, Container } from "@radix-ui/themes";
import { auth, signIn } from "@/auth";
import UserSettings from "@/components/UserSettings";

export default async function Header() {
  const session = await auth();
  const user = session?.user;
  return (
    <Container size="3" p="2">
      <Flex direction="row" gap="4" align="center" justify="between">
        <TabNav.Root size="2">
          <TabNav.Link href="/">Home</TabNav.Link>
          <TabNav.Link href="/settings">Settings</TabNav.Link>
        </TabNav.Root>
        {user ? <UserSettings user={user} /> : <SignIn />}
      </Flex>
    </Container>
  );
}

function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit">Sign in</Button>
    </form>
  );
}
