'use client';
import Link from "next/link";
import Image from "next/image";
import { AppBar, Box, styled } from "@mui/material";

const StyledLink = styled(Link)`
    font-weight: 700,
`;

const NavBar = () => {
    return (
        <AppBar position="sticky" sx={{ top: 0, p: 4, display: 'flex', alignItems: 'center', gap: 8, justifyContent: { sm: 'space-between', md: 'justify-start' } }}>
            <StyledLink href="/" style={{ marginRight: '20px' }}>
                <Image
                    src="/movieheads.png"
                    alt="Movieheads logo"
                    width={276.25}
                    height={29.375}
                    priority
                />
            </StyledLink>
            {/* <Menu className="md:hidden" items={[{ text: "Movies", id: 1 }, { text: "Theaters", id: 2 }, { text: "News", id: 3 }, { text: "Writing", id: 4 }]}>
                    <div>M</div>
                </Menu> */}
            <Box sx={{ display: { sm: 'hidden', md: 'flex', gap: 8 } }}>
                <StyledLink href="/movies">
                    MOVIES
                </StyledLink>
                <StyledLink href="/movies">
                    THEATERS
                </StyledLink>
                <StyledLink href="/movies">
                    NEWS
                </StyledLink>
                <StyledLink href="/movies">
                    WRITING
                </StyledLink>
            </Box>

        </AppBar>
    )
}

export default NavBar;