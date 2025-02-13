'use client';
import Link from "next/link";
import Image from "next/image";
import { AppBar, Box, IconButton, Menu, MenuItem, styled, Link as MuiLink } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import NavLink from "./nav-link";

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

const pages = [{ title: "Movies", path: "/movies" }, { title: 'Writing', path: '/writing' }, { title: "News", path: '/news' }]

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleMenu = (event: { currentTarget: HTMLButtonElement }) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <StyledAppBar id="navbar" position="sticky" sx={{ top: 0, p: 2, display: 'flex', flexDirection: 'row', boxShadow: 'none', backgroundColor: "primary.light", alignItems: 'center', gap: 8, justifyContent: { sm: 'space-between', md: 'justify-start' } }}>
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
                {pages.map(p => <Link style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleClose} href={p.path} key={p.title}><MenuItem>{p.title}</MenuItem></Link>)}
            </Menu>

            <Box sx={{ display: { sm: 'none', md: 'flex', gap: 8 } }}>
                {pages.map(p => <NavLink href={p.path} key={p.title}>{p.title}</NavLink>)}
            </Box>

        </StyledAppBar >
    )
}

export default NavBar;