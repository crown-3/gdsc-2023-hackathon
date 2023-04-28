import { Container, Grid, rem, Skeleton, useMantineTheme } from '@mantine/core';
import { ThemeProvider } from './ThemeProvider';
import { HeaderAction } from './Welcome/HeaderAction';
import { HeroBullets } from './Welcome/HeroBullets';

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
            <Container my="md">
                <Grid gutter="md">
                    <Grid.Col span={4}>
                        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate />
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Grid gutter="md">
                            <Grid.Col>
                                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate />
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
