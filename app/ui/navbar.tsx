'use client';
import Link from "next/link";
import Image from "next/image";
import { AppBar, Box, IconButton, Menu, MenuItem, styled, Link as MuiLink } from "@mui/material";
import { keyframes } from '@emotion/react'
import MenuIcon from '@mui/icons-material/Menu';
import { SetStateAction, useState } from "react";

const StyledAppBar = styled(AppBar)(({ theme }) => `
    @keyframes background-to-white {
        from {
            background-color: ${theme.palette.primary.light};
            box-shadow: none;
        }

        to {
            background-color: white;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);
            box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);
        }
    }

    animation-name: background-to-white;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-timeline: scroll(block nearest);
`)


const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleMenu = (event: { currentTarget: HTMLButtonElement }) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <StyledAppBar id="navbar" position="sticky" sx={{ top: 0, p: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8, justifyContent: { sm: 'space-between', md: 'justify-start' } }}>
            <Link href="/" style={{ marginRight: '20px' }}>
                <Image
                    src="/movieheads.png"
                    alt="Movieheads logo"
                    width={276.25}
                    height={29.375}
                    priority
                />
            </Link>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: { sm: 'inherit', md: 'none' } }}
                onClick={handleMenu}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>Movies</MenuItem>
                <MenuItem>Theaters</MenuItem>
                <MenuItem>News</MenuItem>
                <MenuItem>Writing</MenuItem>
            </Menu>

            <Box sx={{ display: { sm: 'none', md: 'flex', gap: 8 } }}>
                <Link href="/movies" passHref legacyBehavior>
                    <MuiLink underline="hover" variant="body1" color="primary.contrastText">MOVIES</MuiLink>
                </Link>
                <Link href="/movies" passHref legacyBehavior>
                    <MuiLink underline="hover" variant="body1" color="primary.contrastText">THEATERS</MuiLink>
                </Link>
                <Link href="/movies" passHref legacyBehavior>
                    <MuiLink underline="hover" variant="body1" color="primary.contrastText">NEWS</MuiLink>
                </Link>
                <Link href="/movies" passHref legacyBehavior>
                    <MuiLink underline="hover" variant="body1" color="primary.contrastText">WRITING</MuiLink>
                </Link>
            </Box>

        </StyledAppBar>
    )
}

export default NavBar;