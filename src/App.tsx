import { Box, Button, Card, Container, Grid, Loader, rem, Skeleton, Text, Tooltip, useMantineTheme } from '@mantine/core';
import { ThemeProvider } from './ThemeProvider';
import { HeaderAction } from './Welcome/HeaderAction';
import { HeroBullets } from './Welcome/HeroBullets';
import { BadgeCard } from './Welcome/BadgeCard';
import Cat from './assets/Cat.png';
import { StatsRingCard } from './Welcome/StatsRingCard';

export default function App() {
  const links = [{
    link: 'https://www.google.com',
    label: 'Mantine',
    links: [{
      link: 'https://www.naver.com',
      label: 'Naver',
    }],
  },
  {
    link: 'https://mantine.dev',
    label: 'Mantine',
    links: [],
  },
  {
    link: 'https://mantine.dev',
    label: 'Mantine',
    links: [],
  },
  {
    link: 'https://mantine.dev',
    label: 'Mantine',
    links: [],
  },
  ];

  const theme = useMantineTheme();
  const PRIMARY_COL_HEIGHT = rem(500);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.sm} / 2)`;

  return (
    <ThemeProvider>
      <HeaderAction links={links} />
      <HeroBullets />
      <Box sx={{
        height: '10vh',
      }}
      />
      <Container my="md">
        <Grid gutter="md">
          <Grid.Col span={4}>
            {<BadgeCard
              image={Cat}
              title="INFOTEAM CAT"
              country="Korea"
              description="
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        "
              badges={[{
                emoji: '👨‍💻', label: 'Developer',
              }, {
                emoji: '😻', label: 'Cat',
              }, {
                emoji: '😽', label: 'CuteCat',
              }]}
            /> ||
                            <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate />}
          </Grid.Col>
          <Grid.Col span={8}>
            <Grid gutter="md">
              <Grid.Col>
                {<StatsRingCard
                  title="GDSC Tasks"
                  completed={50}
                  total={100}
                  stats={[
                    { value: 50, label: 'Remaining' },
                    { value: 100, label: 'Total' },
                  ]}
                /> ||
                                    <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate />}
              </Grid.Col>
              <Grid.Col span={6}>
                {
                  <Card>
                    <Text
                      size="xl"
                      sx={{
                        fontWeight: 'bold',
                        marginBottom: theme.spacing.sm,
                      }}
                    >Button Pool!
                    </Text>
                    <Tooltip
                      label="Let's Go!"
                      transitionProps={{ duration: 100, transition: 'skew-up' }}
                    >
                      <Button
                        sx={{
                          marginRight: theme.spacing.sm,
                          marginBottom: theme.spacing.xs,
                        }}
                        variant="filled"
                      >Just Button
                      </Button>
                    </Tooltip>
                    <Tooltip
                      label="Let's Go!"
                      transitionProps={{ duration: 100, transition: 'skew-up' }}
                    >
                      <Button
                        sx={{
                          marginRight: theme.spacing.sm,
                          marginBottom: theme.spacing.xs,
                        }}
                        variant="default"
                      >Just Button
                      </Button>
                    </Tooltip>
                    <Tooltip
                      label="Let's Go!"
                      transitionProps={{ duration: 100, transition: 'skew-up' }}
                    >
                      <Button
                        sx={{
                          marginRight: theme.spacing.sm,
                        }}
                        variant="gradient"
                      ><Text size="xl" sx={{ fontWeight: 'bolder' }}>THATS A BIG BIRD</Text>
                      </Button>
                    </Tooltip>
                    <Loader />
                  </Card> || <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate />}
              </Grid.Col>
              <Grid.Col span={6}>
                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate />
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
